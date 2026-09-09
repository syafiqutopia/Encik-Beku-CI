#!/usr/bin/env python3
"""Conservative SVG optimizer for the Encik Beku logo masters.

Removes the Adobe Illustrator PGF <metadata> blob (which is ~97% of every
file and is pure editor round-trip data), strips editor-only namespaces and
attributes, trims coordinate precision, and normalizes fill hex casing.

Geometry is NEVER restructured: every <path>, <polygon>, <rect>, <circle>
and <g> is preserved exactly as authored, in order. Do not "improve" this by
merging same-fill shapes — subpath winding direction is not guaranteed
consistent across elements and merging punches holes in the artwork.
"""
import re, sys, os

# Normalize the two near-identical navies in the master art to one value.
INK = {
    '#23376f': '#24366F', '#24366f': '#24366F',
    '#f67f31': '#F67F31',
    '#7bd3f7': '#7BD3F7',
    '#fff': '#FFFFFF', '#ffffff': '#FFFFFF',
    '#000': '#000000', '#000000': '#000000',
}

NUM = re.compile(r'-?\d+\.\d+')


def trim(m, dp=2):
    s = f'{round(float(m.group()), dp):.{dp}f}'.rstrip('0').rstrip('.')
    return s if s not in ('', '-') else '0'


def optimize(src):
    s = src

    # 1. drop the prolog, comments, and the Adobe PGF metadata blob
    s = re.sub(r'<\?xml[^>]*\?>', '', s)
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S)
    s = re.sub(r'<metadata>.*?</metadata>', '', s, flags=re.S)
    s = re.sub(r'<foreignObject.*?</foreignObject>', '', s, flags=re.S)
    s = re.sub(r'</?switch[^>]*>', '', s)

    # 2. strip editor-only namespaces and attributes
    s = re.sub(r'\sxmlns:(i|x|graph|a|sfw)="[^"]*"', '', s)
    s = re.sub(r'\s(i|x|graph|a|sfw):[\w.-]+="[^"]*"', '', s)
    s = re.sub(r'\s(id|data-name|class|version|xml:space)="[^"]*"', '', s)

    # 3. normalize fills, trim precision
    s = re.sub(r'fill="(#[0-9a-fA-F]{3,6})"',
               lambda m: f'fill="{INK.get(m.group(1).lower(), m.group(1).upper())}"', s)
    s = NUM.sub(trim, s)

    # 4. collapse whitespace between tags
    s = re.sub(r'>\s+<', '><', s).strip()

    # 5. give the root explicit dimensions + an accessible name
    view = re.search(r'viewBox="([^"]+)"', s).group(1)
    _, _, vw, vh = [float(n) for n in view.replace(',', ' ').split()]
    root = re.search(r'<svg[^>]*>', s).group()
    new_root = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}" '
                f'width="{vw:g}" height="{vh:g}" role="img" aria-label="Encik Beku">')
    return s.replace(root, new_root, 1)


if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    raw = open(src, encoding='utf-8').read()
    out = optimize(raw)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    open(dst, 'w', encoding='utf-8').write(out)

    # geometry guard: element counts must survive the pass unchanged
    def counts(t):
        return {k: len(re.findall(rf'<{k}\b', t))
                for k in ('path', 'polygon', 'rect', 'circle', 'ellipse', 'polyline', 'g')}
    a, b = counts(raw), counts(out)
    assert a == b, f'GEOMETRY LOST in {dst}: {a} -> {b}'
    print(f'{os.path.basename(dst):40s} {len(raw):>8,} -> {len(out):>7,} '
          f'({100 - len(out) * 100 // len(raw)}% smaller)  {b}')

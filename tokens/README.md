# Tokens

## Files

| File | Status | Purpose |
|---|---|---|
| `tokens.source.mjs` | **authored** | The only place a brand value is written |
| `tokens.css` | generated | Zero-build CSS drop-in |

`code/tokens/tokens.css`, `code/tokens/tokens.ts` and
`code/tokens/tailwind.preset.ts` are generated from the same source, so the four
formats cannot drift.

```bash
node tools/build-tokens.mjs
```

**Never hand-edit a generated file.** The next build overwrites it.

## Naming

All tokens are prefixed `--eb-`.

| Group | Example | Notes |
|---|---|---|
| Brand palette | `--eb-tech-blue` | The documented 60/30/10 colours |
| Logo inks | `--eb-ink-navy` | **Logo reproduction only.** Never for layout or UI |
| Scales | `--eb-blue-500`, `--eb-neutral-200` | Derived ramps |
| Accessibility | `--eb-pumpkin-ink`, `--eb-on-accent` | Contrast-safe derivatives |
| Status | `--eb-success`, `--eb-danger` | Functional, outside the brand palette |
| Semantic | `--eb-fg-1`, `--eb-bg-brand` | **Consume these in components** |

Components should reference the semantic layer, not raw palette values, so a
theme change lands in one place.

## Themes

Light is the default. Dark activates on `:root[data-theme="dark"]`, and on
`prefers-color-scheme: dark` unless `data-theme="light"` is set explicitly.

## Adding a colour

1. Add it to `tokens.source.mjs`.
2. Measure its contrast against white and against the grounds it will sit on.
3. Record the measurement in [CI.md §9](../CI.md).
4. Rebuild and commit the source plus all generated files together.

import Foundation
import WebKit
import AppKit

// Exports an SVG to a clean, self-contained vector PDF via WebKit's PDF
// writer. Unlike cropping a page out of the brand guidelines, the result
// contains ONLY the logo — no hidden content outside the crop box.
//
// usage: svg-to-pdf <in.svg> <out.pdf> <widthPt> <heightPt>
let a = CommandLine.arguments
guard a.count >= 5 else {
    FileHandle.standardError.write("usage: svg-to-pdf in.svg out.pdf wPt hPt\n".data(using: .utf8)!)
    exit(1)
}
let svgURL = URL(fileURLWithPath: a[1])
let outPath = a[2]
let W = Double(a[3])!, H = Double(a[4])!

_ = NSApplication.shared
NSApplication.shared.setActivationPolicy(.accessory)

let web = WKWebView(frame: NSRect(x: 0, y: 0, width: W, height: H))
web.setValue(false, forKey: "drawsBackground")

let html = """
<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;background:transparent}
img{display:block;width:\(W)px;height:\(H)px}</style>
<img src="\(svgURL.lastPathComponent)">
"""
let tmp = svgURL.deletingLastPathComponent().appendingPathComponent(".svg2pdf-tmp.html")
try! html.write(to: tmp, atomically: true, encoding: .utf8)
defer { try? FileManager.default.removeItem(at: tmp) }

final class Nav: NSObject, WKNavigationDelegate {
    var done = false
    func webView(_ w: WKWebView, didFinish n: WKNavigation!) { done = true }
}
let nav = Nav()
web.navigationDelegate = nav
web.loadFileURL(tmp, allowingReadAccessTo: svgURL.deletingLastPathComponent())

let deadline = Date().addingTimeInterval(30)
while !nav.done && Date() < deadline { RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.05)) }
let settle = Date().addingTimeInterval(1.5)
while Date() < settle { RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.05)) }

var finished = false
let cfg = WKPDFConfiguration()
cfg.rect = CGRect(x: 0, y: 0, width: W, height: H)
web.createPDF(configuration: cfg) { result in
    switch result {
    case .success(let data):
        try? data.write(to: URL(fileURLWithPath: outPath))
        print("wrote \(outPath) — \(data.count) bytes")
    case .failure(let e):
        FileHandle.standardError.write("pdf failed: \(e)\n".data(using: .utf8)!)
        exit(1)
    }
    finished = true
}
while !finished { RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.05)) }

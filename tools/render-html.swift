import Foundation
import WebKit
import AppKit

// Renders a local HTML file in WKWebView and writes a PNG screenshot.
// usage: shot <file.html> <out.png> <width> <height>
let a = CommandLine.arguments
guard a.count >= 5 else { FileHandle.standardError.write("usage: shot in.html out.png w h\n".data(using:.utf8)!); exit(1) }
let inURL = URL(fileURLWithPath: a[1]), outPath = a[2]
let W = Double(a[3])!, H = Double(a[4])!

let app = NSApplication.shared
app.setActivationPolicy(.accessory)

let cfg = WKWebViewConfiguration()
let web = WKWebView(frame: NSRect(x: 0, y: 0, width: W, height: H), configuration: cfg)
web.setValue(false, forKey: "drawsBackground")

class D: NSObject, WKNavigationDelegate {
    var done = false
    func webView(_ w: WKWebView, didFinish n: WKNavigation!) { done = true }
    func webView(_ w: WKWebView, didFail n: WKNavigation!, withError e: Error) {
        FileHandle.standardError.write("load failed: \(e)\n".data(using:.utf8)!); exit(1)
    }
}
let d = D()
web.navigationDelegate = d
web.loadFileURL(inURL, allowingReadAccessTo: inURL.deletingLastPathComponent().deletingLastPathComponent().deletingLastPathComponent())

let deadline = Date().addingTimeInterval(30)
while !d.done && Date() < deadline { RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.05)) }
// settle: let fonts and images paint
let settle = Date().addingTimeInterval(1.6)
while Date() < settle { RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.05)) }

let cfgS = WKSnapshotConfiguration()
cfgS.rect = NSRect(x: 0, y: 0, width: W, height: H)
var finished = false
web.takeSnapshot(with: cfgS) { image, err in
    guard let image = image, let tiff = image.tiffRepresentation,
          let rep = NSBitmapImageRep(data: tiff),
          let png = rep.representation(using: .png, properties: [:]) else {
        FileHandle.standardError.write("snapshot failed: \(String(describing: err))\n".data(using:.utf8)!); exit(1)
    }
    try? png.write(to: URL(fileURLWithPath: outPath))
    finished = true
}
while !finished { RunLoop.current.run(mode: .default, before: Date().addingTimeInterval(0.05)) }
print("wrote \(outPath)")

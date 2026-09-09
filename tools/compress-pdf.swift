import Foundation
import PDFKit
import AppKit

// Re-renders a PDF's pages as JPEG and reassembles them, for web delivery.
// The originals stay in _source/ — this only produces a lighter download.
// usage: compress-pdf <in.pdf> <out.pdf> <scale> <jpegQuality 0-1>
let a = CommandLine.arguments
guard a.count >= 5, let doc = PDFDocument(url: URL(fileURLWithPath: a[1])) else { exit(1) }
let scale = CGFloat(Double(a[3])!), quality = Double(a[4])!
let out = PDFDocument()
for i in 0..<doc.pageCount {
    guard let page = doc.page(at: i) else { continue }
    let r = page.bounds(for: .mediaBox)
    let w = Int(r.width * scale), h = Int(r.height * scale)
    guard let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: w, pixelsHigh: h,
            bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
            colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0),
          let ctx = NSGraphicsContext(bitmapImageRep: rep) else {
        FileHandle.standardError.write("page \(i+1): could not build bitmap\n".data(using:.utf8)!)
        continue }
    NSGraphicsContext.saveGraphicsState(); NSGraphicsContext.current = ctx
    let cg = ctx.cgContext
    cg.setFillColor(NSColor.white.cgColor); cg.fill(CGRect(x:0,y:0,width:w,height:h))
    cg.scaleBy(x: scale, y: scale); cg.translateBy(x: -r.origin.x, y: -r.origin.y)
    page.draw(with: .mediaBox, to: cg)
    NSGraphicsContext.restoreGraphicsState()
    guard let jpeg = rep.representation(using: .jpeg,
            properties: [.compressionFactor: quality]) else {
        FileHandle.standardError.write("page \(i+1): jpeg encode failed\n".data(using:.utf8)!)
        continue }
    guard let img = NSImage(data: jpeg) else {
        FileHandle.standardError.write("page \(i+1): image decode failed\n".data(using:.utf8)!)
        continue }
    // PDFPage(image:) derives the page box from the image's POINT size, so set
    // that to the original page rect. Setting mediaBox afterwards would crop
    // the bitmap instead of scaling it.
    img.size = NSSize(width: r.width, height: r.height)
    guard let newPage = PDFPage(image: img) else {
        FileHandle.standardError.write("page \(i+1): PDFPage(image:) failed\n".data(using:.utf8)!)
        continue }
    out.insert(newPage, at: out.pageCount)
}
out.write(to: URL(fileURLWithPath: a[2]))
print("\(out.pageCount) pages -> \(a[2])")

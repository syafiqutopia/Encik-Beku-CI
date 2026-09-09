import AVFoundation
import AppKit
import Foundation

// Extracts evenly spaced frames from a video as PNGs, so they can be viewed.
// usage: frames <video> <out-dir> [count]
let a = CommandLine.arguments
guard a.count >= 3 else {
    FileHandle.standardError.write("usage: frames <video> <out-dir> [count]\n".data(using: .utf8)!)
    exit(1)
}
let url = URL(fileURLWithPath: a[1])
let outDir = a[2]
let count = a.count > 3 ? Int(a[3])! : 6

let asset = AVURLAsset(url: url)
let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = .zero
gen.requestedTimeToleranceAfter = .zero

let dur = CMTimeGetSeconds(asset.duration)
try? FileManager.default.createDirectory(atPath: outDir, withIntermediateDirectories: true)

for i in 0..<count {
    let t = dur * (Double(i) + 0.5) / Double(count)
    let time = CMTime(seconds: t, preferredTimescale: 600)
    do {
        let cg = try gen.copyCGImage(at: time, actualTime: nil)
        let rep = NSBitmapImageRep(cgImage: cg)
        guard let png = rep.representation(using: .png, properties: [:]) else { continue }
        let path = "\(outDir)/frame-\(String(format: "%02d", i))-\(String(format: "%.1f", t))s.png"
        try png.write(to: URL(fileURLWithPath: path))
        print("\(path)  (\(cg.width)x\(cg.height))")
    } catch {
        FileHandle.standardError.write("frame at \(t)s failed: \(error)\n".data(using: .utf8)!)
    }
}

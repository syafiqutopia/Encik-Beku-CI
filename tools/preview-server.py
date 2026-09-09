#!/usr/bin/env python3
"""Local preview server that tells the browser never to cache.

python3 -m http.server sends no cache headers, so Chrome keeps serving a stale
about.html even after a rebuild — the ?v= stamps only bust CSS and JS, not the
page that links them.
"""
import functools, http.server, socketserver, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080


class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), NoCache) as httpd:
    print(f"Encik Beku preview (no-cache)  http://localhost:{PORT}/website/")
    httpd.serve_forever()

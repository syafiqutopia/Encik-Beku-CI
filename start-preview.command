#!/bin/bash
# Double-click this file to start the local preview server.
cd "$(dirname "$0")"
echo "Encik Beku — local preview"
echo "  http://localhost:8080/website/"
echo
echo "Leave this window open while you browse. Close it (or press Ctrl-C) to stop."
open "http://localhost:8080/website/"
# Serves with no-store headers, so a rebuild always shows up on refresh.
python3 tools/preview-server.py 8080

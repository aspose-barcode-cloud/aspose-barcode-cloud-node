#!/bin/bash
set -euo pipefail

# This is a simple echo server script.
# It uses netcat (nc) to listen on localhost port.
# For each incoming connection, it starts a loop that reads lines from the connection and echoes them back.

port=47972
echo "Starting echo server on port $port"
nc localhost $port -lc 'while true; do read line; echo "$line"; done'

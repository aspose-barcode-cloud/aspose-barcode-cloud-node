#!/bin/bash

set -euo pipefail

format_md_file () {
  echo "$1"
  sed -i -e 's/[[:space:]]*$//' "$1"
}

format_md_file "README.md"

for filename in ./docs/*.md; do
  format_md_file "$filename"
done

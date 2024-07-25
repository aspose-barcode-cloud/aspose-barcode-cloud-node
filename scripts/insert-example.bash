#!/bin/bash
set -euo pipefail

cd "$( dirname "${BASH_SOURCE[0]}" )/.."

python "./scripts/insert-example.py" "README.template" > "README.md"

rm "README.template"

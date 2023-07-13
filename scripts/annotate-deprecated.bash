#!/bin/bash
set -euo pipefail

find src -name "*.ts" -exec sed -i -E 's_\* DEPRECATED:_* @deprecated_g' "{}" \;

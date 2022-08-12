#!/bin/bash

set -euo pipefail

sed -n '/^```js/,/^```/ p' < README.md | sed '/^```/ d'

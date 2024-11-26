#!/bin/bash

set -euo pipefail

FILE_PATH=$1;
RUN_DIR=$2
SCRIPT_DIR=$3
CONFIG_FILE_PATH=$4
echo "Run snippet file: $FILE_PATH"

python ${SCRIPT_DIR}/insert-credentials.py $FILE_PATH $CONFIG_FILE_PATH $RUN_DIR

node ./$RUN_DIR/"${FILE_PATH##*/}" || exit 1
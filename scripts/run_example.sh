#!/bin/bash

set -euo pipefail

TEST_DIR="demo"

rm -rf "${TEST_DIR}" || true
mkdir -p "${TEST_DIR}"
cp example.js "${TEST_DIR}"

pushd ${TEST_DIR}
mkdir -p node_modules/aspose-barcode-cloud-node
pushd "$_"
ln -sv -f ../../../package.json .
ln -sv -F ../../../dist/ .
popd

# Run
node example.js
popd

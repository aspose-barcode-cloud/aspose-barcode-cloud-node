#!/bin/bash
set -euo pipefail

readme_file=$1

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

pushd "${SCRIPT_DIR}/.."

(grep -oP '[^/]+\.yml(?=/badge.svg)' "${readme_file}" || (echo "No badges in ${readme_file}" ; exit 1)) | while read -r workflow_file; do
    path_to_workflow=".github/workflows/${workflow_file}"
    if [ ! -e "${path_to_workflow}" ]
    then
        echo "Error, workflow does not exist \"${path_to_workflow}\""
        exit 1
    fi
done

(grep -oP '[^/]+\.yml/badge.svg(?!\?branch=main)' "${readme_file}" || echo ) | while read -r badge_without_branch; do
    if [ -z "${badge_without_branch}" ]; then continue; fi
    echo "Badge without branch \"${badge_without_branch}\""
    exit 1
done

popd

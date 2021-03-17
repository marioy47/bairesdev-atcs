#!/bin/sh
# docker/app/entrypoint.sh

set -euo pipefail

echo "Executing $@"

exec "$@"


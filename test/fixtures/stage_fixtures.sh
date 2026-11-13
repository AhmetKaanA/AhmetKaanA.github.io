#!/usr/bin/env bash
# Temporarily copies template sample posts from test/fixtures into the site so
# integration tests can check plugin features (comments, distill) that this
# site's own content does not use. Everything staged is removed on exit.
#
# Usage (from repo root, after defining a cleanup function):
#   source test/fixtures/stage_fixtures.sh
#   stage_fixture test/fixtures/posts/<post>.md _posts/<post>.md
#   ... and call unstage_fixtures from your EXIT trap.

staged_fixtures=()

stage_fixture() {
  local src="$1" dest="$2"
  if [ -e "${dest}" ]; then
    echo "refusing to overwrite existing ${dest} with test fixture" >&2
    exit 1
  fi
  mkdir -p "$(dirname "${dest}")"
  cp "${src}" "${dest}"
  staged_fixtures+=("${dest}")
}

unstage_fixtures() {
  local f
  for f in ${staged_fixtures[@]+"${staged_fixtures[@]}"}; do
    rm -f "${f}"
    rmdir "$(dirname "${f}")" 2>/dev/null || true
  done
}

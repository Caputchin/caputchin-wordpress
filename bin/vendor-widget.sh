#!/usr/bin/env bash
# Copies the published @caputchin/widget browser bundle into assets/widget/ so the
# plugin serves it from the site itself. WordPress.org does not allow plugins to
# load JavaScript from a third-party CDN, so the bundle ships inside the plugin.
#
# Usage: bin/vendor-widget.sh <version>   (an exact version, for example 3.6.0)
# npm verifies the tarball against the registry's integrity hash on download.
set -euo pipefail

VERSION=${1:?usage: bin/vendor-widget.sh <exact @caputchin/widget version>}
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
	echo "expected an exact version like 3.6.0, got: $VERSION" >&2
	exit 1
fi

ROOT=$(cd "$(dirname "$0")/.." && pwd)
DEST="$ROOT/assets/widget"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

( cd "$TMP" && npm pack "@caputchin/widget@$VERSION" --silent >/dev/null && tar xzf caputchin-widget-*.tgz )

rm -rf "$DEST"
mkdir -p "$DEST"
# widget.js is the script-tag (IIFE) build. It finds the proof-of-work wasm and
# the pako fallback next to its own URL, so both ship beside it.
for f in dist/widget.js dist/cap_wasm_bg.wasm dist/pako_inflate.min.js LICENSE NOTICE; do
	cp "$TMP/package/$f" "$DEST/"
done
printf '%s\n' "$VERSION" > "$DEST/VERSION"
echo "vendored @caputchin/widget@$VERSION into assets/widget/"
echo "update the widget source link in readme.txt (== Source code ==) to the tag widget-v$VERSION"

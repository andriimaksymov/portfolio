#!/bin/sh
# Subsets the self-hosted Geist fonts to the characters this English site uses
# (Basic Latin, Latin-1, common punctuation, arrows). That cuts each file from
# ~70 KB to a fraction of it. The sources are the full fonts from the `geist`
# npm package. Re-run only if the copy needs characters outside these ranges;
# tests/smoke.spec.ts fails if the page uses a character that isn't covered.
#
# Needs fonttools + brotli: pip3 install --user fonttools brotli
# Usage: sh scripts/subset-fonts.sh <path-to-geist/dist/fonts>
set -eu
SRC="${1:?path to geist/dist/fonts, e.g. from: npm pack geist && tar xf geist-*.tgz}"
OUT="src/app/fonts"
UNICODES="U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2010-2027,U+2030-203A,U+20AC,U+2122,U+2190-2193,U+2212"
for pair in "geist-sans/Geist-Variable.woff2:Geist-Variable.woff2" "geist-mono/GeistMono-Variable.woff2:GeistMono-Variable.woff2"; do
  in="$SRC/${pair%%:*}"
  out="$OUT/${pair##*:}"
  python3 -m fontTools.subset "$in" --unicodes="$UNICODES" --layout-features='*' --flavor=woff2 --output-file="$out"
  echo "$out: $(wc -c < "$out") bytes"
done

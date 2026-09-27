#!/usr/bin/env bash
# Builds the static site and publishes it to the gh-pages branch.
# Usage: pnpm run deploy
set -euo pipefail

cd "$(dirname "$0")/.."
REPO_URL="$(git remote get-url origin)"
REPO_NAME="$(basename -s .git "$REPO_URL")"

NEXT_PUBLIC_BASE_PATH="/$REPO_NAME" pnpm build
touch out/.nojekyll # let GitHub Pages serve the _next/ folder

cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f "$REPO_URL" gh-pages
rm -rf .git
echo "Published to gh-pages."

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://LuisC73.github.io/fylo_dark
# git push -f git@github.com:LuisC73/fylo_dark.git main:gh-pages

cd -
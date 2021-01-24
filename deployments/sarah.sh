#!/bin/bash
set -x

echo "Deploying Sarah portfolio"

echo "Starting BUILD"
npm run build
echo "BUILD COMPLETE"

echo "Creating GH PAGES"
cd build
echo "https://mrs.wkgreen.dev" > CNAME
git init
git remote add origin git@github.com:kjintroverted/smgreen.git
git checkout -b gh-pages
git add .
git config --global user.name "kjintroverted"
git config --global user.email wkgreen13@gmail.com
git commit -m "deployment"
git push -uf origin gh-pages

echo "Cleanup"
cd ..
rm -rf build
echo "DONE"
rm -rf ../static
NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js build
mv -v build/* ../
rm -rf build
git add ../static/
git commit -am "${1:-"New release"}"
git push
yarn build
rm -rf ../../static
mv -v build/* ../
rm -rf build
git add ../static/
git commit -am "${1:-"New release"}"
git push
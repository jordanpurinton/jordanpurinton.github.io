rm -rf ../static
react-scripts build
mv -v build/* ../
rm -rf build
git add ../static/
git commit -am "${1:-"New release"}"
git push
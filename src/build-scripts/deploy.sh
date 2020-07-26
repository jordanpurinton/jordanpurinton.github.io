rm -rf ../../static
pushd ../
    react-scripts build
popd
mv -v build/* ../
rm -rf build
git add ../static/
git commit -am "${1:-"New release"}"
git push
rm -rf ../static
react-scripts build
mv -v build/* ../
rm -rf build
git add ../static/
git commit -am "New release"
git push
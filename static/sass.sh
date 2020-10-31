#!/bin/sh

# sass --trace --sourcemap --scss --unix-newlines -I ./sass/ --watch ./sass/main.scss:./css/main.css
sassc --sourcemap -I ./sass/ ./sass/main.scss ./css/main.css

yarn install
yarn build
py3 -m http.server 8088 --bind 0.0.0.0 --directory ./dist


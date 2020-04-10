
./node_modules/node-pre-gyp/bin/node-pre-gyp clean configure 2>/dev/null
./node_modules/node-pre-gyp/bin/node-pre-gyp install --build-from-source 2>/dev/null
./node_modules/.bin/electron-rebuild


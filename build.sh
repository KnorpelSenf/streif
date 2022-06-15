#!/bin/bash

cd crates/binding_core_wasm
wasm-pack build --out-name wasm --release --scope=swc --target web
rm -f pkg/{.gitignore,package.json}

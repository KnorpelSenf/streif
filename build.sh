#!/bin/bash

cd crates/binding_core_wasm
wasm-pack build --out-name wasm --release --scope=swc --target web
rm pkg/{.gitignore,package.json}

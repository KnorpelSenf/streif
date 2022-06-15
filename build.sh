#!/bin/bash

cd crates/binding_core_wasm
wasm-pack build --out-name wasm --release --scope=swc --target web
cd -
cp -rv crates/binding_core_wasm/pkg server
ls -l server

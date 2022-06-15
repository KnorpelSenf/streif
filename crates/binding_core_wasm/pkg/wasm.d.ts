/* tslint:disable */
/* eslint-disable */
/**
* @param {string} s
* @param {any} opts
* @returns {any}
*/
export function minifySync(s: string, opts: any): any;
/**
* @param {string} s
* @param {any} opts
* @returns {any}
*/
export function parseSync(s: string, opts: any): any;
/**
* @param {any} s
* @param {any} opts
* @returns {any}
*/
export function printSync(s: any, opts: any): any;

/**
* @param {string} code
* @param {any} opts
* @param {Record<string, ArrayBuffer>} experimental_plugin_bytes_resolver An object contains bytes array for the plugin
* specified in config. Key of record represents the name of the plugin specified in config. Note this is an experimental
* interface, likely will change.
* @returns {any}
*/
export function transformSync(code: string, opts: any, experimental_plugin_bytes_resolver?: any): any;



export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly minifySync: (a: number, b: number, c: number, d: number) => void;
  readonly parseSync: (a: number, b: number, c: number, d: number) => void;
  readonly printSync: (a: number, b: number, c: number) => void;
  readonly transformSync: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;

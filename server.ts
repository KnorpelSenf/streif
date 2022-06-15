import { serve } from "https://deno.land/std@0.143.0/http/server.ts";
import initSwc, { transformSync } from "./crates/binding_core_wasm/pkg/wasm.js";
await initSwc();

const opts = {
  jsc: {
    parser: {
      syntax: "typescript",
      tsx: true,
      decorators: true,
      dynamicImport: true,
    },
    target: "es2016",
  },
};

async function handler(req: Request): Promise<Response> {
  const target = new URL(req.url).pathname.substring(1);
  console.log(target);
  let url: URL;
  try {
    url = new URL(target);
  } catch {
    return new Response("no a URL", { status: 400 });
  }
  const src = await fetch(url);
  if (!src.ok) return new Response("cannot fetch", { status: 400 });
  if (src.status !== 200) return new Response("wrong status", { status: 400 });
  let ts: string;
  try {
    ts = await src.text();
  } catch {
    return new Response("no text", { status: 400 });
  }
  const js = transformSync(ts, opts, {}).code;
  return new Response(js, {
    headers: {
      "content-type": "application/javascript",
      "access-control-allow-origin": "*",
    },
  });
}

await serve(handler);

import { serve } from "https://deno.land/std@0.143.0/http/server.ts";
import initSwc, { transformSync } from "./pkg/wasm.js";
await initSwc();

async function handler(req: Request): Promise<Response> {
  const target = new URL(req.url);
  console.log(target.href);
  let url: URL;
  try {
    url = new URL(target.pathname.substring(1));
  } catch {
    return new Response("not a URL", { status: 400 });
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
  const parser = {
    syntax: "typescript",
    tsx: target.searchParams.get("tsx") !== null,
    decorators: target.searchParams.get("decorators") !== null,
    dynamicImport: target.searchParams.get("dynamicImport") !== null,
  };
  const opts = { jsc: { parser, target: "es2022" } };
  const js = transformSync(ts, opts, {}).code;
  return new Response(js, {
    headers: {
      "content-type": "application/javascript",
      "access-control-allow-origin": "*",
    },
  });
}

await serve(handler);

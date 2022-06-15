# <h1 align="center">streif/</h1>

_<h3 align="right">strip types to use TS in the browser</h3>_

---

streif turns any TypeScript CDN into a JavaScript CDN. It lets you use a
[Deno](https://github.com/denoland/deno) module in the browser.

## Usage

All you need to do is to prefix your URL with `https://streif.deno.dev/`.

> `example.com` → `https://streif.deno.dev/example.com`

For example, you can use the binary heap from Deno's standard library via
`https://streif.deno.dev/https://deno.land/std@0.143.0/collections/mod.ts`. Note
that the original URL is simply
`https://deno.land/std@0.143.0/collections/mod.ts`.

Copy this into a file called `index.html` and view it in your browser.

```html
<html>

<body>
    <script type="module">
        import { BinaryHeap } from 'https://streif.deno.dev/https://deno.land/std@0.143.0/collections/mod.ts'

        const heap = new BinaryHeap()
        heap.push(4, 8, 3, 4, 5)

        const len = heap.length
        for (let i = 0; i < len; i++) console.log(heap.pop())
    </script>
</body>

</html>
```

## Configuration

You can determine how TypeScript should be parsed using one of the supported compiler options.

- `tsx`
- `decorators`
- `dynamicImport`

Add them as search parameters, e.g. append `?tsx` or `?tsx&decorators` to the URL.

## How Does It Work

We use a fork of the amazing [SWC](https://swc.rs/) project and run it on [Deno Deploy](https://deno.com/deploy/).

## Project Status

Very early.
You are likely able to find modules where this breaks.
I hacked this in 24 hours.

But it's an exciting tool, please contribute!

## What Does the Name Mean?

_streif_ is the imperative mood of the German translation of the verb _to strip_.
Cuz it strips types.
That's all it does.
Okay?

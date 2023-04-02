import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./main.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "fmops",
    version: Deno.args[0],
    description: "FMOps typescript sdk",
    license: "Apache 2.0",
    repository: {
      type: "git",
      url: "git+https://github.com/fmops/fmops-typescript.git",
    },
    bugs: {
      url: "https://github.com/fmops/fmops-typescript/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
const esbuild = require("esbuild");
const pkg = require("./package.json");

const DEV = process.argv.includes("--dev");

(async () => {
  try {
    await esbuild.build({
      define: {
        "process.env.NODE_ENV": DEV ? '"development"' : '"production"',
      },
      entryPoints: ["index.js"],
      outfile: pkg.main,
      loader: { ".js": "jsx" },
      target: ["es2016"],
      format: "cjs",
      logLevel: "info",
      watch: DEV,
    });
  } catch (e) {
    console.error("Something went wrong!", e); // eslint-disable-line
  }
})();

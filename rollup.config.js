export default {
  input: "src/cli.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    compact: true,
  },
  external: ["node-fetch", "universal-analytics", "chalk", "boxen", "uuid"],
};

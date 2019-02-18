const fs = require("fs-extra");

let pkg = require("../package.json");

async function run() {
  fs.copyFileSync("src/demo/index.html", "target/dist/index.html");
  fs.mkdirSync("target/dist/callbacks");
  fs.copyFileSync("src/demo/callbacks/oidc-callback.html", "target/dist/callbacks/oidc-callback.html");
}

if (!process.env.WATCH) run();

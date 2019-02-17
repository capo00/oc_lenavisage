import UU5 from "uu5g04";
import { App } from "./app.js";
export * from "./app.js";
export default { App };

console.log(`${process.env.NAME}-${process.env.VERSION} © Unicorn\nTerms of Use: https://unicorn.com/tou/${process.env.NAME}`);
UU5.Environment.addRuntimeLibrary({ name: process.env.NAME, version: process.env.VERSION });

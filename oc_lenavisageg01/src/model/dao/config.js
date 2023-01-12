import Schema from "./schema.js";

export class Config extends Schema {
  static CODE = "config";

  static getCode() {
    return this.CODE;
  }
}

export default Config;

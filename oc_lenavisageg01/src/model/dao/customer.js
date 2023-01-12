import Schema from "./schema.js";

export class Customer extends Schema {
  static CODE = "customer";

  static getCode() {
    return this.CODE;
  }
}

export default Customer;

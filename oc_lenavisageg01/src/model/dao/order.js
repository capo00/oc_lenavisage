import Schema from "./schema.js";

export class Order extends Schema {
  static CODE = "order";

  static getCode(year) {
    return [this.CODE, year || new Date().getFullYear()].join("");
  }
}

export default Order;

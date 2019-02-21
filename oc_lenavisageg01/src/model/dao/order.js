import * as UU5 from "uu5g04";
import Schema from "./schema.js";

export class Order extends Schema {
  static CODE = "ORDER";
  static NAME = "order.json";

  static getCode() {
    let date = new Date();
    return [this.CODE, UU5.Common.Tools.formatDate(date, "Y")].join("_");
  }
}

export default Order;

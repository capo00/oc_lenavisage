import regeneratorRuntime from "regenerator-runtime";
import * as UU5 from "uu5g04";
import * as UuOs8 from "../uu-os8/uu-os8.js";
import Tools from "../tools.js";

export class Order {
  static CODE = "ORDER";
  static NAME = "order.json";

  static getCode(date = new Date()) {
    return [this.CODE, UU5.Common.Tools.formatDate(date, "Y")].join("_");
  }

  static getUri(date) {
    let artUri = Tools.getDaoArtUri();
    return [artUri, this.getCode(date)].join(":");
  }

  static async create(order) {
    let date = new Date();
    let orderUri = this.getUri(date);
    let orderDtoIn = { ...order, id: UU5.Common.Tools.generateUUID(), date: date.toISOString() };

    try {
      await UuOs8.Attachment.updateData(orderUri, value => [...value, orderDtoIn]);
    } catch (error) {
      if (error.data && error.data.exceptionClass === "cz.ues.platform.commons.entity.MainEntityDoesNotExistRTException" && error.data.code === "UU.OS/E05207.M00") {
        await UuOs8.Attachment.create(Tools.getDaoArtUri(), {
          code: this.getCode(date),
          value: new UuOs8.Binary(JSON.stringify([orderDtoIn]), this.NAME)
        });
      } else {
        throw error;
      }
    }

    return orderUri;
  }

  static async list() {
    let orderUri = this.getUri();

    try {
      return await UuOs8.Attachment.getData(orderUri);
    } catch (error) {
      if (error.data && error.data.exceptionClass === "cz.ues.platform.commons.entity.MainEntityDoesNotExistRTException" && error.data.code === "UU.OS/E05207.M00") {
        return [];
      } else {
        throw error;
      }
    }
  }
}

export default Order;

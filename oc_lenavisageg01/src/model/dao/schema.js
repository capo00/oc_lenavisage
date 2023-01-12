import { Utils } from "uu5g05";
import Attachment from "./attachment.js";

export class Schema {
  static getCode() {
    return this.CODE;
  }

  static async create(document, data) {
    const dateNow = new Date();
    const fullData = { ...data, id: Utils.String.generateId(), date: dateNow.toISOString() };
    const code = this.getCode();
    try {
      await Attachment.updateData(document, code, (list) => [...list, fullData]);
    } catch (e) {
      if (e.code === "uu-dockit-main/attachment/get/uuBinaryDoesNotExist") {
        console.warn("Attachment does not exist, it will be created.", e);
        await Attachment.create(document, { code, data: [fullData] });
      } else {
        throw e;
      }
    }

    return fullData;
  }

  static async update(document, id, data) {
    let fullData;
    await Attachment.updateData(document, this.getCode(), (list) => {
      const i = list.findIndex((item) => item.id === id);
      list[i] = { ...list[i], ...data };
      fullData = list[i];
      return list;
    });
    return fullData;
  }

  static async delete(document, id) {
    await Attachment.updateData(document, this.getCode(), (list) => {
      const i = list.findIndex((item) => item.id === id);
      if (i > -1) list.splice(i, 1);
      return list;
    });
    return {};
  }

  static async list(document, code = this.getCode()) {
    return Attachment.getData(document, code);
  }

  static async get(document, code = this.getCode()) {
    return Attachment.getData(document, code);
  }
}

export default Schema;

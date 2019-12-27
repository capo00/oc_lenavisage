import regeneratorRuntime from "regenerator-runtime";
import * as UU5 from "uu5g04";
import * as UuOs8 from "../uu-os8/uu-os8.js";
import Tools from "../tools.js";

export class Schema {
  static getCode() {
    return this.CODE;
  }

  static getUri() {
    let artUri = Tools.getDaoArtUri();
    return [artUri, this.getCode()].join(":");
  }

  static async create(object) {
    let dateNow = new Date();
    let uri = this.getUri();
    let dtoIn = { ...object, id: UU5.Common.Tools.generateUUID(), date: dateNow.toISOString() };

    try {
      await UuOs8.Attachment.updateData(uri, value => [...value, dtoIn]);
    } catch (error) {
      if (error.data && error.data.exceptionClass === "cz.ues.platform.commons.entity.MainEntityDoesNotExistRTException" && error.data.code === "UU.OS/E05207.M00") {
        await UuOs8.Attachment.create(Tools.getDaoArtUri(), {
          code: this.getCode(),
          value: new UuOs8.Binary(JSON.stringify([dtoIn]), this.NAME)
        });
      } else {
        throw error;
      }
    }

    let { date, ...data } = dtoIn;

    return data;
  }

  static async update(id, object) {
    let uri = this.getUri();
    let data;

    await UuOs8.Attachment.updateData(uri, value => {
      const i = value.findIndex(item => item.id === id);
      value[i] = { ...value[i], ...object };
      data = value[i];
      return value;
    });

    return data;
  }

  static async list() {
    let uri = this.getUri();

    try {
      const data = await UuOs8.Attachment.getData(uri);
      return data;
    } catch (error) {
      if (error.data && error.data.exceptionClass === "cz.ues.platform.commons.entity.MainEntityDoesNotExistRTException" && error.data.code === "UU.OS/E05207.M00") {
        return [];
      } else {
        throw error;
      }
    }
  }
}

export default Schema;

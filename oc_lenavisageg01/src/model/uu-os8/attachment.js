import * as Plus4U5 from "uu_plus4u5g01";
import Binary from "./binary.js";
import cache from "../cache.js";

export class Attachment {

  static URI = "https://api.plus4u.net/ues/wcp/ues/core/attachment/UESAttachment/";

  static async getBinary(uri) {
    return await new Promise((resolve, reject) => {
      let commandUri = this.URI + "getAttachmentData";
      Plus4U5.Common.Calls.call("get", commandUri, {
        data: { uesuri: uri },
        done: dtoOut => {
          let binary = new Binary(dtoOut);
          resolve(binary);
        },
        fail: reject
      });
    });
  }

  static async setBinary(uri, binary) {
    return await new Promise((resolve, reject) => {
      let commandUri = this.URI + "checkIn?uesuri=" + encodeURIComponent(uri);
      Plus4U5.Common.Calls.call("post", commandUri,
        { data: { data: binary.toStream() }, done: resolve, fail: reject }
      );
    });
  }

  static async create(artUri, attch) {
    return await new Promise((resolve, reject) => {
      let { code, value } = attch;
      let commandUri = this.URI + "create?uesuri=" + encodeURIComponent(artUri);

      Plus4U5.Common.Calls.call("post", commandUri,
        { data: { data: value.toStream(), code }, done: resolve, fail: reject }
      );
    });
  }

  static async getData(uri) {
    let data;
    if (cache.isCached(uri)) {
      data = cache.get(uri);
    } else {
      let binary = await this.getBinary(uri);
      data = binary.toData();
      cache.set(uri, data);
    }
    return data;
  }

  static async setData(uri, data, fileName) {
    await this.setBinary(uri, new Binary(JSON.stringify(data), fileName));
    cache.set(uri, data);
  }

  static async updateData(uri, updateFn) {
    let binary = await this.getBinary(uri);
    let newData = updateFn(binary.toData());
    return await this.setData(uri, newData, binary.fileName);
  }
}

export default Attachment;

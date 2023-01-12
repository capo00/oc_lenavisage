import { Utils } from "uu_plus4u5g02";

export class Attachment {
  static async getData({ baseUri, id }, code) {
    const uri = new URL("document/attachment/getData", baseUri).toString();
    const dtoIn = { documentId: id, code };

    let data, result;
    try {
      data = await Utils.AppClient.get(
        uri,
        // TODO cache
        { ...dtoIn, cache: new Date().toString() },
        { headers: { "cache-control": "no-cache" } }
      );
    } catch (e) {
      if (e.status === 400) {
        console.warn("Attachment does not exist.", { uri, dtoIn })
        result = [];
      } else {
        throw e;
      }
    }

    if (!result) {
      const json = await data.data.text();
      result = JSON.parse(json);
    }

    return result;
  }

  static async get({ baseUri, id }, code) {
    const binaryGetUri = new URL("document/attachment/get", baseUri).toString();
    return await Utils.AppClient.get(binaryGetUri, { documentId: id, code });
  }

  static async setData({ baseUri, id }, code, data, revision) {
    const file = new File([JSON.stringify(data)], code + ".json", { type: "application/json" });

    const binaryUpdateUri = new URL("document/attachment/updateData", baseUri).toString();
    return await Utils.AppClient.post(binaryUpdateUri, {
      documentId: id,
      code,
      data: file,
      revisionStrategy: "NONE",
      sys: { revision },
    });
  }

  static async updateData(document, code, callback) {
    const [data, binaryData] = await Promise.all([this.getData(document, code), this.get(document, code)]);
    const newData = callback(data);
    return await this.setData(document, code, newData, binaryData.data.sys.revision);
  }

  static async create({ baseUri, id }, attch) {
    const file = new File([JSON.stringify(attch.data)], attch.filename || attch.name || attch.code + ".json", {
      type: "application/json",
    });
    const binaryCreateUri = new URL("document/attachment/create", baseUri).toString();
    return await Utils.AppClient.post(binaryCreateUri, { documentId: id, ...attch, data: file });
  }
}

export default Attachment;

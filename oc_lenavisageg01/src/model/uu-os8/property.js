export class Property {
  static async getValue(uri) {
    return await new Promise((resolve, reject) => {
      // Plus4U5.Common.Calls.getPropertyValue(uri, resolve, error => reject(JSON.parse(error.message)));

      setTimeout(() => {
        resolve(localStorage.getItem(uri) || "[]");
      }, 1000);
    });
  }

  static async setValue(uri, value) {
    return await new Promise((resolve, reject) => {
      let commandUri = "https://api.plus4u.net/ues/wcp/ues/core/property/UESProperty/setValue";
      // Calls.call("post", commandUri, { data: { uesuri: uri, value }, done: resolve, fail: reject });

      setTimeout(() => {
        localStorage.setItem(uri, value);
        resolve();
      }, 1000);
    });
  }

  static async create(artUri, attrs) {
    return await new Promise((resolve, reject) => {
      let commandUri = "https://api.plus4u.net/ues/wcp/ues/core/property/UESProperty/create";
      Calls.call("post", commandUri, { data: { uesuri: artUri, ...attrs }, done: resolve, fail: reject });
    });
  }
}

export default Property;

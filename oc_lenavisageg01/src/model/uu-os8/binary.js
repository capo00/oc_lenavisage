export class Binary {

  static parseValue(value) {
    return decodeURIComponent(atob(value).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  constructor(data, fileName) {
    switch (typeof data) {
      case "object":
        this.data = Binary.parseValue(data.dataHandler);
        this.fileName = fileName || data.fileName;
        break;
      case "string":
        this.data = data;
        this.fileName = fileName;
    }
  }

  toStream() {
    return {
      dataHandler: btoa(unescape(encodeURIComponent(this.data))),
      fileName: this.fileName || "binary"
    }
  }

  toData() {
    return JSON.parse(this.data);
  }
}

export default Binary;

export class Cache {

  static MAX_HOURS = 1;

  constructor() {
    this.cache = {};
    this.maxTxDifferent = Cache.MAX_HOURS * 60 * 60 * 1000;
  }

  set(key, data) {
    this.cache[key] = {
      ts: new Date(),
      data
    }
  }

  get(key) {
    return this.cache[key] ? this.cache[key].data : undefined;
  }

  isCached(key) {
    return this.cache[key] && (new Date() - this.cache[key].ts < this.maxTxDifferent);
  }
}

export default new Cache();

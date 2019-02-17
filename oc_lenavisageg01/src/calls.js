/**
 * Server calls of application client.
 */
import regeneratorRuntime from "regenerator-runtime";
import * as Dao from "./model/dao/dao.js";

let Calls = {
  async saveOrder(data) {
    await Dao.Order.create(data);
  },

  async listOrders(dtoIn) {
    let data = await Dao.Order.list();
    dtoIn.done(data);
  }
};

export default Calls;

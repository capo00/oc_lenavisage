/**
 * Server calls of application client.
 */
import regeneratorRuntime from "regenerator-runtime";
import * as Dao from "./model/dao/dao.js";

let Calls = {
  async saveOrder(data) {
    if (data.customer.id) {
      data.customer = data.customer.id;
    } else {
      let userData = await Dao.Customer.create(data.customer);
      data.customer = userData.id;
    }

    await Dao.Order.create(data);
  },

  async listOrders(dtoIn) {
    // let data = await Dao.Order.list();
    Promise.all([Dao.Order.list(), Dao.Customer.list()]).then(([orders, customers]) => {
      let customersMap = {};
      customers.forEach(c => customersMap[c.id] = c);
      let data = orders.map(o => {
        if (o.customer) o.customer = customersMap[o.customer] || { id: o.customer };
        return o;
      });
      dtoIn.done(data);
    });
  },

  async listCustomers(dtoIn) {
    let data = await Dao.Customer.list();
    dtoIn.done(data);
  }
};

export default Calls;

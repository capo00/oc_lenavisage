/**
 * Server calls of application client.
 */
import { Utils } from "uu_plus4u5g02";
import { AuthenticationService } from "uu_appg01_oidc";
import * as Dao from "./model/dao/dao.js";
import Tools from "./model/tools.js";
import Config from "./model/dao/config.js";

const DOCUMENT_CODE = "lenaVisage";

let Calls = {
  async loadAppWorkspace(mtBaseUri) {
    // if (mtBaseUri) {
    //   const docKitBaseUri = await Tools.findDocKitBaseUri(mtBaseUri);
    //   const uri = new URL("document/uuObcLoad", docKitBaseUri).toString();
    //   const dtoOut = await Utils.AppClient.get(uri, { code: DOCUMENT_CODE });
    //   const document = { baseUri: docKitBaseUri, id: dtoOut.data.data.id };
    //
    //   const configData = await Config.get(document);
    //
    //   return {
    //     ...dtoOut.data,
    //     data: {
    //       document,
    //       ...configData,
    //     },
    //   };
    // } else {
    //   return {};
    // }

    const docKitBaseUri = "https://uuapp.plus4u.net/uu-dockit-maing02/f16aa6298c1b47efa228a85636dad55c/"
    const uri = new URL("document/uuObcLoad", docKitBaseUri).toString();

    const uuIdentity = AuthenticationService.getCurrentSession()?.getIdentity()?.getUuIdentity();
    const dtoOut = await Utils.AppClient.get(uri, { code: [DOCUMENT_CODE, uuIdentity].join("-") });
    const document = { baseUri: docKitBaseUri, id: dtoOut.data.data.id };

    const configData = await Config.get(document);

    return {
      ...dtoOut.data,
      data: {
        document,
        ...configData,
      },
    };
  },

  async createOrder(document, data) {
    return Calls.saveOrder(document, data);
  },

  async updateOrder(document, data) {
    return Calls.saveOrder(document, data);
  },

  async deleteOrder(document, data) {
    return await Dao.Order.delete(document, data.id);
  },

  async saveOrder(document, data) {
    let customer;
    if (data.customer) {
      customer = data.customer;
      if (data.customer.id) {
        data.customer = data.customer.id;
      } else {
        let userData = await Dao.Customer.create(document, data.customer);
        data.customer = userData.id;
      }
    }

    let dtoOut;
    if (data.id) {
      dtoOut = await Dao.Order.update(document, data.id, data);
    } else {
      dtoOut = await Dao.Order.create(document, data);
    }

    dtoOut.customer = customer;

    return dtoOut;
  },

  async listOrdersByYear(document, year) {
    let [orders, customers] = await Promise.all([
      Dao.Order.list(document, year ? Dao.Order.CODE + year : undefined),
      Dao.Customer.list(document),
    ]);

    let customersMap = {};
    customers.forEach((c) => customersMap[c.id] = c);
    let data = orders.map(({ customer, ...o }) => {
      if (customer) o.customer = customersMap[customer] || { id: customer };
      return o;
    });

    return { itemList: data };
  },

  async listOrders(document) {
    const binaryGetDataUri = new URL("document/attachment/list", document.baseUri).toString();
    const response = await Utils.AppClient.get(binaryGetDataUri, { documentId: document.id });
    response.data.itemList = response.data.itemList
      .filter(({ code }) => /^order\d{4}$/.test(code))
      .map((item) => ({ ...item, year: item.code.match(/\d{4}/)[0] }));

    response.data.pageInfo.total = response.data.itemList.length;

    return response.data;
  },

  async listCustomers(document) {
    return await Dao.Customer.list(document);
  },
};

export default Calls;

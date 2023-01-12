//@@viewOn:imports
import { createComponent, useDataList } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { useSubAppData } from "uu_plus4u5g02";
import Config from "../config/config.js";
import Calls from "../calls.js";
import OrderListView from "../components/order-list-view.js";
import Tools from "../model/tools.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const OrderList = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "OrderList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { year } = props;
    const { data: { document } = {} } = useSubAppData();

    const { data } = useDataList({
      handlerMap: {
        load: () => Calls.listOrdersByYear(document, year),
      },
      itemHandlerMap: {
        delete: (order) => Calls.deleteOrder(document, order),
      },
    });
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      data ? <OrderListView items={data} /> : <Uu5Elements.Pending size="max" />
    );
  },
  //@@viewOff:render
});

export default OrderList;

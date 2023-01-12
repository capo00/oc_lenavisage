//@@viewOn:imports
import { createVisualComponent, useDataObject } from "uu5g05";
import Uu5Forms from "uu5g05-forms";
import { useSubAppData } from "uu_plus4u5g02";
import Config from "../config/config.js";
import Calls from "../calls.js";
//@@viewOff:imports

export const CustomerInput = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CustomerInput",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  //@@viewOn:render
  render(props) {
    const { data: { document } = {} } = useSubAppData();

    const { data } = useDataObject({
      handlerMap: {
        load: () => Calls.listCustomers(document),
      },
    });

    const itemList = data?.map((customer) => ({ value: customer, children: customer.name }));
    const initialValue = data && props.initialValue ? itemList.find(({ value }) => value.id === props.initialValue)?.value : undefined

    return data ? (
      <Uu5Forms.FormTextSelect {...props} itemList={itemList} insertable initialValue={initialValue} />
    ) : (
      <Uu5Forms.Text {...props} pending />
    );
  },
  //@@viewOff:render
});

export default CustomerInput;

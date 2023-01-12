//@@viewOn:imports
import { createComponent, useDataObject, useLayoutEffect, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { useSubAppData } from "uu_plus4u5g02";
import Config from "../config/config.js";
import Calls from "../calls.js";
import OrderList from "../components/order-list.js";
import Tools from "../model/tools.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Archive = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Archive",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { onRouteChange, ...blockProps } = props;
    const [year, setYear] = useState();

    const { data: { document } = {} } = useSubAppData();

    const { data } = useDataObject({
      handlerMap: {
        load: async () => {
          const data = await Calls.listOrders(document);
          return data.itemList.map(({ year }) => year).sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
        },
      },
    });

    useLayoutEffect(() => {
      if (data && !year) setYear(data[0]);
    }, [data]);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header={[Tools.getBackButton(() => onRouteChange("home")), " Archiv"]}
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <div className={Config.Css.css({ padding: 16 })}>
          {data && year ? (
            <>
              {data.length > 1 && (
                <Uu5Elements.Tabs
                  itemList={data.map((year) => ({ label: year, code: year }))}
                  activeCode={year}
                  onChange={(e) => setYear(e.data.activeCode)}
                />
              )}
              <OrderList key={year} year={year} />
            </>
          ) : <Uu5Elements.Pending size="max" />}
        </div>
      </Uu5Elements.Block>
    );
  },
  //@@viewOff:render
});

export default Archive;

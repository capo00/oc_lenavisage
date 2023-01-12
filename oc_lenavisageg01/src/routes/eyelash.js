//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { useSubAppData } from "uu_plus4u5g02";
import Config, { EYELASH_NAME } from "../config/config.js";
import Button from "../components/button.js";
import Order from "../model/order.js";
import Confirmation from "../services/confirmation.js";
import Calls from "../calls.js";
import Tools from "../model/tools.js";
import TileGrid from "../components/tile-grid.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Eyelash = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Eyelash",
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
    const [state, setState] = useState(null);
    const { data: { document, ...config } = {} } = useSubAppData();
    const eyelash = config.eyelash;

    const [order, setOrder] = useState(() => new Order(undefined, config));
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    let result;
    switch (state) {
      case "confirmation":
        result = (
          <Confirmation
            order={order}
            onConfirm={(order) => {
              Calls.saveOrder(document, order);
              setOrder(new Order(undefined, config));
              setState(null);
              onRouteChange("home");
            }}
            onRefuse={() => setState(null)}
          />
        );
        break;

      default:
        result = (
          <Uu5Elements.Block
            header={[Tools.getBackButton(() => onRouteChange("home")), EYELASH_NAME]}
            headerType="title"
            {...blockProps}
            className={Config.Css.css({ padding: 16 })}
          >
            <TileGrid columnCount={2}>
              {Object.keys(eyelash).map((key) => (
                <Button
                  key={key}
                  onClick={() => {
                    order.setEyelash(key);
                    setState("confirmation");
                  }}
                >
                  {eyelash[key].name}
                </Button>
              ))}
            </TileGrid>
          </Uu5Elements.Block>
        );
    }

    return result;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Eyelash;
//@@viewOff:exports

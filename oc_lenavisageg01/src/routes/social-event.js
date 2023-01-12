//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import { useSubAppData } from "uu_plus4u5g02";
import Config, { SOCIAL_EVENT_NAME } from "../config/config.js";
import Button from "../components/button.js";
import Order from "../model/order.js";
import Confirmation from "../services/confirmation.js";
import Calls from "../calls.js";
import Tools from "../model/tools.js";
import TileGrid from "../components/tile-grid.js";
import Uu5Forms from "uu5g05-forms";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

export const SocialEvent = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SocialEvent",
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
    const socialEvent = config.socialEvent;

    const [order, setOrder] = useState(() => new Order(undefined, config));
    const [activeEvents, setActiveEvents] = useState([]);
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
            header={[Tools.getBackButton(() => onRouteChange("home")), SOCIAL_EVENT_NAME]}
            headerType="title"
            {...blockProps}
            className={Config.Css.css({ padding: 16 })}
          >
            <TileGrid columnCount={2}>
              {Object.keys(socialEvent).map((key) => {
                return (
                  <Button
                    key={key}
                    active={activeEvents.indexOf(key) > -1}
                    onClick={() => {
                      order.toggleSocialEvent(key);
                      setActiveEvents([...order.getSocialEvents()]);
                    }}
                  >
                    {socialEvent[key].name}
                  </Button>
                );
              })}
            </TileGrid>

            {activeEvents.length ? (
              <div className={Config.Css.css({ padding: 4 })}>
                <Uu5Elements.Button
                  size="xl"
                  width="100%"
                  colorScheme="primary"
                  onClick={() => setState("confirmation")}
                >
                  Souhrn
                </Uu5Elements.Button>
              </div>
            ) : null}
          </Uu5Elements.Block>
        );
    }

    return result;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default SocialEvent;
//@@viewOff:exports

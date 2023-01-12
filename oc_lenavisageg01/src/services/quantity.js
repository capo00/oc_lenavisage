//@@viewOn:imports
import { createComponent } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
import Button from "../components/button.js";
import Tools from "../model/tools.js";
import TileGrid from "../components/tile-grid";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Quantity = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Quantity",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { onBack, service, onClick, ...blockProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header={[Tools.getBackButton(onBack), ` Počet odměrek (${service.unit}ml)`]}
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <TileGrid>
          {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8].map((unit) => (
            <Button key={unit} onClick={() => onClick(unit)}>
              {(unit + "").replace(".", ",")}
            </Button>
          ))}
        </TileGrid>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Quantity;
//@@viewOff:exports

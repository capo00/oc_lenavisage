//@@viewOn:imports
import { createComponent, PropTypes } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
import { NAMES } from "../model/order.js";
import Tools from "../model/tools.js";
import TileGrid from "../components/tile-grid";
import TileButtons from "../components/tile-buttons";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Category = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Category",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onClick: PropTypes.func,
    onBack: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { services, onBack, onClick, ...blockProps } = props;

    const items = {};
    Object.keys(services).forEach((k) => items[k] = services[k].name);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header={[Tools.getBackButton(onBack), " Kategorie"]}
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <TileGrid>
          <TileButtons items={items} onClick={onClick} />
        </TileGrid>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Category;
//@@viewOff:exports

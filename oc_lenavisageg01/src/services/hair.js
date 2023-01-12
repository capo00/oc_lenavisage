//@@viewOn:imports
import { createComponent } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
import Tools from "../model/tools.js";
import TileGrid from "../components/tile-grid";
import TileButtons from "../components/tile-buttons";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Hair = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Hair",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { onBack, hair, onClick, ...blockProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header={[Tools.getBackButton(onBack), " Vlasy"]}
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <TileGrid>
          <TileButtons items={hair} onClick={onClick} />
        </TileGrid>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Hair;
//@@viewOff:exports

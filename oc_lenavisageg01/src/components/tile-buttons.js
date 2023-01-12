//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "../config/config.js";
import Button from "./button";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const TileButtons = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TileButtons",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { items, onClick } = props;

    const buttons = [];
    for (let key in items) {
      buttons.push(
        <Button key={key} onClick={() => onClick(key)}>{items[key]}</Button>
      );
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <>{buttons}</>;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default TileButtons;
//@@viewOff:exports

//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const TileGrid = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TileGrid",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { columnCount = 3, children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div
        className={Config.Css.css({
          display: "grid",
          gridTemplateColumns: `repeat(${columnCount}, auto)`,
          gap: 8,
          justifyContent: "center",
        })}
      >
        {children}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default TileGrid;
//@@viewOff:exports

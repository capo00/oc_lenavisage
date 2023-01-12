//@@viewOn:imports
import { createHoc } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const BackButton = createHoc({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "BackButton",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  component: Uu5Elements.Button,

  getProps(props) {
    return {
      ...props,
      key: "back",
      icon: "mdi-arrow-left",
      significance: "subdued",
    };
  },
});

//@@viewOn:exports
export default BackButton;
//@@viewOff:exports

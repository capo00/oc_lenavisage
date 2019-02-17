//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import { Home, Archive, Services, Eyelash } from "../routes/routes.js";
//@@viewOff:imports

UU5.Environment.changeColorSchema("primary", "pink-rich");

export const App = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "App",
    classNames: {
      main: UU5.Common.Css.css``
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    return {
      route: "home"
    }
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    switch (this.state.route) {
      case "services":
        return <Services onRoute={route => this.setState({ route })} />;
      case "eyelash":
        return <Eyelash onRoute={route => this.setState({ route })} />;
      case "archive":
        return <Archive onRoute={route => this.setState({ route })} />;
      default:
        return <Home onRoute={route => this.setState({ route })} />;
    }
  }
  //@@viewOff:render
});

export default App;

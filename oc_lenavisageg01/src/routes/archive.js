//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import Calls from "../calls.js";
import { Button, OrderList } from "../bricks/bricks.js";
import Tools from "../model/tools";
//@@viewOff:imports

export const Archive = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.LoadMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Archive",
    classNames: {
      main: Config.CSS + "archive"
    },
    calls: {
      onLoad: "listOrders"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentWillMount() {
    this.setCalls(Calls);
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
    return (
      <UU5.Bricks.Section
        {...this.getMainPropsToPass()}
        className="uu5-common-padding-xs"
        level={4}
        header={[Tools.getBackButton(() => this.props.onRoute("home")), " Archiv"]}
      >
        {this.getLoadFeedbackChildren(dtoOut => <OrderList items={dtoOut} />)}
      </UU5.Bricks.Section>
    );
  }
  //@@viewOff:render
});

export default Archive;

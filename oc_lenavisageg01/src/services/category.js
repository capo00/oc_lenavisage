//@@viewOn:imports
import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "../config/config.js";
import { NAMES } from "../model/order.js";
import Tools from "../model/tools.js";
//@@viewOff:imports

export const Category = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.SectionMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Category",
    classNames: {
      main: Config.CSS + "category"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onClick: PropTypes.func,
    onBack: PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
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
        header={[Tools.getBackButton(this.props.onBack), " Kategorie"]}
      >
        {Tools.getTileButtons(NAMES, this.props.onClick)}
      </UU5.Bricks.Section>
    );
  }
  //@@viewOff:render
});

export default Category;

//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "../config/config.js";
import Button from "../bricks/button.js";
import PropTypes from "prop-types";
import Tools from "../model/tools.js";
//@@viewOff:imports

export const Quantity = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Quantity",
    classNames: {
      main: Config.CSS + "quantity"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onClick: PropTypes.func,
    onBack: PropTypes.func,
    service: PropTypes.object
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
        header={[Tools.getBackButton(this.props.onBack), ` Počet odměrek (${this.props.service.unit}ml)`]}
      >
        {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8].map(unit => (
          <Button key={unit} children={(unit + "").replace(".", ",")} onClick={() => this.props.onClick(unit)} />
        ))}
      </UU5.Bricks.Section>
    );
  }
  //@@viewOff:render
});

export default Quantity;

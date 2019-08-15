//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "../config/config.js";
import { Confirmation } from "../services/services.js";
import Order from "../model/order.js";
import Calls from "../calls.js";
import { Button } from "../bricks/bricks.js";
import { eyelash } from "../model/order.js"
import Tools from "../model/tools.js";
//@@viewOff:imports

export const Eyelash = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Eyelash",
    classNames: {
      main: Config.CSS + "eyelash"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    let order = new Order();
    window.OcOrder = order;

    return {
      order,
      state: null
    };
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _clear() {
    this.setState(this.getInitialState());
  },

  _getContent() {
    switch (this.state.state) {
      case "confirmation":
        return (
          <Confirmation
            order={this.state.order}
            onConfirm={data => {
              Calls.saveOrder(data);
              this._clear();
              this.props.onRoute("home");
            }}
            onRefuse={() => this.setState({ state: null })}
          />
        );

      default:
        return (
          <UU5.Bricks.Section
            className="uu5-common-padding-xs"
            level={4}
            header={[Tools.getBackButton(() => this.props.onRoute("home")), eyelash.name]}
          >
            {Object.keys(eyelash.type).map(key => {
              return (
                <Button
                  key={key}
                  children={eyelash.type[key].name}
                  onClick={() => {
                    this.state.order.setEyelash(key);
                    this.setState({ state: "confirmation" });
                  }}
                />
              )
            })}
          </UU5.Bricks.Section>
        );
    }
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {this._getContent()}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Eyelash;

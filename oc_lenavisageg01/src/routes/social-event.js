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
import { socialEvent } from "../model/order.js"
import Tools from "../model/tools.js";
//@@viewOff:imports

export const SocialEvent = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "SocialEvent",
    classNames: {
      main: Config.CSS + "socialevent"
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
      state: null,
      activeEvents: []
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
            header={[Tools.getBackButton(() => this.props.onRoute("home")), socialEvent.name]}
          >
            {Object.keys(socialEvent.type).map(key => {
              return (
                <Button
                  key={key}
                  children={socialEvent.type[key].name}
                  active={this.state.activeEvents.indexOf(key) > -1}
                  onClick={() => {
                    this.state.order.toggleSocialEvent(key);
                    this.setState({ activeEvents: this.state.order.getSocialEvents() });
                  }}
                />
              )
            })}

            {this.state.activeEvents.length ? (
              <div className={UU5.Common.Css.css`padding: 4px`}>
                <UU5.Bricks.Button
                  onClick={() => this.setState({ state: "confirmation" })}
                  size="xl"
                  displayBlock
                  colorSchema="primary"
                >
                  Souhrn
                </UU5.Bricks.Button>
              </div>
            ) : null}
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

export default SocialEvent;

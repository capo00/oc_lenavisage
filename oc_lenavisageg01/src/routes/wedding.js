//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import Config from "../config/config.js";
import { Confirmation } from "../services/services.js";
import Order from "../model/order.js";
import Calls from "../calls.js";
import { Button } from "../bricks/bricks.js";
import { eyelash, wedding } from "../model/order.js"
import Tools from "../model/tools.js";
//@@viewOff:imports

export const Wedding = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Wedding",
    classNames: {
      main: Config.CSS + "wedding"
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
      guests: []
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
        this.state.order.setGuests(this.state.guests);
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
            header={[Tools.getBackButton(() => this.props.onRoute("home")), wedding.name]}
          >
            <UU5.Forms.Select
              controlled={false}
              label={wedding.category.bride.name}
              onChange={opt => {
                this.state.order.setBrideType(opt.value);
                opt.component.onChangeDefault(opt);
              }}
              value={this.state.order.getBrideType() || undefined}
            >
              {Object.keys(wedding.category.bride.type).map(key => {
                return (
                  <UU5.Forms.Select.Option key={key} value={key} content={wedding.category.bride.type[key].name} />
                )
              })}
            </UU5.Forms.Select>

            {this.state.guests.map((value, i) => this._getGuestRow(i, value))}
            {this._getGuestRow(this.state.guests.length)}

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
          </UU5.Bricks.Section>
        );
    }
  },

  _getGuestRow(i, value) {
    return (
      <UU5.Forms.Checkboxes
        key={i}
        className={UU5.Common.Css.css`& .uu5-forms-checkbox { display: inline-block; }`}
        label={(i + 1) + ". " + wedding.category.guest.name.toLowerCase()}
        inline
        value={Object.keys(wedding.category.guest.type).map(key => ({
          name: key,
          label: wedding.category.guest.type[key].name,
          value: value ? value[key] : false
        }))}
        onChange={opt => {
          let guests = [...this.state.guests];
          guests[i] = opt.value;
          this.setState({ guests });
        }}
      />
    )
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

export default Wedding;

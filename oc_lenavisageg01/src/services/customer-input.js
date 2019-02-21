//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import Config from "../config/config.js";
import Calls from "../calls.js";
//@@viewOff:imports

export const CustomerInput = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.LoadMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "CustomerInput",
    classNames: {
      main: Config.CSS + "customerinput"
    },
    calls: {
      onLoad: "listCustomers"
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
      select: true
    };
  },

  componentWillMount() {
    this.setCalls(Calls);
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  isValid(value) {
    let result = true;
    if (this._text) {
      if (value == null) {
        value = this._text.getValue();
      }
      result = !value || (!this.state.dtoOut || !this.state.dtoOut.find(c => c.name.toLowerCase() === value.toLowerCase()))
    }

    return result;
  },

  getValue() {
    let value;
    if (this._select) {
      let id = this._select.getValue();
      value = this.state.dtoOut.find(c => c.id === id);
    } else {
      value = { name: this._text.getValue() };
    }
    return value;
  },
  //@@viewOff:interface

  //@@viewOn:overriding
  onLoadSuccess_(dtoOut) {
    this.setState({ dtoOut, select: this.state.select && dtoOut.length > 0, loadFeedback: "ready" });
  },
  //@@viewOff:overriding

  //@@viewOn:private
  _getOptions() {
    return this.state.dtoOut.map(customer => (
      <UU5.Forms.Select.Option key={customer.id} value={customer.id} content={customer.name} />
    ));
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    let { className, ...attrs } = this.getMainAttrs();
    return (
      <div {...attrs} className={`${className} ${UU5.Common.Css.css`display: flex; align-items: baseline`}`}>
        {this.state.select && (
          <UU5.Forms.Select
            placeholder="Zákazník"
            ref_={select => {
              this._select = select;
              this._text = undefined;
            }}
            style="width: calc(100% - 32px);display: inline-block"
          >
            {this.isReady() ? this._getOptions() : undefined}
          </UU5.Forms.Select>
        )}
        {!this.state.select && (
          <UU5.Forms.Text
            placeholder="Zákazník"
            ref_={text => {
              this._text = text;
              this._select = undefined;
            }}
            style="width: calc(100% - 32px);display: inline-block"
            onBlur={({ value, component }) => {
              if (!this.isValid(value)) {
                component.setError("Zákazník s tímto jménem již existuje.", value);
              }
            }}
          />
        )}
        <UU5.Forms.Checkbox
          value={!this.state.select}
          onChange={({ value }) => this.setState({ select: !value })}
          inputWidth="32px"
        />
      </div>
    );
  }
  //@@viewOff:render
});

export default CustomerInput;

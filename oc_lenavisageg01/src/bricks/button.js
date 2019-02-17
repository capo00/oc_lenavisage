//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
//@@viewOff:imports

export const Button = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.ColorSchemaMixin,
    UU5.Common.ContentMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Button",
    classNames: {
      main: UU5.Common.Css.css`
        width: 96px;
        max-width: 100%;
        height: 96px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 4px;
        border-radius: 4px;
      
        &.uu5-bricks-button-outline:focus:not(:hover) {
          background-color: unset !important;
        }
      `,
      info: UU5.Common.Css.css`
        position: absolute;
        top: -2px;
        right: -2px;
        font-size: 1.5em;
      `
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      icon: undefined,
      onClick: undefined,
      active: false,
      info: undefined
    };
  },
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
      <UU5.Bricks.Button
    {...this.getMainPropsToPass()}
    content={null}
    onClick={this.props.onClick}
    bgStyle={this.props.active ? "filled" : "outline"}
    pressed={this.props.active}
    colorSchema="primary"
      >
      {this.props.info && <UU5.Bricks.Badge colorSchema="white" className={this.getClassName("info") + " uu5-elevation-1"} content={this.props.info} />}
    {this.props.icon && <UU5.Bricks.Icon icon={this.props.icon} />}
      {this.getChildren()}
    </UU5.Bricks.Button>
    );
  }
  //@@viewOff:render
});

export default Button;

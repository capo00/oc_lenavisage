//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
import { Button } from "../bricks/bricks.js";
//@@viewOff:imports

export const Home = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Home",
    classNames: {
      main: Config.CSS + "home"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
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
        header="Přehled"
      >
        <Button content="Vlasy" onClick={() => this.props.onRoute("services")} />
        <Button content="Řasy" onClick={() => this.props.onRoute("eyelash")} />
        <br />
        <Button content="Společenská akce" onClick={() => this.props.onRoute("socialEvent")} />
        <Button content="Svatba" onClick={() => this.props.onRoute("wedding")} />
        <br />
        <br />
        <Button content="Archiv" onClick={() => this.props.onRoute("archive")} />
        <Button content="Zákazníci" onClick={() => this.props.onRoute("customers")} disabled />
      </UU5.Bricks.Section>
    );
  }
  //@@viewOff:render
});

export default Home;

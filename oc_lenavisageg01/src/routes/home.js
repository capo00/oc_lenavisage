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
        <Button children="Vlasy" onClick={() => this.props.onRoute("services")} />
        <Button children="Řasy" onClick={() => this.props.onRoute("eyelash")} />
        <br />
        <Button children="Společenská akce" onClick={() => this.props.onRoute("socialEvent")} />
        <Button children="Svatba" onClick={() => this.props.onRoute("wedding")} />
        <br />
        <br />
        <Button children="Archiv" onClick={() => this.props.onRoute("archive")} />
        <Button children="Zákazníci" onClick={() => this.props.onRoute("customers")} disabled />

        {customers && <><br /><UU5.Bricks.Link onClick={() => download(customers, "customers")} content="Zákazníci" /> </>}
        {orders && <UU5.Bricks.Link onClick={() => download(orders, "orders")} content="Objednávky" />}
        {(orders || customers) && <> <UU5.Bricks.Link onClick={() => {
          localStorage.removeItem("oc-lenavisage-CUSTOMER");
          localStorage.removeItem("oc-lenavisage-ORDER_2020");
        }} content="Vymazat" /></>}
      </UU5.Bricks.Section>
    );
  }
  //@@viewOff:render
});

let customers = localStorage.getItem("oc-lenavisage-CUSTOMER");
customers = customers ? JSON.parse(customers) : null;
let orders = localStorage.getItem("oc-lenavisage-ORDER_2020");
orders = orders ? JSON.parse(orders) : null;

function download(data, name) {
  const fileName = `${name}.json`;
  const file = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });

  downloadBlobOctetStream(file, fileName);
}

function downloadBlobOctetStream(blob, name) {
  let newBlob = new Blob([blob], { type: "application/octet-stream" });

  let href = URL.createObjectURL(newBlob);
  downloadByLink(href, name);
}

function downloadByLink(href, name) {
  let a = document.createElement("a");
  a.style.cssText = "position: absolute; top:0; left: 0; height: 0; width: 0; overflow: hidden; display: block;";
  document.body.appendChild(a);
  a.rel = "noopener";
  a.download = name;
  a.href = href;
  a.click();
}

export default Home;

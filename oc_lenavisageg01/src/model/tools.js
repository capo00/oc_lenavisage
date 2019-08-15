import React from "react";
import * as UU5 from "uu5g04";
import { Button } from "../bricks/bricks.js";

const Tools = {
  mtCode: process.env.NODE_ENV === "production" ? "98234766872277175" : "MT.CAPEK.ONDREJ.2",
  artCode: "LENA_VISAGE",

  getDaoArtUri() {
    return ["ues", Tools.mtCode, Tools.artCode].join(":");
  },

  getBackButton: onClick => (
    <UU5.Bricks.Button onClick={onClick} bgStyle="transparent">
      <UU5.Bricks.Icon icon="mdi-arrow-left" />
    </UU5.Bricks.Button>
  ),

  getTileButtons: (items, onClick) => {
    let buttons = [];
    for (let key in items) {
      buttons.push(
        <Button key={key} children={items[key]} onClick={() => onClick(key)} />
      );
    }
    return buttons;
  }
};

export default Tools;

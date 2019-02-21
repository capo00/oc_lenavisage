import React from "react";
import * as UU5 from "uu5g04";
import { Button } from "../bricks/bricks.js";

const Tools = {
  mt: {
    "7-7948-1": "98234766872277175",
    "23-6204-1": "98234766872277175"
  },

  artCode: "LENA_VISAGE",

  getDaoArtUri() {
    return ["ues", Tools.getMTCode(), Tools.artCode].join(":");
  },

  getMTCode() {
    let session = UU5.Environment.getSession();
    if (session) {
      let uid = session.getIdentity().uuIdentity;
      return Tools.mt[uid];
    } else {
      throw "User is not logged in.";
    }
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
        <Button key={key} content={items[key]} onClick={() => onClick(key)} />
      );
    }
    return buttons;
  }
};

export default Tools;

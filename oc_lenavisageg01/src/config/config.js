// This file was auto-generated according to the "namespace" setting in package.json.
// Manual changes to this file are discouraged, if values are inconsistent with package.json setting.
import { Utils } from "uu5g05";

const TAG = "OcLenaVisage.";

export const SOCIAL_EVENT_NAME = "Společenská akce";
export const WEDDING_NAME = "Svatba";
export const EYELASH_NAME = "Řasy";

export default {
  TAG,
  Css: Utils.Css.createCssModule(
    TAG.replace(/\.$/, "")
      .toLowerCase()
      .replace(/\./g, "-")
      .replace(/[^a-z-]/g, ""),
    process.env.NAME + "/" + process.env.OUTPUT_NAME + "@" + process.env.VERSION // this helps preserve proper order of styles among loaded libraries
  ),
};

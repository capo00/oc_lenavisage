//@@viewOn:imports
import { createComponent, useSession, useState } from "uu5g05";
import Config from "./config/config.js";
import Home from "./routes/home.js";
import Services from "./routes/services.js";
import Eyelash from "./routes/eyelash.js";
import Archive from "./routes/archive.js";
import SocialEvent from "./routes/social-event.js";
import Wedding from "./routes/wedding.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const AppRouter = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "AppRouter",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [route, setRoute] = useState("home");

    const { state } = useSession();
    if (state === "notAuthenticated") {
      const e = new Error();
      e.code = "unauthorized";
      e.dtoOut = { uuIdentity: "0-0" };
      throw e;
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    switch (route) {
      case "services":
        return <Services onRouteChange={setRoute} />;
      case "eyelash":
        return <Eyelash onRouteChange={setRoute} />;
      case "socialEvent":
        return <SocialEvent onRouteChange={setRoute} />;
      case "wedding":
        return <Wedding onRouteChange={setRoute} />;
      case "archive":
        return <Archive onRouteChange={setRoute} />;
      default:
        return <Home onRouteChange={setRoute} />;
    }
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default AppRouter;
//@@viewOff:exports

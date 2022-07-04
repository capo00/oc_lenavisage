//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import * as Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";
import Config from "./config/config.js";
import CoreApp from "./core/app.js";
//@@viewOff:imports

const App1 = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.IdentityMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "App"
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentDidMount() {
    if (process.env.NODE_ENV === "production") window.onbeforeunload = e => true;
  },
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
      <Plus4U5.App.Page
        {...this.getMainPropsToPass()}
        className={UU5.Common.Css.css`& .plus4u5-app-top { background-color: #E91E63; }`}
        type={1}
        top={<Plus4U5.App.Top content="Lena Visage" />}
      >
        {this.isAuthenticated()
          ? <CoreApp />
          : <Plus4U5.App.Login className={`color-schema-${UU5.Environment.getColorSchema("pink")} ` + UU5.Common.Css.css`background-color: #FCE4EC`} />}
      </Plus4U5.App.Page>
    );
  }
  //@@viewOff:render
});

// export default App;

export const App = CoreApp;
export default CoreApp;

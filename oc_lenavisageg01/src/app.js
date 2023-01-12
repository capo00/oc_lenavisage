//@@viewOn:imports
import { createComponent, useSession } from "uu5g05";
import { SpaProvider, AppWorkspaceProvider, RouteDataProvider, usePerson } from "uu_plus4u5g02";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import Plus4U5App from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import AppRouter from "./app-router.js";
import Calls from "./calls.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function AppProvider({ children }) {
  const { data } = usePerson();
  const mtBaseUri = data?.systemProfileSettings?.uuMyTerritoryMainBaseUri;

  return (
    <AppWorkspaceProvider key={mtBaseUri} isHome subApp="ocLenaVisage" handlerMap={{ load: () => Calls.loadAppWorkspace(mtBaseUri) }}>
      <RouteDataProvider>{children}</RouteDataProvider>
    </AppWorkspaceProvider>
  );
}

const App = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "App",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <SpaProvider skipAppWorkspaceProvider>
        <AppProvider>
          <Plus4U5App.Spa>
            <AppRouter />
          </Plus4U5App.Spa>
        </AppProvider>
      </SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { App };
export default App;
//@@viewOff:exports

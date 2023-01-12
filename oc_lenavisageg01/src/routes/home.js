//@@viewOn:imports
import { createComponent } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
import Button from "../components/button.js";
import TileGrid from "../components/tile-grid";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Home = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { onRouteChange, ...blockProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header="Přehled"
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <TileGrid columnCount={2}>
          <Button onClick={() => onRouteChange("services")}>Vlasy</Button>
          <Button onClick={() => onRouteChange("eyelash")}>Řasy</Button>
          <Button onClick={() => onRouteChange("socialEvent")}>Společenská akce</Button>
          <Button onClick={() => onRouteChange("wedding")}>Svatba</Button>
          <Button onClick={() => onRouteChange("archive")}>Archiv</Button>
          <Button onClick={() => onRouteChange("customers")} disabled>Zákazníci</Button>
        </TileGrid>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Home;
//@@viewOff:exports

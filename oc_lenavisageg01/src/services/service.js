//@@viewOn:imports
import { createComponent, PropTypes } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
import Button from "../components/button.js";
import Tools from "../model/tools.js";
import TileGrid from "../components/tile-grid";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
function Buttons({ isQuantity, services, activeServices, onClick }) {
  let buttons = [];

  for (let key in services) {
    let service = services[key];
    if ((isQuantity && service.unit) || (!isQuantity && !service.unit)) {
      let activeService = activeServices.find((service) => service.key === key);
      let props = {
        key,
        children: service.name,
        active: !!activeService,
        onClick: () => onClick(key, isQuantity),
      };

      if (isQuantity && activeService) {
        props.info = activeService.getQuantity();
      }

      buttons.push(<Button {...props} />);
    }
  }

  return buttons;
}

//@@viewOff:helpers

const Service = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Service",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    services: PropTypes.object,
    activeServices: PropTypes.array,
    onClick: PropTypes.func,
    onBack: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { services, activeServices, onClick, onBack, onSubmit, ...blockProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header={[Tools.getBackButton(onBack), " Služba"]}
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <TileGrid>
          <Buttons services={services} activeServices={activeServices} onClick={onClick} />
          <span key="empty" />
          <Buttons services={services} activeServices={activeServices} onClick={onClick} isQuantity />
        </TileGrid>
        {activeServices.length ? (
          <div className={Config.Css.css({ padding: 4 })}>
            <Uu5Elements.Button onClick={onSubmit} size="xl" width="100%" colorScheme="primary">
              Souhrn
            </Uu5Elements.Button>
          </div>
        ) : null}
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Service;
//@@viewOff:exports

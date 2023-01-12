//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import { useSubAppData } from "uu_plus4u5g02";
import Config from "../config/config.js";
import Order from "../model/order.js";
import Hair from "../services/hair.js";
import Quantity from "../services/quantity.js";
import Confirmation from "../services/confirmation.js";
import Category from "../services/category.js";
import Service from "../services/service.js";
import Calls from "../calls.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
function ServiceByOrder({ order, setState, setService, services, activeServices }) {
  let isMan = order.getCategory() === "man";

  return (
    <Service
      services={order.getServiceItems()}
      activeServices={order.listServices()}
      onClick={(serviceKey, quantity) => {
        if (order.hasService(serviceKey)) {
          order.removeService(serviceKey);
          setState("service");
          setService(null);
        } else {
          order.addService(serviceKey);
          setState(quantity ? "quantity" : "service");
          setService(isMan ? null : order.getService(serviceKey));
        }
      }}
      onSubmit={() => setState("confirmation")}
      onBack={() => {
        if (isMan) {
          order.setCategory(null).clearServices();
          setState(null);
        } else {
          order.setHair(null).clearServices();
          setState("category");
          setService(null);
        }
      }}
    />
  );
}

//@@viewOff:helpers

const Services = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Services",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { onRouteChange } = props;

    const [state, setState] = useState(null);
    const [service, setService] = useState(null);

    const { data: { document, ...config } = {} } = useSubAppData();
    const [order, setOrder] = useState(() => new Order(undefined, config));
    //@@viewOff:private

    //@@viewOn:render
    let result;
    switch (state) {
      case "category":
        if (order.getCategory() === "man") {
          result = <ServiceByOrder order={order} setState={setState} setService={setService} services={{...order.getServiceItems()}} activeServices={[...order.listServices()]} />;
        } else {
          result = (
            <Hair
              hair={order.getHairItems()}
              onClick={(hair) => {
                order.setHair(hair);
                setState("service");
              }}
              onBack={() => {
                order.setCategory(null);
                setState(null);
              }}
            />
          );
        }
        break;

      case "service":
        result = <ServiceByOrder order={order} setState={setState} setService={setService} services={{...order.getServiceItems()}} activeServices={[...order.listServices()]} />;
        break;

      case "quantity":
        result = (
          <Quantity
            service={service}
            onClick={(quantity) => {
              service.setQuantity(quantity);
              setState("service");
              setService(null);
            }}
            onBack={() => {
              order.removeService(service);
              setState("service");
              setService(null);
            }}
          />
        );
        break;

      case "confirmation":
        result = (
          <Confirmation
            order={order}
            onConfirm={(order) => {
              Calls.saveOrder(document, order);
              setOrder(new Order(undefined, config));
              setState(null);
              setService(null);
            }}
            onRefuse={() => setState("service")}
          />
        );
        break;

      default:
        result = (
          <Category
            services={config.services}
            onClick={(category) => {
              order.setCategory(category);
              setState("category");
            }}
            onBack={() => onRouteChange("home")}
          />
        );
    }

    return result;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Services;
//@@viewOff:exports

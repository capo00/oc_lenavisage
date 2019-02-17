//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "../config/config.js";
import { Category, Hair, Service, Quantity, Confirmation } from "../services/services.js";
import Order from "../model/order.js";
import Calls from "../calls.js";
//@@viewOff:imports

export const Services = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Services",
    classNames: {
      main: Config.CSS + "services"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    let order = new Order();
    window.OcOrder = order;

    return {
      order,
      state: null,
      service: null
    };
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _clear() {
    this.setState(this.getInitialState());
  },

  _getService() {
    let isMan = this.state.order.getCategory() === "man";

    return (
      <Service
        services={this.state.order.getServiceItems()}
        activeServices={this.state.order.listServices()}
        onClick={(serviceKey, quantity) => {
          if (this.state.order.hasService(serviceKey)) {
            this.state.order.removeService(serviceKey);
            this.setState({ state: "service", service: null });
          } else {
            this.state.order.addService(serviceKey);
            this.setState({
              state: quantity ? "quantity" : "service",
              service: isMan ? null : this.state.order.getService(serviceKey)
            });
          }
        }}
        onSubmit={() => this.setState({ state: "confirmation" })}
        onBack={() => {
          if (isMan) {
            this.state.order.setCategory(null).clearServices();
            this.setState({ state: null });
          } else {
            this.state.order.setHair(null).clearServices();
            this.setState({ state: "category", service: null });
          }
        }}
      />
    );
  },

  _getContent() {
    switch (this.state.state) {
      case "category":
        if (this.state.order.getCategory() === "man") {
          return this._getService();
        } else {
          return (
            <Hair
              hair={this.state.order.getHairItems()}
              onClick={hair => {
                this.state.order.setHair(hair);
                this.setState({ state: "service" });
              }}
              onBack={() => {
                this.state.order.setCategory(null);
                this.setState({ state: null });
              }}
            />
          );
        }

      case "service":
        return this._getService();

      case "quantity":
        return (
          <Quantity
            service={this.state.service}
            onClick={quantity => {
              this.state.service.setQuantity(quantity);
              this.setState({ state: "service", service: null })
            }}
            onBack={() => {
              this.state.order.removeService(this.state.service);
              this.setState({ state: "service", service: null })
            }}
          />
        );

      case "confirmation":
        return (
          <Confirmation
            order={this.state.order}
            onConfirm={data => {
              Calls.saveOrder(data);
              this._clear();
            }}
            onRefuse={() => this.setState({ state: "service" })}
          />
        );

      default:
        return (
          <Category
            onClick={category => {
              this.state.order.setCategory(category);
              this.setState({ state: "category" })
            }}
            onBack={() => this.props.onRoute("home")}
          />
        )
    }
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        {this._getContent()}
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default Services;

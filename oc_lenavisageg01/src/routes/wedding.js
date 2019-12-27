//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";
import "uu5g04-block-layout";
import Config from "../config/config.js";
import {Confirmation} from "../services/services.js";
import Order from "../model/order.js";
import Calls from "../calls.js";
import {Button} from "../bricks/bricks.js";
import {eyelash, wedding} from "../model/order.js"
import Tools from "../model/tools.js";
import CustomerInput from "../services/customer-input";
//@@viewOff:imports

export const Wedding = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Wedding",
    classNames: {
      main: Config.CSS + "wedding"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    return {
      state: "list",
      order: null,
      guests: []
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

  _getContent() {
    switch (this.state.state) {
      case "list":
        return (
          <UU5.Bricks.Section
            className="uu5-common-padding-xs"
            level={4}
            header={[Tools.getBackButton(() => this.props.onRoute("home")), wedding.name]}
          >
            <UU5.Common.ListDataManager onLoad={Calls.listOrders}>
              {(({ data, viewState, handleCreate }) => {
                if (viewState === "load") {
                  return <UU5.Bricks.Loading />;
                } else if (viewState === "error") {
                  return "Error";
                } else if (data) {
                  const orders = data.filter(item => item.bride && !item.payDate).sort((a, b) => {
                    if (a.weddingDate < b.weddingDate) return -1;
                    if (a.weddingDate > b.weddingDate) return 1;
                    return 0;
                  });

                  return (
                    <div>
                      <UU5.Bricks.Button bgStyle="outline" colorSchema="pink"
                                         onClick={() => this.setState({ state: "create", order: new Order() })}>
                        <UU5.Bricks.Icon icon="mdi-plus" />
                      </UU5.Bricks.Button>
                      {orders.map(item => {
                        return (
                          <UU5.BlockLayout.Tile key={item.id}>
                            <UU5.BlockLayout.Block actions={[
                              {
                                colorSchema: "primary",
                                icon: "mdi-pencil",
                                active: true,
                                onClick: () => this.setState({ state: "update", order: new Order(item) })
                              },
                              {
                                colorSchema: "primary",
                                icon: "mdi-cash-usd",
                                active: true,
                                onClick: () => this.setState({ state: "payment", order: new Order(item) })
                              }
                            ]}>
                              <UU5.BlockLayout.Row>
                                <UU5.BlockLayout.Text weight="primary">
                                  {item.customer && item.customer.name}
                                </UU5.BlockLayout.Text>
                              </UU5.BlockLayout.Row>
                              <UU5.BlockLayout.Row>
                                {item.weddingDate && new Date(item.weddingDate).toLocaleString().replace(/:00$/, "")}
                              </UU5.BlockLayout.Row>
                            </UU5.BlockLayout.Block>
                          </UU5.BlockLayout.Tile>
                        )
                      })}
                    </div>
                  )
                }
              })}
            </UU5.Common.ListDataManager>
          </UU5.Bricks.Section>
        );
        break;

      case "payment":
        this.state.order.setGuests(this.state.guests);
        return (
          <UU5.Bricks.Section
            className="uu5-common-padding-xs"
            level={4}
            header={[Tools.getBackButton(() => this.setState({ state: "update" })), "Platba"]}
          >

            <div>{this.state.order.getCustomer().name}</div>
            <div>{this.state.order.getWeddingDate().toLocaleString()}</div>

            {Confirmation.getServices(this.state.order, this.state.order.getSummary().sum)}

            {[500, 1000, 1500, 2000].map(price => (
              <Button
                size="s"
                disabled={price === this.state.order.getDeposit()}
                key={price}
                onClick={async () => {
                  this.state.order.setDeposit(price);
                  const data = { ...this.state.order.getSummary() };
                  data.depositDate = new Date().toISOString();
                  await Calls.saveOrder(data);
                  this.setState({ state: "list" });
                }}
              >
                {price}
              </Button>
            ))}

            <div className={UU5.Common.Css.css`padding: 4px`}>
              <UU5.Bricks.Button
                onClick={async () => {
                  let data = { ...this.state.order.getSummary() };
                  data.payDate = new Date().toISOString();

                  await Calls.saveOrder(data);
                  this.setState({ state: "list" });
                }}
                size="xl"
                displayBlock
                colorSchema="primary"
              >
                Zaplatit ({this.state.order.getSummary().sum - this.state.order.getDeposit()})
              </UU5.Bricks.Button>

              <UU5.Bricks.Button
                onClick={() => {
                  this.setState({ state: "list" });
                }}
                size="xl"
                displayBlock
                colorSchema="primary"
                bgStyle="outline"
              >
                Seznam
              </UU5.Bricks.Button>
            </div>
          </UU5.Bricks.Section>
        );

      case "create":
      case "update":
        return (
          <UU5.Bricks.Section
            className="uu5-common-padding-xs"
            level={4}
            header={[Tools.getBackButton(() => this.setState({ state: "list" })), (this.state.state === "create" ? "Vytvořit" : "Upravit") + " svatbu"]}
          >
            <UU5.Forms.DateTimePicker
              required
              controlled={false}
              valueType="date"
              label={wedding.date}
              value={this.state.order.getWeddingDate() || undefined}
              onChange={opt => {
                this.state.order.setWeddingDate(opt.value);
                opt.component.onChangeDefault(opt);
              }}
            />
            <CustomerInput
              value={this.state.order.getCustomer() || undefined}
              onChange={customer => this.state.order.setCustomer(customer)}
              className={UU5.Common.Css.css`margin-bottom: 24px`}
            />
            <UU5.Forms.Select
              controlled={false}
              label={wedding.category.bride.name}
              onChange={opt => {
                this.state.order.setBrideType(opt.value);
                opt.component.onChangeDefault(opt);
              }}
              value={this.state.order.getBrideType() || undefined}
            >
              {Object.keys(wedding.category.bride.type).map(key => {
                return (
                  <UU5.Forms.Select.Option key={key} value={key} content={wedding.category.bride.type[key].name} />
                );
              })}
            </UU5.Forms.Select>

            {this.state.guests.map((value, i) => this._getGuestRow(i, value))}
            {this._getGuestRow(this.state.guests.length)}

            <UU5.Forms.TextArea
              value={this.state.order.getAnnotation() || undefined}
              placeholder="Poznámka"
              ref_={area => this._desc = area}
              onBlur={({ value }) => this.state.order.setAnnotation(value)}
            />

            <div className={UU5.Common.Css.css`padding: 4px`}>
              <UU5.Bricks.Button
                onClick={async () => {
                  let result = { ...this.state.order.getSummary() };

                  let orderData = await Calls.saveOrder(result);
                  this.state.order.setId(orderData.id);

                  this.setState({ state: "payment" });
                }}
                size="xl"
                displayBlock
                colorSchema="primary"
              >
                Ok
              </UU5.Bricks.Button>
            </div>
          </UU5.Bricks.Section>
        );
    }
  },

  _getGuestRow(i, value) {
    return (
      <UU5.Forms.Checkboxes
        key={i}
        className={UU5.Common.Css.css`& .uu5-forms-checkbox { display: inline-block; }`}
        label={(i + 1) + ". " + wedding.category.guest.name.toLowerCase()}
        inline
        value={Object.keys(wedding.category.guest.type).map(key => ({
          name: key,
          label: wedding.category.guest.type[key].name,
          value: value ? value[key] : false
        }))}
        onChange={opt => {
          let guests = [...this.state.guests];
          guests[i] = opt.value;
          this.setState({ guests });
        }}
      />
    )
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

export default Wedding;

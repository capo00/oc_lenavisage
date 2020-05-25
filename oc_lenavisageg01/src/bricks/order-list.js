//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "./config/config.js";
//@@viewOff:imports

const ICONS = {
  "woman": "mdi-human-female",
  "man": "mdi-human-male",
  "child": "mdi-human-child",
  "eyelash": "mdi-eye-outline",
  "socialEvent": "mdi-glass-wine",
  "wedding": "mdi-heart-multiple-outline"
};

const MONTHS = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];

function addOrder(items, date, order, sum) {
  let year = date.getFullYear();
  items[year] = items[year] || { items: {}, sum: 0 };
  items[year].sum += sum;

  let month = date.getMonth() + 1;
  items[year].items[month] = items[year].items[month] || { items: {}, sum: 0 };
  items[year].items[month].sum += sum;

  // let week = UU5.Common.Tools.getWeekNumber(date);
  let day = date.getDate();
  items[year].items[month].items[day] = items[year].items[month].items[day] || { items: [], sum: 0 };
  items[year].items[month].items[day].sum += sum;

  order = { ...order };
  order.actualSum = sum;
  items[year].items[month].items[day].items.push(order);
}

export const OrderList = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.ColorSchemaMixin,
    UU5.Common.ContentMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "OrderList",
    classNames: {
      main: UU5.Common.Css.css`

      `
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {};
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _getSortedItems() {
    let items = {};

    this.props.items.forEach(order => {
      // wedding - deposit
      if (order.depositDate) {
        const depositDate = new Date(order.depositDate);
        addOrder(items, depositDate, order, order.deposit);
      }

      if (!order.weddingDate || order.payDate) {
        const payDate = order.payDate ? new Date(order.payDate) : new Date(order.date);
        addOrder(items, payDate, order, order.sum - (order.deposit || 0));
      }
    });

    return items;
  },

  _getIcon(order) {
    let icon;
    if (order.category) {
      icon = ICONS[order.category];
    } else if (order.eyelash) {
      icon = ICONS.eyelash;
    } else if (order.bride || order.guests) {
      icon = ICONS.wedding;
    } else if (order.socialEvents) {
      icon = ICONS.socialEvent;
    }
    return icon;
  },

  _renderOrders(items) {
    return items.map((order, i) => (
      <UU5.Bricks.Button
        key={order.id + "-" + i}
        bgStyle="transparent"
        displayBlock
        onClick={() => this._modal.open({
          header: (order.customer && order.customer.name) || "Customer",
          content: (
            <pre>
              {JSON.stringify(order, null, 2)}
            </pre>
          )
        })}
      >
        <UU5.Bricks.Icon icon={this._getIcon(order)} /> {order.customer ? order.customer.name : ""} ({order.actualSum} Kč)
      </UU5.Bricks.Button>
    ));
  },

  _renderDays(items, month) {
    let result = [];

    for (let day in items) {
      result.push(
        <UU5.Bricks.Panel key={day} header={`${day}.${month}. (${items[day].sum} Kč)`}>
          {this._renderOrders(items[day].items)}
        </UU5.Bricks.Panel>
      )
    }

    return result;
  },

  _renderMonths(items) {
    let result = [];

    for (let month in items) {
      result.push(
        <UU5.Bricks.Panel bgStyleHeader="underline" colorSchema="pink-rich" key={month}
                          header={`${MONTHS[month - 1]} (${items[month].sum} Kč)`}>
          <UU5.Bricks.Accordion>
            {this._renderDays(items[month].items, month)}
          </UU5.Bricks.Accordion>
        </UU5.Bricks.Panel>
      )
    }

    return result;
  },

  _renderYears(items) {
    let result = [];

    for (let year in items) {
      result.push(
        <UU5.Bricks.Section key={year} header={`${year} (${items[year].sum} Kč)`} level={5}>
          <div>
            <UU5.Bricks.Accordion>
              {this._renderMonths(items[year].items)}
            </UU5.Bricks.Accordion>
          </div>
        </UU5.Bricks.Section>
      )
    }

    return result;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    let items = this._getSortedItems();

    return (
      <div {...this.getMainAttrs()}>
        {this._renderYears(items)}
        <UU5.Bricks.Modal ref={modal => this._modal = modal} />
      </div>
    );
  }
  //@@viewOff:render
});

export default OrderList;

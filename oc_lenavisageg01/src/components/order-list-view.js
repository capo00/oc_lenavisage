//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const ICONS = {
  "woman": "mdi-human-female",
  "man": "mdi-human-male",
  "child": "mdi-human-child",
  "eyelash": "mdi-eye-outline",
  "socialEvent": "mdi-glass-wine",
  "wedding": "mdi-heart-multiple-outline"
};

const MONTHS = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
//@@viewOff:constants

//@@viewOn:helpers
function addOrder(items, date, item, sum) {
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

  const order = { ...item.data };
  order.actualSum = sum;
  item = { ...item };
  item.data = order;
  items[year].items[month].items[day].items.push(item);
}

function getOrderList(items) {
  let orders = {};

  items.forEach((item) => {
    const order = item.data;
    // wedding - deposit
    if (order.depositDate) {
      const depositDate = new Date(order.depositDate);
      addOrder(orders, depositDate, item, order.deposit);
    }

    if (!order.weddingDate || order.payDate) {
      const payDate = order.payDate ? new Date(order.payDate) : new Date(order.date);
      addOrder(orders, payDate, item, order.sum - (order.deposit || 0));
    }
  });

  const numberProps = { currency: "CZK", minDecimalDigits: 0, maxDecimalDigits: 0 };

  const itemList = Object.entries(orders).map(([year, { sum, items }]) => ({
    // collapsible: true,
    // heading: true,
    children: (
      <>
        {year}
        &nbsp;
        (<Uu5Elements.Number value={sum} {...numberProps} />)
      </>
    ),
    itemList: Object.entries(items).map(([month, { sum, items }]) => ({
      // collapsible: true,
      // heading: true,
      children: (
        <>
          {MONTHS[month - 1]}
          &nbsp;
          (<Uu5Elements.Number value={sum} {...numberProps} />)
        </>
      ),
      itemList: Object.entries(items).map(([day, { sum, items }], i) => ({
        children: (
          <>
            {`${day}.${month}.`}
            &nbsp;
            (<Uu5Elements.Number value={sum} {...numberProps} />)
          </>
        ),
        itemList: items.map((item) => ({
          component: (
            <OrderItem
              data={item.data}
              handlerMap={item.handlerMap}
              disabled={item.state === "pending"}
            >
              {item.data.customer?.name ?? ""}
              &nbsp;
              (<Uu5Elements.Number value={item.data.actualSum} {...numberProps} />)
            </OrderItem>
          ),
        }))
      })),
    })),
  }));

  return itemList;
}

function getIcon(order) {
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
}

function OrderItem({ data, numberProps, handlerMap, ...propsToPass }) {
  const [order, setOrder] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <Uu5Elements.MenuItem
        {...propsToPass}
        icon={getIcon(data)}
        onClick={() => setOrder({
          header: (data.customer && data.customer.name) || "Customer",
          children: (
            <pre>
              {JSON.stringify(data, null, 2)}
            </pre>
          ),
        })}
        actionList={[
          {
            icon: "mdi-delete",
            onClick: (e) => {
              e.stopPropagation();
              setDeleteOpen(true)
            },
          }
        ]}
      />
      <Uu5Elements.Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        icon="mdi-delete"
        header="Smazat objednávku"
        info="Opravdu chcete smazat objednávku?"
        actionList={[
          {
            children: "Smazat",
            colorScheme: "negative",
            onClick: () => handlerMap.delete(),
          },
          {
            children: "Zrušit",
            onClick: () => setDeleteOpen(false),
          },
        ]}
      />
      <Uu5Elements.Modal {...order} open={!!order} onClose={() => setOrder(null)} />
    </>
  );
}

//@@viewOff:helpers

const OrderListView = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "OrderListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { items } = props;
    const [order, setOrder] = useState(null);

    const itemList = getOrderList(items);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    let list;
    if (itemList.length === 1) {
      list = (
        <Uu5Elements.Block
          headerType="title"
          header={itemList[0].children}
        >
          <Uu5Elements.MenuList
            itemList={itemList[0].itemList}
            compactSubmenu
            colorScheme="pink"
          />
        </Uu5Elements.Block>
      )
    } else {
      list = (
        <Uu5Elements.MenuList
          itemList={itemList}
          compactSubmenu
          colorScheme="pink"
          significance="subdued"
        />
      )
    }

    return (
      <>
        {list}
        <Uu5Elements.Modal {...order} open={!!order} onClose={() => setOrder(null)} />
      </>
    );
    //@@viewOff:render
  },
});

export default OrderListView;

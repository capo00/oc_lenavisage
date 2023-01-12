//@@viewOn:imports
import { createVisualComponent, useDataList, useState } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import { useSubAppData } from "uu_plus4u5g02";
import Config, { WEDDING_NAME } from "../config/config.js";
import Confirmation from "../services/confirmation.js";
import Order from "../model/order.js";
import Calls from "../calls.js";
import Tools from "../model/tools.js";
import CustomerInput from "../services/customer-input.js";

//@@viewOff:imports

function getGuestRow(i, value, wedding, setGuests) {
  return (
    <Uu5Forms.Checkboxes
      key={i}
      name={"guest-" + (i + 1)}
      label={i + 1 + ". host"}
      itemList={Object.keys(wedding.guest).map((key) => ({
        value: key,
        label: wedding.guest[key].name,
      }))}
      value={value}
      onChange={(e) => {
        setGuests((guests) => {
          let newGuests = [...guests];
          newGuests[i] = e.data.value;
          return newGuests;
        });
      }}
    />
  );
}

const MODAL_HEADER = {
  create: "Vytvořit svatbu",
  update: "Upravit svatbu",
  payment: "Platba",
};

function getPayment(order) {
  return (
    <>
      <div>{order.getCustomer().name}</div>
      <div><Uu5Elements.DateTime value={order.getWeddingDate()} /></div>

      {Confirmation.getServices(order, order.getSummary().sum)}
    </>
  );
}

function getCreateOrUpdate(config, guests, setGuests, updatedItem) {
  const { data: item } = updatedItem || {};
  return (
    <Uu5Forms.Form.View className={Config.Css.css({ display: "grid", gap: 16 })}>
      <Uu5Forms.FormDateTime name="date" required label="Datum" initialValue={item?.weddingDate} />
      <CustomerInput name="customer" placeholder="Zákazník" initialValue={item?.customer?.id || item?.customer} />
      <Uu5Forms.FormSelect
        name="bride"
        label="Nevěsta"
        itemList={Object.keys(config.wedding.bride).map((key) => {
          return { value: key, children: config.wedding.bride[key].name };
        })}
        initialValue={item?.bride?.code}
      />

      {guests.map((value, i) => getGuestRow(i, value, config.wedding, setGuests))}
      {getGuestRow(guests.length, undefined, config.wedding, setGuests)}

      <Uu5Forms.FormTextArea name="desc" placeholder="Poznámka" initialValue={item?.desc} />
    </Uu5Forms.Form.View>
  );
}

const FOOTER = {
  payment: (order, handleUpdate, handleClose) => {
    return (
      <>
        {[500, 1000, 1500, 2000].map((price) => (
          <Uu5Elements.Button
            colorScheme="pink"
            significance="distinct"
            disabled={price === order.getDeposit()}
            key={price}
            onClick={async () => {
              order.setDeposit(price);
              const data = { ...order.getSummary() };
              data.depositDate = new Date().toISOString();

              await handleUpdate(data);
              handleClose();
            }}
          >
            {price}
          </Uu5Elements.Button>
        ))}
        <Uu5Elements.Button
          colorScheme="pink"
          significance="highlighted"
          onClick={async () => {
            let data = { ...order.getSummary() };
            data.payDate = new Date().toISOString();

            await handleUpdate(data);
            handleClose();
          }}
        >
          Zaplatit ({order.getSummary().sum - order.getDeposit()})
        </Uu5Elements.Button>
      </>
    );
  },
  create: () => {
    return (
      <Uu5Forms.SubmitButton colorScheme="pink">
        Vytvořit
      </Uu5Forms.SubmitButton>
    );
  },
  update: () => {
    return (
      <Uu5Forms.SubmitButton colorScheme="pink">
        Upravit
      </Uu5Forms.SubmitButton>
    );
  },
};

export const Wedding = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Wedding",
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  //@@viewOn:render
  render(props) {
    const { onRouteChange } = props;

    const [modalState, setModalState] = useState(null);
    const [updatedItem, setUpdatedItem] = useState(null);
    const [order, setOrder] = useState(null);
    const [guests, setGuests] = useState([]);

    const { data: { document, ...config } = {} } = useSubAppData();
    const dataList = useDataList({
      handlerMap: {
        load: () => Calls.listOrdersByYear(document, new Date().getFullYear()),
        create: (data) => Calls.createOrder(document, data),
      },
      itemHandlerMap: {
        update: (data) => Calls.updateOrder(document, data),
        delete: (data) => Calls.deleteOrder(document, data),
      },
    });

    let result;
    if (dataList.state === "pendingNoData") {
      result = <Uu5Elements.Pending size="max" />;
    } else if (dataList.data) {
      const orders = dataList.data
        .filter(({ data }) => data.bride && !data.payDate)
        .sort((a, b) => {
          if (a.weddingDate < b.weddingDate) return -1;
          if (a.weddingDate > b.weddingDate) return 1;
          return 0;
        });

      result = (
        <div className={Config.Css.css({ display: "grid", gap: 8 })}>
          {orders.map((orderItem) => {
            const item = orderItem.data;
            return (
              <Uu5Elements.Tile
                key={item.id}
                header={item.customer?.name}
                actionList={[
                  {
                    colorScheme: "pink",
                    significance: "highlighted",
                    icon: "mdi-currency-usd",
                    onClick: () => {
                      setModalState("payment");
                      const order = new Order(item, config);
                      if (item.guests && item.guests.length) {
                        order.setGuests(item.guests.map((it) => Object.keys(it)));
                      }
                      setOrder(order);
                      setUpdatedItem(orderItem);
                    },
                  },
                  {
                    colorScheme: "pink",
                    icon: "mdi-pencil",
                    onClick: () => {
                      setModalState("update");
                      setOrder(new Order(item, config));
                      setUpdatedItem(orderItem);
                      setGuests(item.guests.map((it) => Object.keys(it)));
                    },
                  },
                  {
                    colorScheme: "pink",
                    icon: "mdi-delete",
                    onClick: () => orderItem.handlerMap.delete(),
                  },
                ]}
              >
                <div className={Config.Css.css({ display: "grid", gridTemplateColumns: "1fr 1fr" })}>
                  {item.weddingDate ? <Uu5Elements.DateTime value={item.weddingDate} /> : ""}
                  <span className={Config.Css.css({ justifySelf: "end" })}>
                    {item.deposit ? <><Uu5Elements.Number value={item.deposit} /> / </> : null}
                    {<b><Uu5Elements.Number value={item.sum} currency="CZK" maxDecimalDigits={0} /></b>}
                  </span>
                </div>
              </Uu5Elements.Tile>
            );
          })}
        </div>
      );
    } else {
      result = dataList.state;
    }

    function handleClose() {
      setModalState(null);
      setUpdatedItem(null);
      setOrder(null);
      setGuests([]);
    }

    return (
      <Uu5Elements.Block
        className={Config.Css.css({ padding: 16 })}
        headerType="title"
        header={[Tools.getBackButton(() => onRouteChange("home")), WEDDING_NAME]}
        actionList={[
          {
            icon: "mdi-plus",
            tooltip: "Přidat svatbu",
            significance: "highlighted",
            colorScheme: "pink",
            onClick: () => {
              setModalState("create");
              setOrder(new Order(undefined, config));
            },
          },
        ]}
      >
        {result}

        <Uu5Forms.Form.Provider
          key={modalState || "none"}
          onSubmit={async (e) => {
            let { date, customer, bride, desc } = e.data.value;

            order.setWeddingDate(date);
            order.setCustomer(customer);
            order.setBrideType(bride);
            order.setGuests(guests);
            order.setAnnotation(desc);

            let result = { ...order.getSummary() };
            const call = updatedItem ? updatedItem.handlerMap.update : dataList.handlerMap.create;

            await call(result);

            handleClose();
          }}
        >
          <Uu5Elements.Modal
            open={!!modalState}
            onClose={handleClose}
            header={MODAL_HEADER[modalState]}
            footer={FOOTER[modalState]?.(order, updatedItem?.handlerMap?.update, handleClose)}
          >
            {modalState ? modalState === "payment" ? getPayment(order) : getCreateOrUpdate(config, guests, setGuests, updatedItem) : null}
          </Uu5Elements.Modal>
        </Uu5Forms.Form.Provider>
      </Uu5Elements.Block>
    );
  },
  //@@viewOff:render
});

export default Wedding;

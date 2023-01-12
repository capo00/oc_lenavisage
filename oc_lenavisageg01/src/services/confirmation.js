//@@viewOn:imports
import { createComponent, PropTypes } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Config from "../config/config.js";
import Tools from "../model/tools.js";
import CustomerInput from "./customer-input.js";
//@@viewOff:imports

//@@viewOn:constants
const rowClassName = Config.Css.css`
  & > div {
    display: inline-block;

    &:first-child {
      width: calc(100% - 100px);
    }

    &:last-child {
      width: 100px;
      text-align: right;
    }
  }
`;

const level2ClassName = Config.Css.css`
  margin-left: 16px;
`;

const boldClassName = Config.Css.css`
  border-top: 1px solid black;
  font-weight: bold;
`;
//@@viewOff:constants

//@@viewOn:helpers
const Row = ({ label, price, bold, level = 1 }) => {
  let classNames = [rowClassName];
  if (level === 2) classNames.push(level2ClassName);
  if (bold) classNames.push(boldClassName);

  return (
    <div className={classNames.join(" ")}>
      <div>{label}</div>
      <div>{price} Kč</div>
    </div>
  );
};

function getServices(order, sum) {
  let items = order.listServices().map((service) => (
    <div key={service.key}>
      <Row label={service.name} price={service.price} />
      {service.quantity && (
        <Row level={2} label={`${service.quantity}x ${service.unit}ml`} price={service.quantity * service.unitPrice} />
      )}
    </div>
  ));

  const deposit = order.getDeposit();
  if (deposit) {
    items.push(
      <div key="deposit">
        <Row label="Zaplaceno" price={-1 * deposit} />
      </div>
    );
  }

  items.push(
    <div key="result">
      <Row label="CELKEM" price={sum - deposit} bold />
    </div>
  );

  return <div>{items}</div>;
}

//@@viewOff:helpers

const Confirmation = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Confirmation",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onConfirm: PropTypes.func,
    onRefuse: PropTypes.func,
    order: PropTypes.object,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { order, onConfirm, onRefuse, ...blockProps } = props;
    const summary = order.getSummary();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Block
        header={[Tools.getBackButton(onRefuse), " " + order.getTitle()]}
        headerType="title"
        {...blockProps}
        className={Config.Css.css({ padding: 16 })}
      >
        <Uu5Forms.Form
          onSubmit={(e) => {
            let { customer } = e.data.value;
            if (customer && typeof customer === "string") customer = { name: customer };
            onConfirm({ ...summary, ...e.data.value, customer });
          }}
          className={Config.Css.css({ display: "grid", gap: 16 })}
        >
          <CustomerInput name="customer" placeholder="Zákazník" />
          <div>{getServices(order, summary.sum)}</div>
          <Uu5Forms.FormTextArea name="desc" placeholder="Poznámka" />
          <Uu5Forms.SubmitButton size="xl" width="100%">
            Potvrdit
          </Uu5Forms.SubmitButton>
        </Uu5Forms.Form>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

Confirmation.getServices = getServices;

//@@viewOn:exports
export default Confirmation;
//@@viewOff:exports

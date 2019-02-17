//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Config from "../config/config.js";
import Button from "../bricks/button.js";
import PropTypes from "prop-types";
import Tools from "../model/tools.js";
//@@viewOff:imports

export const Service = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Service",
    classNames: {
      main: Config.CSS + "service"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    services: PropTypes.object,
    activeServices: PropTypes.array,
    onClick: PropTypes.func,
    onBack: PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      services: {},
      activeServices: []
    }
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _getButtons(isQuantity) {
    let buttons = [];

    for (let key in this.props.services) {
      let service = this.props.services[key];
      if ((isQuantity && service.unit) || (!isQuantity && !service.unit)) {
        let activeService = this.props.activeServices.find(service => service.key === key);
        let props = {
          key,
          content: service.name,
          active: !!activeService,
          onClick: () => this.props.onClick(key, isQuantity)
        };

        if (isQuantity && activeService) {
          props.info = activeService.getQuantity();
        }

        buttons.push(<Button {...props} />);
      }
    }

    return buttons;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Section
        {...this.getMainPropsToPass()}
        className="uu5-common-padding-xs"
        level={4}
        header={[Tools.getBackButton(this.props.onBack), " Služba"]}
      >
        {this._getButtons()}
        <br />
        {this._getButtons(true)}

        {this.props.activeServices.length ? (
          <div className={UU5.Common.Css.css`padding: 4px`}>
            <UU5.Bricks.Button onClick={this.props.onSubmit} size="xl" displayBlock colorSchema="primary">
              Souhrn
            </UU5.Bricks.Button>
          </div>
        ) : null}
      </UU5.Bricks.Section>
    );
  }
  //@@viewOff:render
});

export default Service;

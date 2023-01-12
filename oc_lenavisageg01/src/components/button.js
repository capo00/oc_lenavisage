//@@viewOn:imports
import { createComponent } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Button = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Button",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { active, info, children, ...restProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5Elements.Box
        significance={active ? "highlighted" : "distinct"}
        {...restProps}
        aspectRatio="1x1"
        width={112}
        borderRadius="moderate"
        pressed={active}
        colorScheme="pink"
        className={Config.Css.css({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 8,
        })}
      >
        {info && (
          <Uu5Elements.Badge
            colorScheme="building"
            size="xl"
            className={Config.Css.css({
              position: "absolute",
              top: -1,
              right: -1,
            })}
          >
            {info}
          </Uu5Elements.Badge>
        )}
        <Uu5Elements.Text colorScheme="pink">
          {children}
        </Uu5Elements.Text>
      </Uu5Elements.Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export default Button;
//@@viewOff:exports

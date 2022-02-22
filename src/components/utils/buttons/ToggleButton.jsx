import { css } from "@emotion/css";
import React from "react";
import colors from "../../../colors";
import { LIGHT } from "../../../redux/modules/color";

const ToggleButton = ({
  top = "none",
  bottom = "none",
  left = "none",
  right = "none",
  colorMode,
  colorLight,
  colorDark,
}) => {
  const onColorModeToggle = () => {
    if (colorMode === LIGHT) {
      colorDark();
    } else {
      colorLight();
    }
  };

  const styles = {
    background: css`
      width: 45px;
      height: 28px;
      border-radius: 20px;
      position: absolute;
      background-color: ${colorMode === LIGHT
        ? colors.light._4
        : colors.dark._2};
      top: ${top};
      bottom: ${bottom};
      left: ${left};
      right: ${right};
      transition: 0.8s;
    `,
    toggle: css`
      width: 24px;
      height: 24px;
      border-radius: 20px;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._4};
      position: absolute;
      top: 2px;
      left: 2px;
      transition: 0.8s;
      transform: ${colorMode === LIGHT ? "none" : "translateX(17px)"};
    `,
  };

  return (
    <div className={styles.background} onClick={onColorModeToggle}>
      <div className={styles.toggle} />
    </div>
  );
};

export default ToggleButton;

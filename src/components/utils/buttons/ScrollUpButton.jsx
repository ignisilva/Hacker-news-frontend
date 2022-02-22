import React from "react";
import { css } from "@emotion/css";
import ScrollUpIcon from "../svgs/ScrollUpIcon";
import { LIGHT } from "../../../redux/modules/color";
import colors from "../../../colors";

const ScrollUpButton = ({ colorMode, onClickHandler }) => {
  const styles = {
    wrap: css`
      width: 41px;
      height: 40px;
      border: 1px solid
        ${colorMode === LIGHT ? colors.light._7 : colors.dark._1};
      transition: 0.8s;
      box-sizing: border-box;
      position: absolute;
      background-color: #ff7118;
      right: 0px;
      bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };

  return (
    <div className={styles.wrap} onClick={onClickHandler}>
      <ScrollUpIcon
        color={colorMode === LIGHT ? colors.light._7 : colors.dark._1}
      />
    </div>
  );
};

export default ScrollUpButton;

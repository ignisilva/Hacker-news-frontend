import { css } from "@emotion/css";
import React from "react";
import { ReactComponent as Point } from "../../../../public/assets/point.svg";

const PointIcon = ({ color = "#555555" }) => {
  const styles = {
    wrap: css`
      width: 15px;
      height: 15px;
      position: relative;
    `,
    icon: css`
      position: relative;
      top: -1px;
      left: -3px;
    `,
  };

  return (
    <div className={styles.wrap}>
      <Point className={styles.icon} stroke={color} />
    </div>
  );
};

export default PointIcon;

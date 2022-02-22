import { css } from "@emotion/css";
import React from "react";
import { LIGHT } from "../../redux/modules/color";

const Inner = ({ children, padding = "0 15px", margin = "0 auto" }) => {
  const styles = {
    inner: css`
      width: auto;
      height: auto;
      margin: ${margin};
      padding: ${padding};
      position: relative;
    `,
  };

  return <div className={styles.inner}>{children}</div>;
};

export default Inner;

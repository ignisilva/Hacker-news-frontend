import { css } from "@emotion/css";
import React from "react";

const Layout = ({ children }) => {
  const styles = {
    layout: css`
      margin: 0 auto;
      width: 390px;
      height: 100vh;
      max-height: 844px;
      max-width: 390px;
      position: relative;
      overflow: hidden;

      border: 1px solid black;
      box-sizing: border-box;
    `,
  };

  return <div className={styles.layout}>{children}</div>;
};

export default Layout;

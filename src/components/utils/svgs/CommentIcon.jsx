import { css } from "@emotion/css";
import React from "react";
import { ReactComponent as Chat } from "../../../../public/assets/chat.svg";

const CommentIcon = ({ color }) => {
  const styles = {
    wrap: css`
      width: 15px;
      height: 15px;
      position: relative;
    `,
    icon: css`
      position: relative;
      left: -3px;
    `,
  };

  return (
    <div className={styles.wrap}>
      <Chat className={styles.icon} stroke={color} />
    </div>
  );
};

export default CommentIcon;

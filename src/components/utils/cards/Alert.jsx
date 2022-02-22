import { css } from "@emotion/css";
import { useEffect, useState } from "react";

// type: "tell" or "ask"
const Alert = ({ type }) => {
  const [alert, setAlert] = useState(type);

  useEffect(() => {
    setAlert(type);
  }, [type]);

  const styles = {
    wrap: css`
      width: 55px;
      height: 24px;
      border: 0.9px solid #ff7118;
      box-sizing: border-box;
      background-color: ${type === "tell" ? "none" : "#ff7118"};
      padding: 1px 15px;
      color: ${type === "tell" ? "#ff7118" : "#ffffff"};
      margin-bottom: 3px;
      font-size: 19px;
      font-weight: bold;
      line-height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };
  return (
    <div className={styles.wrap}>
      <span>{alert}</span>
    </div>
  );
};

export default Alert;

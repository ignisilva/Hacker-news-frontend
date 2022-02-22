import { css } from "@emotion/css";
import colors from "../../../colors";
import { LIGHT } from "../../../redux/modules/color";

const Button = ({ colorMode, children }) => {
  const styles = {
    wrap: css`
      width: 115px;
      height: 28px;
      border: 0.9px solid ${colors.point};
      box-sizing: border-box;
      background-color: ${colorMode === LIGHT ? colors.light._7 : colors.point};
      padding: 5px 15px;
      color: ${colorMode === LIGHT ? colors.point : colors.dark._6};
      margin-bottom: 3px;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };
  return (
    <button className={styles.wrap} onClick={() => {}}>
      <span>{children}</span>
    </button>
  );
};

export default Button;

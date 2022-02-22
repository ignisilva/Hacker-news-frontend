import { css } from "@emotion/css";
import colors from "../../colors";
import { LIGHT } from "../../redux/modules/color";

const Footer = ({ colorMode = LIGHT }) => {
  const styles = {
    wrap: css`
      width: 388px;
      height: 30px;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      position: absolute;
      bottom: 0;
      z-index: 3;
      transition: 0.8s;
    `,
    bar: css`
      width: 134px;
      height: 5px;
      background-color: ${colorMode === LIGHT
        ? colors.light._1
        : colors.dark._6};
      border-radius: 100px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 8px;
      transition: 0.8s;
    `,
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.bar} />
    </div>
  );
};

export default Footer;

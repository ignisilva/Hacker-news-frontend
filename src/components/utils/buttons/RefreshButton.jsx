import { css } from "@emotion/css";
import RefreshIcon from "../svgs/RefreshIcon";

const RefreshButton = ({
  width = "19px",
  height = "19px",
  backgroundColor = "#fff",
  position = "absolute",
}) => {
  const styles = {
    wrap: css`
      position: ${position};
      width: ${width};
      height: ${height};
      background-color: ${backgroundColor};
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };

  return (
    <div className={styles.wrap}>
      <RefreshIcon />
    </div>
  );
};

export default RefreshButton;

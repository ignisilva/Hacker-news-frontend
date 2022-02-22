import { css } from "@emotion/css";
import { memo } from "react";
import ReactLoading from "react-loading";
import colors from "../../colors";

const Loader = ({ height }) => {
  const styles = {
    wrap: css`
      width: auto;
      height: ${height};
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    `,
  };
  return (
    <div className={styles.wrap}>
      <ReactLoading type="spin" color={colors.point} />
    </div>
  );
};

export default memo(Loader);

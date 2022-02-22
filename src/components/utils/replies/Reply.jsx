import { css } from "@emotion/css";
import moment from "moment";
import colors from "../../../colors";
import Parser from "html-react-parser";
import Inner from "../Inner";
import { LIGHT } from "../../../redux/modules/color";

const Reply = ({ colorMode, data, isKid, isLast }) => {
  const styles = {
    wrap: css`
      width: auto;
      height: auto;

      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      padding: ${`0px 15px 0px ${isKid ? "35px" : "15px"}`};

      border-bottom: ${isLast
        ? `1px solid ${colorMode === LIGHT ? colors.light._4 : colors.dark._4}`
        : "none"};
    `,
    subInfo: css`
      color: ${colorMode === LIGHT ? colors.light._4 : colors.dark._9};

      display: flex;
    `,
    author: css`
      margin-right: 5px;
      text-decoration: underline;
    `,
    timeAgo: css``,
    text: css`
      font-weight: normal;
      margin-top: 3px;
    `,
    text: css`
      word-break: break-all;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._10};
    `,
  };

  /* console.log(data); */

  return (
    <div className={styles.wrap}>
      <Inner padding={"20px 10px"}>
        <div className={styles.subInfo}>
          <div className={styles.author}>{`${data.author}, `}</div>
          <div className={styles.timeAgo}>
            {moment(Number(data.timeAgo) * 1000).fromNow()}
          </div>
        </div>
        <div className={styles.text}>
          <p>{Parser(String(data.text))}</p>
        </div>
      </Inner>
    </div>
  );
};

export default Reply;

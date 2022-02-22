import { css } from "@emotion/css";
import colors from "../../colors";
import { LIGHT } from "../../redux/modules/color";
import Inner from "../utils/Inner";
import { NEWS_TYPE } from "./News";

const NewsSwitcher = ({ colorMode, newsType, setNewsType }) => {
  const styles = {
    wrap: css`
      width: auto;
      height: 93px;
      display: flex;
      align-items: center;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      transition: 0.8s;
    `,
    switchGroup: css`
      width: auto;
      height: 49px;
      display: flex;
      justify-content: center;
    `,
    switch: (isSelected = false) => css`
      width: 53px;
      height: 49px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-bottom: ${isSelected ? "3px solid " + colors.point : ""};
      margin-right: 23px;
      color: ${isSelected
        ? colors.point
        : colorMode === LIGHT
        ? colors.light._4
        : colors.dark._8};
      &:last-child {
        margin-right: 0px;
      }
    `,
    switchName: css`
      height: 29px;
      line-height: 29px;
      font-size: 25px;
      font-weight: 700;
    `,
  };

  const onClickTop = () => {
    if (newsType === NEWS_TYPE.TOP) return;
    setNewsType(NEWS_TYPE.TOP);
  };

  const onClickNew = () => {
    if (newsType === NEWS_TYPE.NEW) return;
    setNewsType(NEWS_TYPE.NEW);
  };

  return (
    <div className={styles.wrap}>
      <Inner padding={"15px 22px"}>
        <ul className={styles.switchGroup}>
          <li
            className={styles.switch(newsType === NEWS_TYPE.TOP)}
            onClick={onClickTop}
          >
            <div className={styles.switchName}>top</div>
          </li>
          <li
            className={styles.switch(newsType === NEWS_TYPE.NEW)}
            onClick={onClickNew}
          >
            <div className={styles.switchName}>new</div>
          </li>
        </ul>
      </Inner>
    </div>
  );
};

export default NewsSwitcher;

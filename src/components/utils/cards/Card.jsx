import { css } from "@emotion/css";
import moment from "moment";
import colors from "../../../colors";
import { LIGHT } from "../../../redux/modules/color";
import Inner from "../Inner";
import CommentIcon from "../svgs/CommentIcon";
import PointIcon from "../svgs/PointIcon";
import Alert from "./Alert";

const Card = ({
  colorMode = LIGHT,
  isShow = false,
  isComments = false,
  width = "auto",
  id = undefined,
  url = undefined,
  alert = undefined,
  title = undefined,
  // commentInfo = {
  //   author,
  //   timeAgo,
  //   point,
  // },
  description = undefined,
  additionalInfo = undefined,
  // addtionalInfo = {
  //   author,
  //   timeAgo,
  // }
  cardSub = undefined,
  // cardSub = {
  //   author,
  //   timeAgo,
  //   point,
  //   comments
  // }
  onClickProfile = null,
  onClickComments = null,
}) => {
  const isShowAndIsHot = (isShow, point) => {
    return isShow && point && point >= 100;
  };

  const styles = {
    wrap: css`
      width: ${width};
      height: auto;
      border: ${isComments
        ? "none"
        : `0.8px solid ${
            colorMode === LIGHT ? colors.light._3 : colors.dark._3
          }`};

      box-sizing: border-box;
      transition: 0.8s;
    `,
    cardMain: css`
      background-color: ${isShowAndIsHot(isShow, Number(cardSub?.point))
        ? colorMode === LIGHT
          ? colors.point
          : colors.dark._2
        : colorMode === LIGHT
        ? colors.light._6
        : colors.dark._2};
      transition: 0.8s;
    `,
    url: css`
      width: auto;
      height: auto;
      line-height: 19px;
      font-style: normal;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 3px;
      word-break: break-all;
      color: ${isShowAndIsHot(isShow, Number(cardSub?.point))
        ? colorMode === LIGHT
          ? colors.light._7
          : colors.point
        : colors.point};
    `,
    title: css`
      width: auto;
      height: auto;
      font-size: 26px;
      font-weight: bold;
      line-height: 30px;
      word-break: break-all;
      color: ${isShowAndIsHot(isShow, Number(cardSub?.point))
        ? colorMode === LIGHT
          ? colors.light._7
          : colors.point
        : colorMode === LIGHT
        ? colors.light._1
        : colors.dark._6};
    `,
    description: css`
      width: auto;
      height: auto;
      margin-top: 12px;
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
    `,
    additionalnfo: css`
      width: auto;
      height: auto;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
    `,
    additionalnfoBy: css`
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 19px;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._6};
    `,
    additionalnfoTimeAgo: css`
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: ${colorMode === LIGHT ? colors.light._2 : colors.dark._4};
    `,
    cardSub: css`
      width: auto;
      height: ${isComments ? `auto` : `48px`};
      margin-top: ${isComments ? `12px` : `0px`};
      padding: ${isComments ? `none` : `0 15px`};
      background-color: ${isComments
        ? `transparent;`
        : colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      border-top: ${isComments
        ? "none"
        : `0.9px solid ${
            colorMode === LIGHT ? colors.light._8 : colors.dark._3
          }`};
      transition: 0.8s;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    subMainInfo: css`
      width: auto;
      height: auto;

      display: ${isShow ? "flex" : "block"};
      flex-direction: ${isShow ? "column" : "row"};
    `,
    author: css`
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-decoration-line: underline;
      color: ${colorMode === LIGHT ? colors.light._2 : colors.dark._6};
    `,
    separator: css`
      width: 4px;
      margin: 0 2px;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: ${colorMode === LIGHT ? colors.light._3 : colors.dark._4};
      transition: 0.8s;
    `,
    timeAgo: css`
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: ${colorMode === LIGHT ? colors.light._3 : colors.dark._4};
      transition: 0.8s;
    `,
    subAddtionalInfo: css`
      width: auto;
      height: auto;
      display: flex;
    `,
    point: css`
      display: flex;
      align-items: center;
      margin-right: 10px;

      flex-direction: ${isShow ? `column` : `none`};
    `,
    pointCount: css`
      width: auto;
      height: 15px;
      margin-left: ${isShow ? `-1px` : `3px`};
      font-style: normal;
      font-weight: ${isComments ? "500" : "normal"};
      font-size: ${isComments ? "14px" : "12.68px"};
      line-height: ${isShow ? `17px` : `16px`};
      color: ${colorMode === LIGHT ? colors.light._2 : colors.dark._4};
    `,
    comments: css`
      display: flex;
      align-items: center;

      flex-direction: ${isShow ? `column` : `none`};
    `,
    commentsCount: css`
      width: auto;
      height: 15px;
      margin-left: ${isShow ? `-1px` : `3px`};
      font-style: normal;
      font-weight: normal;
      font-size: 12.68px;
      line-height: ${isShow ? `17px` : `15px`};
      text-decoration-line: underline;
      color: ${colorMode === LIGHT ? colors.light._2 : colors.dark._4};
    `,
  };

  return (
    <div className={styles.wrap}>
      <div
        className={styles.cardMain}
        onClick={() => {
          window.open(url, "popup", "resizable, scrollbars, status, noopener");
        }}
      >
        <Inner padding={isComments ? `40px 15px` : "15px"}>
          {alert && <Alert type={alert} />}
          {url && (
            <div className={styles.url}>
              {String(url).match(
                /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi
              )}
            </div>
          )}
          <h3 className={styles.title}>{title}</h3>
          {isComments && cardSub && (
            <div className={styles.cardSub}>
              <div className={styles.subMainInfo}>
                <span
                  className={styles.author}
                  onClick={() => {
                    onClickProfile(cardSub.author);
                  }}
                >
                  {cardSub.author}
                </span>
                {!isShow && <span className={styles.separator}>|</span>}
                <span className={styles.timeAgo}>
                  {moment(Number(cardSub.timeAgo) * 1000).fromNow()}
                </span>
              </div>
              <div className={styles.subAddtionalInfo}>
                <div
                  className={styles.pointCount}
                >{`points ${cardSub.point}`}</div>
              </div>
            </div>
          )}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {additionalInfo && (
            <div className={styles.additionalnfo}>
              <div className={styles.additionalnfoBy}>
                {additionalInfo.author}
              </div>
              <div className={styles.additionalnfoTimeAgo}>
                {moment(Number(additionalInfo.timeAgo) * 1000).fromNow()}
              </div>
            </div>
          )}
        </Inner>
      </div>
      {!isComments && cardSub && (
        <div className={styles.cardSub}>
          <div className={styles.subMainInfo}>
            <span
              className={styles.author}
              onClick={() => {
                onClickProfile(cardSub.author);
              }}
            >
              {cardSub.author}
            </span>
            {!isShow && <span className={styles.separator}>|</span>}
            <span className={styles.timeAgo}>
              {moment(Number(cardSub.timeAgo) * 1000).fromNow()}
            </span>
          </div>
          <div className={styles.subAddtionalInfo}>
            <div className={styles.point}>
              <PointIcon
                color={colorMode === LIGHT ? colors.light._2 : colors.dark._4}
              />
              <div className={styles.pointCount}>{cardSub.point}</div>
            </div>
            <div className={styles.comments}>
              <CommentIcon
                color={colorMode === LIGHT ? colors.light._2 : colors.dark._4}
              />
              <div
                className={styles.commentsCount}
                onClick={() => {
                  if (Array.from(Object(cardSub.comments)).length > 0) {
                    onClickComments(id);
                  }
                }}
              >
                {Array.from(Object(cardSub.comments)).length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

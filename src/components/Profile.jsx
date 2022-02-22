import { css } from "@emotion/css";
import moment from "moment";
import { useEffect } from "react";
import colors from "../colors";
import { LIGHT } from "../redux/modules/color";
import Loader from "./common/Loader";
import Button from "./utils/buttons/Button";
import Inner from "./utils/Inner";

function convertHTMLcodeToString(str) {
  let result = String(str)
    .replaceAll("&#x2F;", "/")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
  return result;
}

const Profile = ({ colorMode, loading, userId, profile, getProfile }) => {
  useEffect(() => {
    getProfile(userId);
  }, []);

  const styles = {
    wrap: css`
      width: auto;
      height: 100%;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      transition: 0.8s;
    `,
    profileWrap: css``,
    about: css`
      margin-bottom: 45px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
    `,
    aboutCentence: css`
      margin-bottom: 16px;
      text-align: center;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._9};
    `,
    infoGroup: css`
      height: 76px;
      margin-bottom: 45px;
      display: flex;
    `,
    info: css`
      width: 50%;
      height: auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    infoSeparator: css`
      width: 1px;
      height: 76px;
      position: absolute;
      left: 0;
      right: 0px;
      margin: 0 auto;
      background-color: #c5c5c5;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._9};
    `,
    infoTitle: css`
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
      line-height: 28px;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._5};
    `,
    infoDetail: css`
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 28px;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._6};
    `,
    buttonGroup: css`
      display: flex;
    `,
    button: css`
      margin-right: 9px;
      &:last-child {
        margin-right: 0px;
      }
    `,
  };

  return (
    <div className={styles.wrap}>
      <Inner padding={"40px 15px 0px 15px"}>
        {!loading && profile && (
          <div className={styles.profileWrap}>
            <div className={styles.about}>
              {profile.about === undefined ? (
                <p
                  className={styles.aboutCentence}
                >{`Hello, ${profile.id}!`}</p>
              ) : (
                convertHTMLcodeToString(profile.about)
                  .split("<p>")
                  .map((centence, index) => (
                    <p key={index} className={styles.aboutCentence}>
                      {centence}
                    </p>
                  ))
              )}
            </div>
            <div className={styles.infoGroup}>
              <div className={styles.info}>
                <div className={styles.infoTitle}>joined</div>
                <div className={styles.infoDetail}>
                  {moment(Number(profile.created) * 1000).fromNow()}
                </div>
              </div>
              <div className={styles.infoSeparator} />
              <div className={styles.info}>
                <div className={styles.infoTitle}>has</div>
                <div className={styles.infoDetail}>
                  {`${profile.karma} Karma`}
                </div>
              </div>
            </div>
            <ul className={styles.buttonGroup}>
              {["submissions", "comments", "favourites"].map((value, index) => (
                <li key={index} className={styles.button}>
                  <Button colorMode={colorMode}>{value}</Button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {loading && <Loader height="280px" />}
      </Inner>
    </div>
  );
};

export default Profile;

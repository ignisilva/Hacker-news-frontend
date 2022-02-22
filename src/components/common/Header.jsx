import { css } from "@emotion/css";
import logoImage from "../../../public/assets/header_imgs.png";
import Inner from "../utils/Inner";
import colors from "../../colors";
import NavOpenIcon from "../utils/svgs/NavOpenIcon";
import NavCloseIcon from "../utils/svgs/NavCloseIcon";
import CloseIcon from "../utils/svgs/CloseIcon";
import { LIGHT } from "../../redux/modules/color";
import { useNavigate } from "react-router-dom";
import { SELECTED_NAV } from "../../constants";

const Header = ({ navState, navToggle, colorMode = LIGHT, selectedNav }) => {
  const styles = {
    wrap: css`
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      position: relative;
      z-index: 3;
      transition: 0.8s;
    `,
    statusBar: css`
      height: 44px;
    `,
    header: css`
      width: auto;
      height: 70px;
      border-bottom: 1px solid
        ${colorMode === LIGHT ? colors.light._1 : colors.dark._7};
      box-sizing: border-box;
    `,
    title: css`
      padding-top: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    titleMain: css`
      width: auto;
      height: 26px;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0px;
      transition: 0.8s;
    `,
    titleText: css`
      margin-left: 7px;
      font-size: 22px;
      line-height: 26px;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._6};
      transition: 0.8s;
    `,
    navToggleIcon: css`
      width: 26px;
      height: 26px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };

  const navigate = useNavigate();

  return (
    <div className={styles.wrap}>
      <div className={styles.statusBar}></div>
      <header className={styles.header}>
        <Inner>
          <div className={styles.title}>
            <div className={styles.titleMain}>
              <img src={logoImage} alt="title_logo" />
              <h1 className={styles.titleText}>{selectedNav}</h1>
            </div>
            <div className={styles.navToggleIcon}>
              {SELECTED_NAV.isClose(selectedNav) ? (
                <div onClick={navToggle}>
                  {navState ? (
                    <NavCloseIcon
                      color={
                        colorMode === LIGHT ? colors.light._1 : colors.dark._6
                      }
                    />
                  ) : (
                    <NavOpenIcon
                      color={
                        colorMode === LIGHT ? colors.light._1 : colors.dark._6
                      }
                    />
                  )}
                </div>
              ) : (
                <div onClick={() => navigate("/")}>
                  <CloseIcon
                    color={
                      colorMode === LIGHT ? colors.light._1 : colors.dark._6
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </Inner>
      </header>
    </div>
  );
};

export default Header;

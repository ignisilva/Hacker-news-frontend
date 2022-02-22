import { css } from "@emotion/css";
import ToggleButton from "../utils/buttons/ToggleButton";
import Inner from "../utils/Inner";
import { Link } from "react-router-dom";
import colors from "../../colors";
import { LIGHT } from "../../redux/modules/color";

const navList = [
  {
    name: "hacker news",
    path: "/",
  },
  {
    name: "show",
    path: "/show",
  },
  {
    name: "ask",
    path: "/ask",
  },
  {
    name: "jobs",
    path: "/jobs",
  },
  {
    name: "about",
    path: "/about",
  },
];

const Nav = ({ navState, colorMode, colorLight, colorDark, selectedNav }) => {
  const styles = {
    wrap: css`
      width: 390px;
      height: 270px;
      border-bottom: 1px solid
        ${colorMode === LIGHT ? colors.light._1 : colors.dark._7};
      box-sizing: border-box;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
      position: absolute;
      top: ${-(270 - 114)}px;
      z-index: 2;
      transition: 0.8s;
      transform: ${navState ? "translateY(270px);" : "none"};
    `,
    nav: css`
      width: auto;
      height: auto;
    `,
    ul: css`
      /* background-color: #fff; */
    `,
    li: css`
      width: auto;
      height: 26px;
      margin-bottom: 8px;
      &:nth-child(4) {
        margin-bottom: 45px;
      }
      &:last-child {
        margin-bottom: 0px;
      }
    `,
    isSelected: (isSelected = false) => css`
      font-weight: 400;
      font-size: 22px;
      line-height: 26px;
      text-decoration: none;
      color: ${isSelected
        ? colors.point
        : colorMode === LIGHT
        ? colors.light._1
        : colors.dark._6};
      transition: 0.8s;

      /* no-drag */
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    `,
    relativeBox: css`
      width: auto;
      height: 28px;
      position: relative;
      /* background-color: royalblue; */
      margin-top: 14px;
    `,
  };

  return (
    <div className={styles.wrap}>
      <Inner padding={"16px 15px"}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {navList.map((nav, index) => (
              <li key={index} className={styles.li}>
                <Link
                  to={nav.path}
                  className={styles.isSelected(nav.name === selectedNav)}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.relativeBox}>
          <ToggleButton
            bottom={0}
            right={0}
            colorMode={colorMode}
            colorLight={colorLight}
            colorDark={colorDark}
          />
        </div>
      </Inner>
    </div>
  );
};

export default Nav;

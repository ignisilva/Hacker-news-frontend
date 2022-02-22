import { css } from "@emotion/css";
import colors from "../colors";
import { LIGHT } from "../redux/modules/color";
import Inner from "./utils/Inner";

const About = ({ colorMode }) => {
  const styles = {
    wrap: css`
      width: auto;
      height: 100%;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
    `,
    title: css`
      display: block;
    `,
    text: css`
      margin-bottom: 26px;

      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 28px;
      color: ${colorMode === LIGHT ? colors.light._1 : colors.dark._6};
    `,
  };

  return (
    <div className={styles.wrap}>
      <Inner padding={"40px 15px 0px 15px"}>
        <p className={styles.text}>
          <span className={styles.title}>About this site</span>
          This is a simple Hacker News clone, built with SvelteKit, an
          application framework for Svelte.
        </p>
        <p className={styles.text}>
          Svelte is a new kind of framework, one that compiles your component
          templates into fast, compact JavaScript — either client-side or
          server-side. You can read more about the design and philosophy in the
          introductory blog post.
        </p>
        <p className={styles.text}>
          We're using hnpwa-api as a backend. The app is hosted on Vercel.
        </p>
      </Inner>
    </div>
  );
};

export default About;

import Layout from "../components/utils/Layout";
import HeaderNav from "../components/common/HeaderNav";
import useColorMode from "../hooks/useColorMode";
import { css } from "@emotion/css";
import { LIGHT } from "../redux/modules/color";
import colors from "../colors";

const ErrorContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const styles = {
    wrap: css`
      width: auto;
      height: 500px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 26px;
      font-weight: bold;
      color: #ff7718;
      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
    `,
  };

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={""}
      />
      <div className={styles.wrap}>{"Error!"}</div>
    </Layout>
  );
};

export default ErrorContainer;

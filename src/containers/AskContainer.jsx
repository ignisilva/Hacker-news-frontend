import Footer from "../components/common/Footer";
import Ask from "../components/Ask";
import Layout from "../components/utils/Layout";
import { SELECTED_NAV } from "../constants";
import HeaderNav from "../components/common/HeaderNav";
import useColorMode from "../hooks/useColorMode";
import { useDispatch } from "react-redux";

const AskContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const dispatch = useDispatch();

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={SELECTED_NAV.ASK}
      />
      <Ask selectedNav={SELECTED_NAV.ASK} />
      <Footer colorMode={colorMode} />
    </Layout>
  );
};

export default AskContainer;

import Layout from "../components/utils/Layout";
import About from "../components/About";
import HeaderNav from "../components/common/HeaderNav";
import Footer from "../components/common/Footer";
import { SELECTED_NAV } from "../constants";
import useColorMode from "../hooks/useColorMode";

const AboutContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={SELECTED_NAV.ABOUT}
      />
      <About colorMode={colorMode} />
      <Footer colorMode={colorMode} />
    </Layout>
  );
};

export default AboutContainer;

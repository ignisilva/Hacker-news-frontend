import useNavToggle from "../../hooks/useNavToggle";
import Header from "./Header";
import Nav from "./Nav";

const HeaderNav = ({ colorMode, colorLight, colorDark, selectedNav }) => {
  const [navState, navToggle] = useNavToggle();

  return (
    <>
      <Header
        navState={navState}
        navToggle={navToggle}
        colorMode={colorMode}
        selectedNav={selectedNav}
      />
      <Nav
        navState={navState}
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={selectedNav}
      />
    </>
  );
};

export default HeaderNav;

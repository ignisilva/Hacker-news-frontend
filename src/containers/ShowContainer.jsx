import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import HeaderNav from "../components/common/HeaderNav";
import Show from "../components/Show";
import Layout from "../components/utils/Layout";
import { SELECTED_NAV } from "../constants";
import useColorMode from "../hooks/useColorMode";
import useScrollToPivot from "../hooks/useScrollToPivot";
import { getShowInitialize, getShowMore } from "../redux/modules/show";

const ShowContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const [pivotRef, onClickPivotHandler] = useScrollToPivot();

  const { show, loading, error } = useSelector((state) => state.show);

  const dispatch = useDispatch();

  const getFirst = useCallback(() => {
    dispatch(getShowInitialize());
  }, [dispatch]);

  const getMore = useCallback(() => {
    dispatch(getShowMore());
  }, [dispatch]);

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={SELECTED_NAV.SHOW}
      />
      <Show
        colorMode={colorMode}
        show={show}
        loading={loading}
        getFirst={getFirst}
        getMore={getMore}
        selectedNav={SELECTED_NAV.SHOW}
        ref={pivotRef}
        onClickPivotHandler={onClickPivotHandler}
      />
      <Footer colorMode={colorMode} />
    </Layout>
  );
};

export default ShowContainer;

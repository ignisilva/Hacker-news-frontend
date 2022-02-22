import Layout from "../components/utils/Layout";
import News from "../components/news/News";
import Footer from "../components/common/Footer";
import HeaderNav from "../components/common/HeaderNav";
import useColorMode from "../hooks/useColorMode";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  getTopNewsInitialize as getTopNewsInitializeSaga,
  getTopNewsMore as getTopNewsMoreSaga,
} from "../redux/modules/topNews";
import {
  getRecentNewsInitialize as getRecentNewsInitializeSaga,
  getRecentNewsMore as getRecentNewsMoreSaga,
} from "../redux/modules/recentNews";
import useScrollToPivot from "../hooks/useScrollToPivot";
import { SELECTED_NAV } from "../constants";

const NewsContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const [pivotRef, onClickPivotHandler] = useScrollToPivot();

  const {
    top,
    loading: topLoading,
    error: topError,
  } = useSelector((state) => state.topNews);
  const {
    recent,
    loading: recentLoading,
    error: recentError,
  } = useSelector((state) => state.recentNews);

  const dispatch = useDispatch();

  const getTopNewsInitialize = useCallback(() => {
    dispatch(getTopNewsInitializeSaga());
  }, [dispatch]);

  const getTopNewsMore = useCallback(() => {
    dispatch(getTopNewsMoreSaga());
  }, [dispatch]);

  const getRecentNewsInitialize = useCallback(() => {
    dispatch(getRecentNewsInitializeSaga());
  }, [dispatch]);

  const getRecentNewsMore = useCallback(() => {
    dispatch(getRecentNewsMoreSaga());
  }, [dispatch]);

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={SELECTED_NAV.HACKER_NEWS}
      />
      <News
        colorMode={colorMode}
        top={top}
        topLoading={topLoading}
        recent={recent}
        recentLoading={recentLoading}
        getTopNewsInitialize={getTopNewsInitialize}
        getTopNewsMore={getTopNewsMore}
        getRecentNewsInitialize={getRecentNewsInitialize}
        getRecentNewsMore={getRecentNewsMore}
        selectedNav={SELECTED_NAV.HACKER_NEWS}
        ref={pivotRef}
        onClickPivotHandler={onClickPivotHandler}
      />
      <Footer colorMode={colorMode} />
    </Layout>
  );
};

export default NewsContainer;

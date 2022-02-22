import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import HeaderNav from "../components/common/HeaderNav";
import Jobs from "../components/Jobs";
import Layout from "../components/utils/Layout";
import { SELECTED_NAV } from "../constants";
import useColorMode from "../hooks/useColorMode";
import useScrollToPivot from "../hooks/useScrollToPivot";
import {
  getJobsInitialize as getJobsInitializeSaga,
  getJobsMore as getJobsMoreSaga,
} from "../redux/modules/jobs";

const JobsContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const [pivotRef, onClickPivotHandler] = useScrollToPivot();

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  const getJobsInitialize = useCallback(() => {
    dispatch(getJobsInitializeSaga());
  }, [dispatch]);

  const getJobsMore = useCallback(() => {
    dispatch(getJobsMoreSaga());
  }, [dispatch]);

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={SELECTED_NAV.JOBS}
      />
      <Jobs
        colorMode={colorMode}
        jobs={jobs}
        loading={loading}
        getJobsInitialize={getJobsInitialize}
        getJobsMore={getJobsMore}
        selectedNav={SELECTED_NAV.JOBS}
        ref={pivotRef}
        onClickPivotHandler={onClickPivotHandler}
      />
      <Footer colorMode={colorMode} />
    </Layout>
  );
};

export default JobsContainer;

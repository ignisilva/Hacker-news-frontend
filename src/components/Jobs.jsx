import React from "react";
import { css } from "@emotion/css";
import { useEffect } from "react";
import ScrollUpButton from "./utils/buttons/ScrollUpButton";
import CardList from "./utils/cards/CardList";
import { LIGHT } from "../redux/modules/color";
import colors from "../colors";

const Jobs = React.forwardRef(
  (
    {
      colorMode,
      jobs,
      loading,
      getJobsInitialize,
      getJobsMore,
      selectedNav,
      onClickPivotHandler,
    },
    ref
  ) => {
    useEffect(() => {
      getJobsInitialize();
    }, []);

    const styles = {
      wrap: css`
        width: auto;
        height: auto;
        position: relative;
        z-index: 1;
      `,
      blank: css`
        width: auto;
        height: 40px;
        background-color: ${colorMode === LIGHT
          ? colors.light._7
          : colors.light._1};
        transition: 0.8s;
      `,
    };

    return (
      <div className={styles.wrap}>
        <div className={styles.blank}></div>
        <CardList
          colorMode={colorMode}
          ref={ref}
          cardsInfo={jobs.datas}
          cardsLoading={loading}
          getCardsMore={getJobsMore}
          selectedNav={selectedNav}
        />
        <ScrollUpButton
          colorMode={colorMode}
          onClickHandler={onClickPivotHandler}
        />
      </div>
    );
  }
);

export default Jobs;

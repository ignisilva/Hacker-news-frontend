import React from "react";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import NewsSwitcher from "./NewsSwitcher";
import ScrollUpButton from "../utils/buttons/ScrollUpButton";
import CardList from "../utils/cards/CardList";

export const NEWS_TYPE = {
  TOP: 0,
  NEW: 1,
};

const News = React.forwardRef(
  (
    {
      colorMode,
      top,
      topLoading,
      recent,
      recentLoading,
      getTopNewsInitialize,
      getTopNewsMore,
      getRecentNewsInitialize,
      getRecentNewsMore,
      selectedNav,
      onClickPivotHandler,
    },
    ref
  ) => {
    const [newsType, setNewsType] = useState(NEWS_TYPE.TOP);

    useEffect(() => {
      if (newsType === NEWS_TYPE.TOP) {
        getTopNewsInitialize();
      } else {
        getRecentNewsInitialize();
      }
    }, [newsType]);

    const styles = {
      wrap: css`
        width: auto;
        height: auto;
        position: relative;
        z-index: 1;
      `,
    };

    return (
      <div className={styles.wrap}>
        <NewsSwitcher
          colorMode={colorMode}
          newsType={newsType}
          setNewsType={setNewsType}
        />
        <CardList
          colorMode={colorMode}
          ref={ref}
          cardsInfo={newsType === NEWS_TYPE.TOP ? top.news : recent.news}
          cardsLoading={newsType === NEWS_TYPE.TOP ? topLoading : recentLoading}
          getCardsMore={
            newsType === NEWS_TYPE.TOP ? getTopNewsMore : getRecentNewsMore
          }
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

export default News;

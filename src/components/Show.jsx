import { css } from "@emotion/css";
import React, { useEffect } from "react";
import colors from "../colors";
import { LIGHT } from "../redux/modules/color";
import ScrollUpButton from "./utils/buttons/ScrollUpButton";
import CardList from "./utils/cards/CardList";

const Show = React.forwardRef(
  (
    {
      colorMode,
      show,
      loading,
      getFirst,
      getMore,
      selectedNav,
      onClickPivotHandler,
    },
    ref
  ) => {
    useEffect(() => {
      getFirst();
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
          cardsInfo={show.datas}
          cardsLoading={loading}
          getCardsMore={getMore}
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

export default Show;

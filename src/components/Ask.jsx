import { css } from "@emotion/css";
import CardList from "../components/utils/cards/CardList";
import ScrollUpButton from "./utils/buttons/ScrollUpButton";

const Ask = ({ selectedNav }) => {
  const styles = {
    wrap: css``,
  };
  return (
    <div className={styles.wrap}>
      <CardList
        // cardsInfo={newsType === NEWS_TYPE.TOP ? top.news : recent.news}
        // cardsLoading={newsType === NEWS_TYPE.TOP ? topLoading : recentLoading}
        // getCardsMore={
        //   newsType === NEWS_TYPE.TOP ? getTopNewsMore : getRecentNewsMore
        // }
        selectedNav={selectedNav}
      />
      {/* <ScrollUpButton />; */}
    </div>
  );
};

export default Ask;

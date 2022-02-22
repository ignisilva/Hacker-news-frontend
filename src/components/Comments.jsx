import { css } from "@emotion/css";
import { useEffect } from "react";
import Loader from "./common/Loader";
import Card from "./utils/cards/Card";
import ReplyList from "./utils/replies/ReplyList";

const Comments = ({
  colorMode,
  reply,
  loading,
  cardId,
  getRepliesFirst,
  getRepliesMore,
}) => {
  const styles = {
    wrap: css`
      width: auto;
      height: auto;
      position: relative;
      z-index: 1;
    `,
  };

  useEffect(() => {
    getRepliesFirst(cardId);
  }, []);

  // console.log(main);
  // console.log(datas);
  // console.log(loading);

  return (
    <div className={styles.wrap}>
      <Card
        colorMode={colorMode}
        isComments={true}
        url={reply?.main?.url}
        title={reply?.main?.title}
        cardSub={{
          author: reply?.main?.by,
          timeAgo: reply?.main?.time,
          point: reply?.main?.score,
        }}
      />
      <ReplyList
        colorMode={colorMode}
        datas={reply?.datas}
        loading={loading}
        getRepliesMore={getRepliesMore}
      />
    </div>
  );
};

export default Comments;

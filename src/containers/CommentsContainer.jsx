import Comments from "../components/Comments";
import Layout from "../components/utils/Layout";
import Footer from "../components/common/Footer";
import HeaderNav from "../components/common/HeaderNav";
import { SELECTED_NAV } from "../constants";
import useColorMode from "../hooks/useColorMode";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  getRepliesFirst as getRepliesFirstSaga,
  getRepliesMore as getRepliesMoreSaga,
} from "../redux/modules/reply";
import { useParams } from "react-router-dom";

const CommentsContainer = () => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const { cardId } = useParams();

  const { reply, loading, error } = useSelector((state) => state.reply);

  const dispatch = useDispatch();

  const getRepliesFirst = useCallback(
    (cardId) => {
      dispatch(getRepliesFirstSaga(cardId));
    },
    [dispatch]
  );

  const getRepliesMore = useCallback(() => {
    dispatch(getRepliesMoreSaga());
  }, [dispatch]);

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={SELECTED_NAV.COMMENTS}
      />
      <Comments
        colorMode={colorMode}
        reply={reply}
        loading={loading}
        cardId={cardId}
        getRepliesFirst={getRepliesFirst}
        getRepliesMore={getRepliesMore}
      />
      <Footer colorMode={colorMode} />
    </Layout>
  );
};

export default CommentsContainer;

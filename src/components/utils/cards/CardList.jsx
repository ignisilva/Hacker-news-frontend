import React from "react";
import { css } from "@emotion/css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Inner from "../Inner";
import Loader from "../../common/Loader";
import { HEIGHT, SELECTED_NAV } from "../../../constants";
import { LIGHT } from "../../../redux/modules/color";
import colors from "../../../colors";

// 현재 총 height 값 - 위에서 사용된 HEIGHT 값 총산 - footer height = 스크롤 가능한 height

const CardList = React.forwardRef(
  (
    { colorMode = LIGHT, cardsInfo, cardsLoading, getCardsMore, selectedNav },
    ref
  ) => {
    const [viewRef, inView] = useInView();
    const navigate = useNavigate();

    useEffect(() => {
      if (inView && !cardsLoading) {
        getCardsMore();
      }
    }, [inView]);

    const height =
      selectedNav === SELECTED_NAV.HACKER_NEWS
        ? HEIGHT.TOTAL - HEIGHT.HEADER - HEIGHT.NEWS_SWITCH - HEIGHT.FOOTER
        : HEIGHT.TOTAL - HEIGHT.HEADER - HEIGHT.DEFAULT_MARGIN - HEIGHT.FOOTER;

    const styles = {
      wrap: css`
        width: auto;
        height: ${`${height}px`};
        position: relative;
        background-color: ${colorMode === LIGHT
          ? colors.light._7
          : colors.dark._1};
        transition: 0.8s;
        overflow-y: scroll;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      `,
      showWrap: css`
        display: flex;
        justify-content: space-between;
      `,
      showEachLine: css`
        width: 48%;
      `,
      cardWrap: css`
        margin-bottom: 20px;
      `,
    };

    return (
      <div className={styles.wrap}>
        <Inner>
          {selectedNav === SELECTED_NAV.JOBS && (
            <ul ref={ref}>
              {cardsInfo &&
                cardsInfo.map((cardInfo, index) => (
                  <li
                    key={cardInfo.id}
                    className={styles.cardWrap}
                    ref={cardsInfo.length - 1 === index ? viewRef : null}
                  >
                    <Card
                      colorMode={colorMode}
                      id={cardInfo.id}
                      url={cardInfo.url}
                      title={cardInfo.title}
                      additionalInfo={{
                        author: cardInfo.by,
                        timeAgo: cardInfo.time,
                      }}
                    />
                  </li>
                ))}
            </ul>
          )}
          {selectedNav === SELECTED_NAV.HACKER_NEWS && (
            <ul ref={ref}>
              {cardsInfo &&
                cardsInfo.map((cardInfo, index) => (
                  <li
                    key={cardInfo.id}
                    className={styles.cardWrap}
                    ref={cardsInfo.length - 1 === index ? viewRef : null}
                  >
                    <Card
                      colorMode={colorMode}
                      id={cardInfo.id}
                      url={cardInfo.url}
                      title={cardInfo.title}
                      cardSub={{
                        author: cardInfo.by,
                        timeAgo: cardInfo.time,
                        point: cardInfo.score,
                        comments: cardInfo.kids,
                      }}
                      onClickProfile={(userId) => {
                        navigate(`/profile/${userId}`);
                      }}
                      onClickComments={(id) => {
                        navigate(`/comments/${id}`);
                      }}
                    />
                  </li>
                ))}
            </ul>
          )}
          {selectedNav === SELECTED_NAV.SHOW && (
            <div className={styles.showWrap} ref={ref}>
              {[0, 1].map((v) => (
                <div className={styles.showEachLine}>
                  <ul>
                    {cardsInfo &&
                      cardsInfo.map((cardInfo, index) =>
                        index % 2 === v ? (
                          <li
                            key={cardInfo.id}
                            className={styles.cardWrap}
                            ref={
                              cardsInfo.length - 1 === index ? viewRef : null
                            }
                          >
                            <Card
                              colorMode={colorMode}
                              isShow={true}
                              id={cardInfo.id}
                              url={cardInfo.url}
                              title={cardInfo.title}
                              cardSub={{
                                author: cardInfo.by,
                                timeAgo: cardInfo.time,
                                point: cardInfo.score,
                                comments: cardInfo.kids,
                              }}
                              onClickProfile={(userId) => {
                                navigate(`/profile/${userId}`);
                              }}
                              onClickComments={(id) => {
                                navigate(`/comments/${id}`);
                              }}
                            />
                          </li>
                        ) : (
                          <></>
                        )
                      )}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {cardsLoading && (
            <Loader height={cardsInfo.length === 0 ? "577px" : "auto"} />
          )}
        </Inner>
      </div>
    );
  }
);

export default CardList;

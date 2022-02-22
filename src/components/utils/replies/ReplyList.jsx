import { css } from "@emotion/css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import colors from "../../../colors";
import { HEIGHT } from "../../../constants";
import { LIGHT } from "../../../redux/modules/color";
import Loader from "../../common/Loader";
import RefreshButton from "../buttons/RefreshButton";
import Reply from "./Reply";

const ReplyList = ({ colorMode, datas = [], loading, getRepliesMore }) => {
  const height = HEIGHT.TOTAL - HEIGHT.HEADER - HEIGHT.FOOTER - 60 - 160;

  const styles = {
    wrap: css`
      width: auto;
      height: auto;

      background-color: ${colorMode === LIGHT
        ? colors.light._7
        : colors.dark._1};
    `,
    refresh: css`
      width: auto;
      height: 60px;
      padding: 0 15px;

      display: flex;
      justify-content: end;
      align-items: center;
    `,
    scrollArea: css`
      width: auto;
      height: ${`${height}px`};
      overflow-y: scroll;

      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    `,
  };

  const [viewRef, inView] = useInView();

  useEffect(() => {
    if (inView && !loading) {
      getRepliesMore();
    }
  }, [inView]);

  // console.log(datas);
  // console.log("loading", loading);
  // console.log("view", inView);

  return (
    <div className={styles.wrap}>
      <div className={styles.refresh}>
        <RefreshButton position={"relative"} />
      </div>
      <ul className={styles.scrollArea}>
        {datas &&
          datas.map((data) => (
            <>
              <li key={data.id}>
                <Reply colorMode={colorMode} data={data} />
              </li>
              {data.kids &&
                data.kids.map((kid, index, origin) => (
                  <li
                    key={kid.id}
                    ref={origin.length - 1 === index ? viewRef : null}
                  >
                    <Reply
                      colorMode={colorMode}
                      data={kid}
                      isKid={true}
                      isLast={origin.length - 1 === index}
                    />
                  </li>
                ))}
            </>
          ))}
        {loading && <Loader height={datas.length === 0 ? "577px" : "80px"} />}
      </ul>
    </div>
  );
};

export default ReplyList;

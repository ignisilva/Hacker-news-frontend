import { useRef } from "react";

const useScrollToPivot = () => {
  const pivotRef = useRef(null);

  const onClickPivotHandler = () => {
    if (pivotRef.current) {
      pivotRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return [pivotRef, onClickPivotHandler];
};

export default useScrollToPivot;

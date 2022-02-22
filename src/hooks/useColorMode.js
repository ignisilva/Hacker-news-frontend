import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../redux/modules/color";

const useColorMode = () => {
  const colorMode = useSelector((state) => state.color.mode);

  const dispatch = useDispatch();

  const colorLight = useCallback(() => {
    dispatch(light());
  }, [dispatch]);

  const colorDark = useCallback(() => {
    dispatch(dark());
  }, [dispatch]);

  return [colorMode, colorLight, colorDark];
};

export default useColorMode;

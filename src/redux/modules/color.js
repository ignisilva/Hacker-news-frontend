import { createActions, handleActions } from "redux-actions";

const prefix = "hacker_news/colorMode";

export const LIGHT = "LIGHT";
export const DARK = "DARK";

export const { light, dark } = createActions(LIGHT, DARK, { prefix });

const initialState = {
  mode: LIGHT,
};

const reducer = handleActions(
  {
    LIGHT: (prevState) => ({
      mode: LIGHT,
    }),
    DARK: (prevState) => ({
      mode: DARK,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

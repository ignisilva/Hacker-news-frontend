import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CommonService from "../../services/CommonService";
import ShowService from "../../services/ShowService";

const initialState = {
  show: {
    lastIndex: 0,
    ids: null,
    datas: [],
  },
  loading: false,
  error: null,
};

const prefix = "hacker_news/show";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      show: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

export const { getShowInitialize, getShowMore } = createActions(
  "GET_SHOW_INITIALIZE",
  "GET_SHOW_MORE",
  {
    prefix,
  }
);

function* getShowInitializeSaga() {
  try {
    yield put(pending());
    const showIds = yield call(CommonService.getIds, ShowService.getShowUrl());
    const newShow = yield call(ShowService.getShowFirst, showIds);
    yield put(success(newShow));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getShowMoreSaga() {
  try {
    yield put(pending());
    const show = yield select((state) => state.show.show);
    const newShow = yield call(ShowService.getShowMore, show);
    yield put(success(newShow));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* ShowSaga() {
  yield takeLatest(`${prefix}/GET_SHOW_INITIALIZE`, getShowInitializeSaga);
  yield takeLatest(`${prefix}/GET_SHOW_MORE`, getShowMoreSaga);
}

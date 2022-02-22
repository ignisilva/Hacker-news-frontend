import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CommonService from "../../services/CommonService";
import NewsService from "../../services/NewsService";

const initialState = {
  top: {
    lastIndex: 0,
    ids: null,
    news: [],
  },
  loading: false,
  error: null,
};

const prefix = "hacker_news/topNews";

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
      top: action.payload,
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

export const { getTopNewsInitialize, getTopNewsMore } = createActions(
  "GET_TOP_NEWS_INITIALIZE",
  "GET_TOP_NEWS_MORE",
  {
    prefix,
  }
);

function* getTopNewsInitializeSaga() {
  try {
    yield put(pending());
    const topIds = yield call(CommonService.getIds, NewsService.getTopUrl());
    const newTop = yield call(NewsService.getNewsFirst, topIds);
    yield put(success(newTop));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getTopNewsMoreSaga() {
  try {
    yield put(pending());
    const top = yield select((state) => state.topNews.top);
    const newTop = yield call(NewsService.getNewsMore, top);
    yield put(success(newTop));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* topNewsSaga() {
  yield takeLatest(
    `${prefix}/GET_TOP_NEWS_INITIALIZE`,
    getTopNewsInitializeSaga
  );
  yield takeLatest(`${prefix}/GET_TOP_NEWS_MORE`, getTopNewsMoreSaga);
}

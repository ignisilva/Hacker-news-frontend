import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CommonService from "../../services/CommonService";
import NewsService from "../../services/NewsService";

const initialState = {
  recent: {
    lastIndex: 0,
    ids: null,
    news: [],
  },
  loading: false,
  error: null,
};

const prefix = "hacker_news/recentNews";

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
      recent: action.payload,
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

export const { getRecentNewsInitialize, getRecentNewsMore } = createActions(
  "GET_RECENT_NEWS_INITIALIZE",
  "GET_RECENT_NEWS_MORE",
  {
    prefix,
  }
);

function* getRecentNewsInitializeSaga() {
  try {
    yield put(pending());
    const recentIds = yield call(
      CommonService.getIds,
      NewsService.getRecentUrl()
    );
    const newRecent = yield call(NewsService.getNewsFirst, recentIds);
    yield put(success(newRecent));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getRecentNewsMoreSaga() {
  try {
    yield put(pending());
    const recent = yield select((state) => state.recentNews.recent);
    const newRecent = yield call(NewsService.getNewsMore, recent);
    yield put(success(newRecent));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* recentNewsSaga() {
  yield takeLatest(
    `${prefix}/GET_RECENT_NEWS_INITIALIZE`,
    getRecentNewsInitializeSaga
  );
  yield takeLatest(`${prefix}/GET_RECENT_NEWS_MORE`, getRecentNewsMoreSaga);
}

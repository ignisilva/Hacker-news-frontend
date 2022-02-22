import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CommonService from "../../services/CommonService";
import ReplyService from "../../services/ReplyService";

const initialState = {
  reply: {
    lastIndex: 0,
    main: null,
    datas: [],
  },
  loading: false,
  error: null,
};

const prefix = "hacker_news/reply";

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
      reply: action.payload,
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

export const { getRepliesFirst, getRepliesMore } = createActions(
  "GET_REPLIES_FIRST",
  "GET_REPLIES_MORE",
  {
    prefix,
  }
);

function* getRepliesFirstSaga(action) {
  try {
    yield put(pending());
    const main = yield call(CommonService.getItem, action.payload);
    const newReply = yield call(ReplyService.getReplyFirst, main);
    yield put(success(newReply));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getRepliesMoreSaga() {
  try {
    yield put(pending());
    const prevReply = yield select((state) => state.reply.reply);
    const newReply = yield call(ReplyService.getReplyMore, prevReply);
    yield put(success(newReply));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* ReplySaga() {
  yield takeLatest(`${prefix}/GET_REPLIES_FIRST`, getRepliesFirstSaga);
  yield takeLatest(`${prefix}/GET_REPLIES_MORE`, getRepliesMoreSaga);
}

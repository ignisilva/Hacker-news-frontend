import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CommonService from "../../services/CommonService";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const prefix = "hacker_news/profile";

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
      profile: action.payload,
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

export const { getProfile } = createActions("GET_PROFILE", {
  prefix,
});

function* getProfileSaga(action) {
  try {
    yield put(pending());
    const profile = yield call(CommonService.getUser, action.payload);
    yield put(success(profile));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* ProfileSaga() {
  yield takeLatest(`${prefix}/GET_PROFILE`, getProfileSaga);
}

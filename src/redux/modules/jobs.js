import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import CommonService from "../../services/CommonService";
import JobsService from "../../services/JobsService";

const initialState = {
  jobs: {
    lastIndex: 0,
    ids: null,
    datas: [],
  },
  loading: false,
  error: null,
};

const prefix = "hacker_news/jobs";

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
      jobs: action.payload,
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

export const { getJobsInitialize, getJobsMore } = createActions(
  "GET_JOBS_INITIALIZE",
  "GET_JOBS_MORE",
  {
    prefix,
  }
);

function* getJobsInitializeSaga() {
  try {
    yield put(pending());
    const jobIds = yield call(CommonService.getIds, JobsService.getJobUrl());
    const newJobs = yield call(JobsService.getJobsFirst, jobIds);
    yield put(success(newJobs));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

function* getJobsMoreSaga() {
  try {
    yield put(pending());
    const jobs = yield select((state) => state.jobs.jobs);
    const newJop = yield call(JobsService.getJobsMore, jobs);
    yield put(success(newJop));
  } catch (error) {
    yield put(fail(new Error(error?.response?.data?.error || "UNKNOWN_ERROR")));
  }
}

export function* JobsSaga() {
  yield takeLatest(`${prefix}/GET_JOBS_INITIALIZE`, getJobsInitializeSaga);
  yield takeLatest(`${prefix}/GET_JOBS_MORE`, getJobsMoreSaga);
}

import { all } from "redux-saga/effects";
import { topNewsSaga } from "./topNews";
import { recentNewsSaga } from "./recentNews";
import { JobsSaga } from "./jobs";
import { ProfileSaga } from "./profile";
import { ShowSaga } from "./show";
import { ReplySaga } from "./reply";

export default function* rootSaga() {
  yield all([
    topNewsSaga(),
    recentNewsSaga(),
    JobsSaga(),
    ProfileSaga(),
    ShowSaga(),
    ReplySaga(),
  ]);
}

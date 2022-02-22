import { combineReducers } from "redux";
import color from "./color";
import topNews from "./topNews";
import recentNews from "./recentNews";
import jobs from "./jobs";
import profile from "./profile";
import show from "./show";
import reply from "./reply";

const reducer = combineReducers({
  color,
  topNews,
  recentNews,
  jobs,
  profile,
  show,
  reply,
});

export default reducer;

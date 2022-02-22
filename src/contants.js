export const SELECTED_NAV = {
  HACKER_NEWS: "hacker news",
  SHOW: "show",
  ASK: "ask",
  JOBS: "jobs",
  PROFILE: "profile",
  COMMENTS: "comments",
  ABOUT: "about",
  isClose: (str) => {
    switch (str) {
      case "hacker news":
      case "show":
      case "ask":
      case "jobs":
      case "profile":
      case "about":
        return true;
      case "comments":
      default:
        return false;
    }
  },
};

export const READ_ONE_PAGE = 10;

export const HEIGHT = {
  TOTAL: 844,
  HEADER: 144,
  FOOTER: 30,
  NEWS_SWITCH: 93,
  DEFAULT_MARGIN: 40,
};

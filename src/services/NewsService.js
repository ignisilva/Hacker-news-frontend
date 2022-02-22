import { READ_ONE_PAGE } from "../constants";
import CommonService from "./CommonService";

const TOP_API_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const NEW_API_URL = "https://hacker-news.firebaseio.com/v0/newstories.json";

export default class NewsService {
  static getTopUrl() {
    return TOP_API_URL;
  }

  static getRecentUrl() {
    return NEW_API_URL;
  }

  static async getNewsFirst(newsIds) {
    try {
      const news = [];
      for (let i = 0; i < READ_ONE_PAGE; i++) {
        const newNews = await CommonService.getItem(newsIds[i]);
        news.push(newNews);
      }

      return {
        lastIndex: news.length,
        ids: newsIds,
        news,
      };
    } catch (error) {
      new Error(error);
    }
  }

  static async getNewsMore(prevState) {
    try {
      const { lastIndex, ids, news } = prevState;
      if (lastIndex === ids.length) {
        return prevState;
      }
      for (let i = lastIndex; i < lastIndex + READ_ONE_PAGE; i++) {
        if (!ids[i]) break;
        const newNews = await CommonService.getItem(ids[i]);
        news.push(newNews);
      }
      return {
        lastIndex: news.length,
        ids,
        news,
      };
    } catch (error) {
      new Error(error);
    }
  }
}

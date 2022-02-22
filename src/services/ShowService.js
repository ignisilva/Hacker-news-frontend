import { READ_ONE_PAGE } from "../constants";
import CommonService from "./CommonService";

const SHOW_API_URL = "https://hacker-news.firebaseio.com/v0/showstories.json";

export default class ShowService {
  static getShowUrl() {
    return SHOW_API_URL;
  }

  static async getShowFirst(ids) {
    try {
      const datas = [];
      for (let i = 0; i < READ_ONE_PAGE; i++) {
        const newData = await CommonService.getItem(ids[i]);
        datas.push(newData);
      }
      return {
        lastIndex: datas.length,
        ids,
        datas,
      };
    } catch (error) {
      new Error(error);
    }
  }

  static async getShowMore(prevState) {
    try {
      const { lastIndex, ids, datas } = prevState;
      if (lastIndex === ids.length) {
        return prevState;
      }
      for (let i = lastIndex; i < lastIndex + READ_ONE_PAGE; i++) {
        if (!ids[i]) break;
        const newData = await CommonService.getItem(ids[i]);
        datas.push(newData);
      }
      return {
        lastIndex: datas.length,
        ids,
        datas,
      };
    } catch (error) {
      new Error(error);
    }
  }
}

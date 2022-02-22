import axios from "axios";

const ITEM_API_URL = "https://hacker-news.firebaseio.com/v0/item/:id.json";
const USER_API_URL = "https://hacker-news.firebaseio.com/v0/user/:id.json";

export default class CommonService {
  static async getItem(id) {
    try {
      const url = ITEM_API_URL.replace(":id", id);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      new Error(error);
    }
  }

  static async getUser(id) {
    try {
      const url = USER_API_URL.replace(":id", id);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      new Error(error);
    }
  }

  static async getIds(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      new Error(error);
    }
  }
}

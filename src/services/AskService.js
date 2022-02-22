import axios from "axios";

const ASK_API_URL = "https://hacker-news.firebaseio.com/v0/askstories.json";

export default class AskService {
  static async getIds() {
    try {
      const response = await axios.get(ASK_API_URL);
      return response.data;
    } catch (error) {
      new Error(error);
    }
  }
}

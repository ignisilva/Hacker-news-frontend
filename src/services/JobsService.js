import { READ_ONE_PAGE } from "../constants";
import CommonService from "./CommonService";

const JOB_API_URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";

export default class JobsService {
  static getJobUrl() {
    return JOB_API_URL;
  }

  static async getJobsFirst(jobsIds) {
    try {
      const datas = [];
      for (let i = 0; i < READ_ONE_PAGE; i++) {
        const newJobs = await CommonService.getItem(jobsIds[i]);
        datas.push(newJobs);
      }
      return {
        lastIndex: datas.length,
        ids: jobsIds,
        datas,
      };
    } catch (error) {
      new Error(error);
    }
  }

  static async getJobsMore(prevState) {
    try {
      const { lastIndex, ids, datas } = prevState;
      if (lastIndex === ids.length) {
        return prevState;
      }
      for (let i = lastIndex; i < lastIndex + READ_ONE_PAGE; i++) {
        if (!ids[i]) break;
        const newJobs = await CommonService.getItem(ids[i]);
        datas.push(newJobs);
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

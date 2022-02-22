import CommonService from "./CommonService";

export default class ReplyService {
  static async getReplyFirst(main) {
    try {
      const { kids } = main;
      const datas = [];

      const item = await CommonService.getItem(kids[0]);
      const data = {
        id: item.id,
        author: item.by,
        timeAgo: item.time,
        text: item.text,
        kids: [],
      };

      for (let j = 0; j < item.kids?.length; j++) {
        const kidItem = await CommonService.getItem(item.kids[j]);
        const kidData = {
          id: kidItem.id,
          author: kidItem.by,
          timeAgo: kidItem.time,
          text: kidItem.text,
        };
        data.kids.push(kidData);
      }
      datas.push(data);

      return {
        lastIndex: datas.length - 1,
        main,
        datas,
      };
    } catch (error) {
      new Error(error);
    }
  }

  static async getReplyMore(prevState) {
    try {
      const { lastIndex, main, datas } = prevState;
      if (lastIndex === main.kids.length) {
        return prevState;
      }

      const item = await CommonService.getItem(main.kids[lastIndex]);
      const data = {
        id: item.id,
        author: item.by,
        timeAgo: item.time,
        text: item.text,
        kids: [],
      };

      for (let j = 0; j < item.kids?.length; j++) {
        if (!item.kids[j]) break;
        const kidItem = await CommonService.getItem(item.kids[j]);
        const kidData = {
          id: kidItem.id,
          author: kidItem.by,
          timeAgo: kidItem.time,
          text: kidItem.text,
        };
        data.kids.push(kidData);
      }
      datas.push(data);

      return {
        lastIndex: datas.length - 1,
        main,
        datas,
      };
    } catch (error) {
      new Error(error);
    }
  }
}

// 文章相关的api都封装到这个模块

import request from '@/utils/request.js'

// 向外导出api函数
export const getArticleListAPI = function (_page, _limit) {
  return request.get("/articles", {
    // get方法传参数
    params: {
      _page,
      _limit,
    },
  });
}
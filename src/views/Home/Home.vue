<template>
  <div class="home-container">
    <van-nav-bar title="头条新闻" fixed placeholder />
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="想看更多关注毅哥"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :comments="item.comm_count"
          :pubdate="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from "@/api/articleAPI.js";
import ArticleInfo from "@/components/Article/articleInfo.vue";
export default {
  name: "Home",
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少数据
      limit: 10,
      artlist: [],
      list: [],
      loading: true,
      finished: false,
      isLoading: false,
    };
  },
  components: {
    ArticleInfo,
  },
  created() {
    this.initArticleList();
  },
  methods: {
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit);

      if (isRefresh) {
        this.artlist = [...res, ...this.artlist];
        this.isLoading = false;
      } else {
        // 上拉加载
        this.artlist = [...this.artlist, ...res];
        this.loading = false;
      }

      if (res.length === 0) {
        // 没有下一页数据了，停止刷新请求数据
        this.finished = true;
        // alert("没有更多新闻了");
      }
    },
    onLoad() {
      // console.log("触发了一次");
      this.page++;
      this.initArticleList();
    },
    onRefresh() {
      // console.log("触发了下拉刷新");
      this.page++;
      this.initArticleList(true);
    },
  },
};
</script>

<style lang='less' scoped>
.home-container {
  /deep/ .van-nav-bar {
    background-color: blue;
  }
  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>
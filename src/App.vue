<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- 底栏 -->
    <van-tabbar route placeholder>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>

      <van-tabbar-item icon="user-o" @click="goto">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goto() {
      const token = localStorage.getItem("token");
      if (token) {
        this.$router.push("/user");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang='less' scoped>
</style>
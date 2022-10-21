<template>
  <div class="login-container">
    <div class="getusername">
      <van-cell-group>
        <van-field v-model="value1" label="账号" placeholder="请输入账号" />
        <van-field
          v-model.trim="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <div class="loginbtn">
      <van-button plain type="info" @click="mylogin">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      value1: "",
      password: "",
    };
  },
  methods: {
    mylogin() {
      if (this.value1 === "admin" && this.password === "123456") {
        localStorage.setItem("token", "Bearer xxxx");
        this.$router.push("/user");
      } else {
        localStorage.removeItem("token");
        alert("登录失败，用户名或密码输入错误");
      }
    },
  },
};
</script>

<style lang='less' scoped>
.login-container {
  position: relative;
  top: 50px;

  /deep/.van-cell {
    line-height: 65px;
  }
  .loginbtn {
    position: relative;
    left: 110px;
    top: 50px;

    /deep/.van-button {
      width: 150px;
    }
  }
}
</style>
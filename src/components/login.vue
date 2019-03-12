/**
    注册页面
 */
 
<template>
  <div class="login-container">
    <img src="../assets/imgs/login.png" class="login-img">
    <div class="input" v-if="username ==''">
      <img src="../assets/imgs/phonesmall.png" class="icon">
      <input
        type="text"
        placeholder="请输入用户名"
        placeholder-style="font-size:25px;"
        class="dec"
        @click="bindPhoneInput"
      >
      {{bindPhoneValue}}
    </div>

    <div class="input" v-else>
      <img src="../assets/imgs/phonesmall.png" class="icon">
      <div class="username_keep notUsername" @click="testHidden">{{username}}</div>
      <input
        type="text"
        placeholder="请输入用户名"
        placeholder-style="font-size:25px;"
        class="dec"
        @click="bindRePhoneInput"
      >
      {{bindRePhoneValue}}
    </div>

    <div class="input input2">
      <img src="../assets/imgs/password.png" class="icon1">
      <input
        type="password"
        placeholder="请输入密码"
        placeholder-style="font-size:25px;"
        class="dec"
        @click="bindNumberInput"
      >
      {{bindNumberValue}}
    </div>
    <button class="login" @click="login">登录</button>
    <button class="join" @click="getAuthent">申请合作</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bindPhoneValue: "",
      bindRePhoneValue: "", //用户重复选择输入
      bindNumberValue: "",
      id: "",
      loginName: "",
      username: "", //保存的用户名
      source: "",
      userType: "",
      openId: "",
      storeId: "",
      storeName: "",
      usernameHidden: false //用户名输入框隐藏与显示
    };
  },
  methods: {
    bindPhoneInput: function(e) {
      //用户第一次输入
      var that = this;
      var bindPhoneValue = e.target.value;
      console.log(bindPhoneValue + "1111111111111111111");
      that.bindPhoneValue = bindPhoneValue;
    },
    testHidden: function() {
      this.usernameHidden = true;
    },
    login: function() {
      this.$router.push({ path:'/index'})
    }
  }
};
</script>

<style lang="scss">
@import "../style/common.scss";
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-img {
  margin-top: pxChangeRem(80);
  // margin-bottom: pxChangeRem(40);
  width: pxChangeRem(195);
  height: pxChangeRem(195);
}
.input {
  display: flex;
  flex-direction: row;
  margin-left: pxChangeRem(20);
  align-items: center;
  margin-top: pxChangeRem(150);
  width: 80%;
  height: pxChangeRem(100);
  font-size: pxChangeRem(32);
  border: 1px solid #f2f2f2;
  border-radius: 5px;
}
.input2{
  margin-top:pxChangeRem(42);
}
.username_keep {
  margin-left: pxChangeRem(30);
  width: 80%;
  font-size: pxChangeRem(30);
}
.login {
  margin-top: pxChangeRem(150);
  width: 80%;
  height: pxChangeRem(80);
  line-height: pxChangeRem(80);
  color: #fff;
  background-color: rgb(96, 189, 38);
  border-radius: 5px;
  border: none;
  font-size: pxChangeRem(28);
}
.login:after {
  border: none;
}
.join {
  margin-top: pxChangeRem(40);
  width: 80%;
  height: pxChangeRem(80);
  color: rgb(144, 210, 103);
  line-height: pxChangeRem(80);
  background-color: rgb(229, 245, 220);
  border-radius: 5px;
  border: none;
  font-size: pxChangeRem(28);
}
.join:after {
  border: none;
}
.password-keep {
  display: flex;
  flex-direction: row;
}
.password-area {
  position: absolute;
  left: pxChangeRem(80);
}
.password {
  margin-top: pxChangeRem(40);
  font-size: pxChangeRem(30);
  color: #cfcfcf;
}
.login-liji {
  position: absolute;
  right: pxChangeRem(50);
  margin-top: pxChangeRem(10);
  font-size: pxChangeRem(30);
  color: #cfcfcf;
}
.icon {
  margin-left: pxChangeRem(50);
  width: pxChangeRem(40);
  height: pxChangeRem(50);
}
.icon1 {
  width: pxChangeRem(40);
  height: pxChangeRem(50);
  margin-left: pxChangeRem(50);
}
.dec {
  margin-left: pxChangeRem(10);
  padding-left: pxChangeRem(20);
}
.success {
  padding-top: pxChangeRem(10);
}
.notUsername {
  width: 80%;
  padding-left: pxChangeRem(40);
}
</style>

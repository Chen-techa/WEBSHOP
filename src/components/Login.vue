<template>
  <div class="big">
    <div class="logins">
      <h1 style="margin-top: 0px">商城后台</h1>
      <el-form ref="form" :rules="rules" v-bind:model="userLogin">
        <div class="form">
          <el-form-item prop="username">
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-message"
                v-model="userLogin.username"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                placeholder="请输入密码"
                show-password
                prefix-icon="el-icon-lock"
                v-on:keyup.enter.native="loginpost"
                v-model="userLogin.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
                class="btnok"
                type="primary"
                @click="loginpost"
                :plain="true"
            >登录
            </el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLogin: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {required: true, message: "请输入用户名", trigger: "blur"},
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginpost() {
      this.$http.post("user/userLogin", this.userLogin).then((res) => {
        if (res.data.meta.msg === "登录成功") {
          this.$message({
            showClose: true,
            message: "恭喜你，登陆成功",
            type: "success",
          });
          this.$router.push("/welcome/goods");
        } else {
          this.$message({
            showClose: true,
            message: "登录失败",
            type: "warning",
          });
        }
      });
    },
  }
};
</script>

<style scoped>
.big {
  height: 100%;
  background: url(../assets/4.jpg) center center / cover;
}

.form {
  width: 350px;
  margin: auto;
}

.logins {
  background: rgba(255, 255, 255, 0.7);
  text-align: center;
  width: 500px;
  height: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
}

.btnok {
  float: left;
}
</style>

<template>
  <div class="Login_Container">
    <!-- 登录头部 -->
    <el-header>
      <el-row :gutter="10" class="Login_Sigin">
        <el-col :span="1">
          <el-link @click="Login">登录</el-link>
        </el-col>
        <el-col :span="1">
          <el-link @click="SginIn">注册</el-link>
        </el-col>
      </el-row>
    </el-header>
    <hr />
    <div class="Search">
      <el-row class="Login_S">
        <el-col :span="4">
          <h3>WEB软件应用开发</h3>
        </el-col>
        <el-col :span="6">
          <el-col :span="16">
            <el-input
              placeholder="请输入搜索内容"
              prefix-icon="el-icon-search"
            ></el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary">搜索</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <!-- 巨幕 -->
    <div class="Huge">
      <el-col>
        <p class="Login_text">用户登录</p>
        <p>首页 <span class="a">>登录</span></p>
      </el-col>
    </div>
    <el-container>
      <!-- 登录图片 -->
      <el-aside width="50%">
        <div class="Login_Img">
          <img src="../assets/img/LoginImg.png" alt="LoginImg" width="85%" />
        </div>
      </el-aside>
      <!-- 登录组件 -->
      <el-main>
        <h4>登录</h4>
        <el-form class="Login_In" :model="LoginBefor" :rules="Login_rules">
          <el-form-item prop="username">
            <el-input
              placeholder="请输入手机号"
              v-model="LoginBefor.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              show-password
              v-model="LoginBefor.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-circle-check"
              class="Login_btn"
              @click="Login_btn"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoginBefor: {
        username: "root",
        password: "root",
      },
      Login_rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "手机号长的应该为11位数字",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
          {
            min: 6,
            max: 11,
            message: "密码的最小长度是6位数字，最大长度12位数字",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    Login_btn() {
      let a = this.$http.post("user/userLogin", this.LoginBefor);
      a.then((res) => {
        if (res.data.meta.code == 200) {
          this.$message({
            showClose: true,
            message: "恭喜你，登陆成功",
            type: "success",
          });
          this.$router.push("/home");
          console.log(res.data);
          window.sessionStorage.setItem('flag','true');
          window.sessionStorage.setItem('username',res.data.data.nickname);
          // window.sessionStorage.setItem("username",username)
          
        } else {
          this.$message({
            showClose: true,
            message: "登陆失败",
            type: "warning",
          });
        }
      });
    },
    Login() {
      this.$router.push("/LoginBefor");
    },
    SginIn() {
      this.$router.push("/Sigin");
    },
  },
};
</script>

<style scoped>
.a {
  color: gray;
}
hr {
  color: black;
}
template {
  height: 100%;
}
.Login_Sigin {
  left: 90%;
  width: 100%;
}
.el-header,
.el-main,
.el-aside {
  background-color: white;
}
.Login_S {
  width: 100%;
}
.Search {
  width: 100%;
  margin-left: 25%;
}
.Huge {
  width: 100%;
  height: 150px;
  background-color: #b3c0d1;
}
.Login_text {
  font-size: 30px;
  padding: 0;
}
.Huge > .el-col {
  padding-left: 26%;
}
.Login_Img {
  padding-left: 40%;
}
.Login_In {
  width: 35%;
}
.Login_btn {
  width: 100%;
}
</style>
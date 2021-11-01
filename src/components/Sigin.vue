<template>
  <div class="Sigin_view">
    <el-container>
      <el-header>
        <div class="Sigin_Header">
          <div class="Login_Sginin">
            <el-row :gutter="60">
              <el-col :span="1">
                <el-menu mode="horizontal">
                  <el-menu-item index="1">
                    <el-link href="/loginBefore">登录</el-link>
                  </el-menu-item>
                </el-menu>
              </el-col>
              <el-col :span="1">
                <el-menu mode="horizontal">
                  <el-menu-item index="1">
                    <el-link href="/Sigin">注册</el-link>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </div>
        <hr />
        <div class="Sigin_Search">
          <el-row>
            <el-col :span="4">
              <img src="../assets/images/logo.png" alt="logo" />
            </el-col>
            <el-col :span="8">
              <el-input
                placeholder="请输入搜索内容"
                prefix-icon="el-icon-search"
                class="Search_Input"
              ></el-input>
              <el-button type="primary">搜索</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="Login_Tabs">
          <div class="Tabs_group">
            <p class="User_Login">用户登录</p>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>注册</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="30%" class="asideImg">
          <img src="../assets/images/Loginlogo.png" alt="登录图片" />
        </el-aside>
        <el-main width="50%">
          <div class="Login_Group">
            <h4>注册</h4>
            <el-form :rules="SiginRules" :model="SiginFrom">
              <el-form-item prop="phone">
                <el-input
                  placeholder="手机号"
                  v-model="SiginFrom.username"
                  class="tel"
                ></el-input
                ><el-button @click="aotucode">发送</el-button>
              </el-form-item>
              <el-form-item prop="authcode">
                <el-input
                  placeholder="验证码"
                  v-model="SiginFrom.authcode"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  placeholder="密码"
                  v-model="SiginFrom.password"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item prop="confirmpwd">
                <el-input
                  placeholder="确认密码"
                  v-model="SiginFrom.confirmpwd"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  icon="el-icon-circle-check"
                  type="primary"
                  class="btn_Sigin"
                  @click="Sigin"
                  >立即注册</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SiginFrom: {
        username: "",
        password: "",
        phone: "13313131313",
      },
      SiginRules: {
        tel: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur",
          },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "密码的长度在6-12位数字之间",
          },
        ],
        confirmpwd: [
          {
            required: true,
            message: "请再次输入密码",
            trigger: "blur",
          },
        ],
        authcode: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    Sigin() {
      if (this.SiginFrom.authcode == "123456") {
        if (this.SiginFrom.password == this.SiginFrom.confirmpwd) {
          this.$http.post("user/userRegister", this.SiginFrom).then((res) => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: "注册成功",
                type: "success",
              });
              this.$router.push("/loginBefore");
            } else {
              this.$message({
                showClose: true,
                message: "注册失败",
                type: "warning",
              });
            }
          });
          console.log(this.SiginFrom);
        }
      }
    },
    aotucode() {
      this.$message({
        showClose: true,
        message: "验证码是：123456",
      });
    },
  },
};
</script>

<style scope>
.Login_Sginin {
  margin-left: 90%;
}
.Search_Input {
  width: 80%;
}
.Sigin_Search {
  margin-left: 15%;
}
.Tabs_group {
  margin-left: 16%;
}
.Login_Tabs {
  background-color: rgb(227, 233, 233);
  margin: 1%;
  height: 100px;
}
.User_Login {
  font-size: 25px;
}
.asideImg {
  margin-top: 15%;
  margin-left: 15%;
}
.Login_Group {
  margin-top: 25%;
  width: 45%;
}
.btn_Sigin {
  width: 100%;
}
.tel {
  width: 80%;
}
</style>
<template>
  <el-container style="height: 100%">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img
          src="../assets/标头.gif"
          class="logo"
          :width="isCollapse ? '64px' : '200px'"
          :opacity="isCollapse ? '0' : '0.5'"
        />
        <el-button class="toggle-button" @click="toggle"><span class="el-icon-s-fold"></span></el-button>
      </div>
      <el-popover placement="bottom" width="300" trigger="click">
        <el-card>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />

          <div class="bottom clearfix">
            <el-button @click="outWelcome" type="info">退出</el-button>
          </div>
        </el-card>

        <el-button slot="reference" class="admin"
          ><el-avatar>user</el-avatar>admin</el-button
        >
      </el-popover>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container style="margin: 0;height: 100%">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="rgb(142,173,202)"
          active-text-color="white"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-grape"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/welcome/category">商品分类管理</el-menu-item>
            <el-menu-item index="/welcome/goods">商品详情管理</el-menu-item>
            <el-menu-item index="1-3">商品规格管理</el-menu-item>
            <el-menu-item index="1-4">商品评论管理</el-menu-item>
            <el-menu-item index="1-5">商品品牌管理</el-menu-item>
          </el-submenu>
        </el-menu></el-aside
      >
      <!-- 右侧内容主体 -->
      <el-main style="height: 100%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {},
  methods: {
    //点击按钮切换菜单的折叠与展开
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    outWelcome() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.big {
  height: 100%;
}
.el-header {
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  background: rgba(68, 134, 196);
}
.el-header > div {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
.admin {
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
}
.admin:hover {
  background: rgb(49, 91, 129);
}

.logo {
  margin-right: 30px;
  height: 59px;
}
.el-popover > .el-card {
  text-align: right;
}
.el.avatar {
  margin-left: 10px;
}
.el-aside {
  background: #333744;
}
.el-main {
  background: #eaedf1;
}
.toggle-button {
  /* align-items: center; */
  background-color: rgba(68, 134, 196);
  color: white;
  height: 60px;
}
</style>
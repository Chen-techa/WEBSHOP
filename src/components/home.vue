<template>
  <div class="Header_View">
    <!-- 头布局 -->
    <div class="Header_top">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="one"></div>
        </el-col>
        <el-col :span="6">
          <div class="one"></div>
        </el-col>
        <el-col :span="5">
          <div class="one"></div>
        </el-col>
        <el-col :span="6">
          <el-col :span="6">
            <div class="one"></div>
          </el-col>
          <el-col :span="6">
            <div class="one"></div>
          </el-col>
          <el-col :span="6" style="text-align: center">
            <el-link
                @click="Login_view"
                v-if="flag == 'flase' || flag == undefined"
            >登录
            </el-link
            >
            <el-link @click="Login_one" v-else class="welcome"
            >欢迎{{ username }}
            </el-link>
          </el-col>
          <el-col :span="6">
            <el-link
                @click="SignIn_view"
                v-if="flag == 'flase' || flag == undefined"
            >注册
            </el-link
            >
            <el-menu v-else mode="horizontal">
              <el-submenu index="1">
                <template slot="title">会员中心</template>
                <el-menu-item index="2-1" @click="Order_view"
                >订单历史
                </el-menu-item
                >
                <el-menu-item index="2-1" @click="Topup_view"
                >充值
                </el-menu-item
                >
                <el-menu-item index="2-2" @click="Outstanding_view"
                >未支付订单
                </el-menu-item
                >
                <el-menu-item index="2-3" @click="LoginOut_view"
                >退出
                </el-menu-item
                >
              </el-submenu>
            </el-menu>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <hr/>
    <div class="Header_search">
      <el-row>
        <el-col :span="4">
          <div class="two"></div>
        </el-col>
        <el-col :span="4">
          <div class="ImgLogo">
            <h4>WEB应用软件开发</h4>
          </div>
        </el-col>
        <el-col :span="10">
          <el-col :span="12">
            <el-input
                placeholder="请输入搜索内容"
                prefix-icon="el-icon-search"
            ></el-input>
          </el-col>
          <el-col :span="5">
            <el-button type="primary">搜索</el-button>
          </el-col>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
    <hr/>
    <!-- 轮播 -->
    <div class="Header_shuffling" style="margin-left: 200px">
      <el-carousel :interval="4000" indicator-position="outside">
        <el-carousel-item v-for="item in imagesBox" :key="item.id">
          <img :src="item.idView" alt="img" class="imagescar"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--内容布局 -->
    <div class="Header_content">
      <el-container>
        <el-aside width="20%" style="border-right: 1px solid gray">
          <ul style="list-style: none">
            <li
                v-for="(val, idx) in categoryData"
                :key="idx"
                :data-id="val.id"
                style="margin-top: 15px; margin-bottom: 15px"
            >
              <a class="el-icon-location" @click="Item_id(val.id, val.name)">{{
                  val.name
                }}</a>
            </li>
          </ul>
        </el-aside>
        <el-main width="50%">
          <ul style="list-style: none">
            <li v-for="(v, k, idx) in dataList" :key="idx">
              {{ k }}
              <ul style="list-style: none" class="Connent_">
                <li
                    v-for="(v1, idx) in v.datas"
                    :key="idx"
                    style="margin-top:55px;margin-bottom:55px;"
                >
                  <div>
                    <img
                        :src="'http://10.10.102.92/' + v1.img"
                        alt=""
                        width="70%"
                        height="45%"
                        class="Connte_img"
                        @click="img_jump"
                    />
                  </div>
                  <p class="Conntent_text">
                    {{ v1.productName }}
                    <span class="bazaarPrice">￥{{ v1.bazaarPrice }}</span>
                    <span class="insidePrice">￥{{ v1.insidePrice }}</span>
                  </p>
                  <p class="Price"></p>
                </li>
              </ul>
            </li>
          </ul>
        </el-main>
      </el-container>
    </div>
    <!-- 脚步布局 -->
    <div class="Home_foot">
      <el-footer>
        <p class="Foot_text">全国高职院校Web应用软件开发技能竞赛</p>
      </el-footer>
    </div>
    <!-- <button @click="showdata">点击</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: "false",
      imagesBox: [
        {id: 0, idView: require("../assets/img/logo.png")},
        {id: 1, idView: require("../assets/img/logo.png")},
        {id: 2, idView: require("../assets/img/logo.png")},
        {id: 3, idView: require("../assets/img/logo.png")},
      ],
      username: "",
      categoryData: [],
      dataList: {},
      loginusername: "",
    };
  },

  methods: {
    LoginOut_view() {
      this.$router.push("/LoginBefore");
    },
    SignIn_view() {
      this.$router.push("/Sigin");
    },
    Login_view() {
      this.$router.push("/LoginBefore");
    },
    Item_id(id, name) {
      this.dataList = {};
      this.$http
          .get("product/getProductByCategory?category=" + id)
          .then((res) => {
            // console.log(res.data.datas);
            this.$set(this.dataList, name, res.data);
            // this.dataList[name] = res.data;
            // console.log(this.dataList);
          });
    },
    img_jump() {
      window.open("http://www.baidu.com");
    },
    Order_view() {
      this.$router.push("/Order");
    },
    Topup_view() {
      this.$router.push("/Order");
    },
    Outstanding_view() {
      this.$router.push("/Order");
    },
  },
  mounted() {
    this.flag = window.sessionStorage.getItem("flag");
    this.username = window.sessionStorage.getItem("username");
    this.$http.get("product/getCategory").then((res) => {
      // 首次请求获取到分类信息
      this.categoryData = res.data;
      let category = this.categoryData.map((val) => {
        return val.name;
      });
      // 循环获取各分类下的商品信息
      let promisesCollection = [];
      for (let item of this.categoryData) {
        promisesCollection.push(
            this.$http.get("product/getProductByCategory?category=" + item.id)
        );
      }
      Promise.all(promisesCollection).then((results) => {
        for (let item1 in results) {
          this.$set(this.dataList, category[item1], results[item1].data);
        }
      });
    });
  },
};
</script>


<style scope>
.Connent_ {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.Connent_ li {
  width: 25%;
}

.Connte_img {
  border: 1px solid rgb(141, 137, 137);
}

.el-row {
  margin: 25px;
}

.home-container > .header {
  margin: 15px;
}

.home-container > .header > .link {
  padding: 15px;
  left: 80%;
}

.home-container > h2 {
  padding-left: 350px;
}

.one,
.two {
  padding: 10px;
}

hr {
  color: whitesmoke;
}

.Foot_text {
  color: rgba(192, 201, 199, 0.918);
}

.Home_foot {
  height: 100px;
  width: 100%;
  line-height: 100px;
  text-align: center;
  background-color: rgba(68, 68, 68);
}

.bazaarPrice {
  color: gray;
  text-decoration-line: line-through;
  padding-right: 10%;
}

.insidePrice {
  color: black;
  font-size: 20px;
}

.Conntent_text {
  width: 70%;
}

.welcome {
  margin-top: 23px;
}
</style>
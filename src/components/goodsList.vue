<template>
  <div class="big">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      :label-position="labelPosition"
      label-width="80px"
    >
      <el-row>
        <el-col :span="11">
          <el-form-item label="商品名">
            <el-input
              v-model="formInline.productName" placeholder="商品名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="商品分类">
            <el-select v-model="formInline.category" placeholder="商品分类">
              <el-option :label="item.name" :value="item.id"  v-for="(item,idx) in categorylist" :key="idx"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="热门商品">
            <el-radio-group v-model="formInline.isHot">
              <el-radio label="0">非热门商品</el-radio>
              <el-radio label="1">热门商品</el-radio>
              <el-radio label="2">全部</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="状态">
              <el-option label="全部" value="2"></el-option>
              <el-option label="已上架" value="1" ></el-option>
              <el-option label="已下架" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="select" >搜索</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <el-card class="box-card">
        <el-button type="primary" class="add" @click="add">添加产品</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="productName" label="商品名" width="150">
        </el-table-column>
        <el-table-column prop="name" label="商品分类" width="120">
        </el-table-column>
        <el-table-column prop="introduction" label="商品概要说明" width="120">
        </el-table-column>
        <el-table-column prop="insidePrice" label="店内价格" width="80">
        </el-table-column>
        <el-table-column prop="bazaarPrice" label="市场价格" width="80">
        </el-table-column>
        <el-table-column prop="number" label="数量" width="80">
        </el-table-column>
        <el-table-column prop="isHotProduct" label="热门商品" width="114">
        </el-table-column>
        <el-table-column prop="isPutaway" label="状态" width="120">
        </el-table-column>
        <el-table-column prop="updated_at" label="更新时间" width="120">
        </el-table-column>
        <el-table-column prop="update_user" label="更新者" width="120">
        </el-table-column>
        <el-table-column label="操作" width="115">
          <template>
            <el-button type="text"  @click="update">编辑</el-button>
            <el-button type="text" >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row>
        <el-col :span="24">
          <el-pagination
            @current-change="handelCurrentChange"
            :current-page="queryInfo.pagenum"
            background
            :page-size="10"
            layout="prev, pager, next "
            :total="89"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      radio: 3,
      formInline: {
      },
      tableData: [],
     categorylist:[],
      queryInfo:{
        query:'',
        //当前的页数
        pagenum:1,
        //当前每页显示多少条数据
        pagesize:10
      },
    };
  },
  created() {
    this.$http.get("product/getProduct?page=1").then((res) => {
      // console.log(res.data);
      this.tableData = res.data.datas;
    });

     this.$http.get("product/getCategory").then((res)=>{
      this.categorylist=res.data;
      // console.log(this.categorylist);
     })
  },
  methods: {
    //监听页码值改变的事件
    handelCurrentChange(newPage) {
      console.log(newPage);
      this.tableData.splice(0,this.tableData.length);
      this.$http.get("product/getProduct?page="+newPage).then((res) => {
      this.tableData = res.data.datas;
    });
    },
    select(){
       this.$http.post("product/searchProductList",this.formInline).then((res)=>{
      //  console.log(res.data);
       this.tableData.splice(0,this.tableData.length);
       this.tableData=res.data;
     })
    },
    add(){
        window.sessionStorage.clear();
        this.$router.push("/add");
    },
    update(){
        window.sessionStorage.clear();
       this.$router.push("/update");
    }
  },
};
</script>

<style scoped>
.el-pagination {
  text-align: center;
}
.add{
  float: right;
}
.add:hover{
   background-color: aliceblue;
   color: black;
}
</style>
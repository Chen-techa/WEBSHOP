<template>
  <div class="big">
    <el-form
        :inline="true"
        :model="category"
        class="demo-form-inline"
        :label-position="labelPosition"
        label-width="80px"
    >
      <el-row>
        <el-col :span="11">
          <el-form-item label="分类名称">
            <el-input v-model="category.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="分类描述">
            <el-input v-model="category.brief"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-divider></el-divider>
    <el-card class="box-card">
      <el-button type="primary" class="add" @click="addCategory">+添加类别</el-button>
      <el-table :data="categoryList" border>
        <el-table-column prop="name" label="名称" width="330">
        </el-table-column>
        <el-table-column prop="brief" label="描述" width="420">
        </el-table-column>
        <el-table-column prop="img" label="预览图" width="240">
        </el-table-column>
        <el-table-column label="操作" width="280">
          <template>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row>
        <el-col :span="24">
          <el-pagination
              :current-page="queryInfo.pagenum"
              background
              :page-size="7"
              layout="prev, pager, next "
              :total="7"
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
      category: {},
      categoryList: [],
      queryInfo: {
        query: '',
        //当前的页数
        pageNum: 1,
        //当前每页显示多少条数据
        pageSize: 5
      },
    };
  },
  created() {
    this.$http.get("product/getCategory").then((res) => {
      this.categoryList = res.data;
    })
  },
  methods: {
    addCategory() {
      this.$router.push("/welcome/Category/addCategory");
    },
  },
};
</script>

<style scoped>
.el-pagination {
  text-align: center;
}

.add:hover {
  background-color: aliceblue;
  color: black;
}

.el-table{
  margin: 0;
  text-align: center;
}
</style>
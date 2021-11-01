<template>
  <el-card>
    <h4>商品分类添加</h4>
    <el-divider></el-divider>
    <el-container>
      <el-form :inline="true" :model="addForm">
        <el-row>
          <el-col :span="24">
            <el-form-item label="商品名称:">
              <el-input v-model="addForm.categoryName" size="large"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="图片上传:">
              <el-upload
                  class="avatar-uploader"
                  action="http://10.10.102.92/api/product/uploadCategoryImg"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="描述:">
              <ueditor :config="myConfig" v-model="addForm.categoryDescription"></ueditor>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="submitInfo">提交</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-container>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      addForm: {
        categoryName:'',
        categoryDescription:'',
        imgName:''
      },
      myConfig: {
        //编辑器不自动被内容撑高
        autoHeightEnabled: false,
        //初始容器高度
        initialFrameHeight: 200,
        //初始容器宽度
        initialFrameWidth: '100%',
        //上传文件接口
        serverUrl: '',
        //UEditor 资源文件的存放路径
        UEDITOR_HOME_URL: '/UEditor/'
      },
      imageUrl:'',
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.addForm.imgName = file.name;
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitInfo(){
      this.$http.post('/product/addCategory',this.addForm).then((data)=>{
        console.log(data.data);
      });
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
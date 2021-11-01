<template>
    <el-card>
    <h4>商品添加</h4>
    <el-divider></el-divider>
    <el-container>
      <el-form :inline="true" :label-position="labelPosition" :model="Addform">
        <el-row>
          <el-col :span="24">
            <el-form-item label="商品名称:">
              <el-input v-model="Addform.productName" size="large"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="商品外部编码:">
              <el-input v-model="Addform.ma"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属分类:">
              <el-select v-model="Addform.lei">
                <el-option value="水果类">水果类</el-option>
                <el-option value="蔬菜类">蔬菜类</el-option>
                <el-option value="水果类">水果类</el-option>
                <el-option value="男装">男装</el-option>
                <el-option value="家居">家居</el-option>
                <el-option value="电子类">电子类</el-option>
                <el-option value="鞋子">鞋子</el-option>
                <el-option value="化妆品">化妆品</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="所属品牌:">
              <el-select v-model="Addform.pai">
                <el-option value="海尔">海尔</el-option>
                <el-option value="乐视">乐视</el-option>
                <el-option value="小米">小米</el-option>
                <el-option value="OPPO">OPPO</el-option>
                <el-option value="戴尔">戴尔</el-option>
                <el-option value="百雀羚">百雀羚</el-option>
                <el-option value="格力">格力</el-option>
                <el-option value="fds">fds</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="市场价格:">
              <el-input v-model="Addform.price"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="店内价格:">
              <el-input v-model="Addform.shopprice"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="商品库存:">
              <el-input v-model="Addform.number"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="商品库存:">
              <el-radio-group v-model="Addform.number">
                <el-radio label="0">是</el-radio>
                <el-radio label="1">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="是否热销:">
              <el-radio-group v-model="Addform.isHot">
                <el-radio label="0">热门商品</el-radio>
                <el-radio label="1">非热门商品</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="上下架状态">
              <el-select v-model="Addform.status" placeholder="状态">
                <el-option label="上架" value="1"></el-option>
                <el-option label="下架" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="产品概要说明:">
              <el-input v-model="Addform.summary"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="图片上传:">
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{ file }">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  />
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="24">
            <el-form-item label="描述:">
           <!-- <vue-ueditor-warp v-model="content" :config="myconfig"> </vue-ueditor-warp> -->
           <ueditor :config="myconfig" v-model="content"> </ueditor>
            </el-form-item>
          </el-col>
        </el-row>
           <el-row>
          <el-col :span="24">
        <el-button type="primary">提交</el-button>
          </el-col>
          </el-row>
      </el-form>
    </el-container>
    </el-card>
</template>

<script>
export default {
  // name:'ueditor',
  // components:{
  //    ueditor
  // },
  data() {
    return {
      labelPosition: "right",
      Addform: {},
       dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        myconfig:{
          //编辑器不自动被内容撑高
          autoHeightEnabled:false,
          //初始容器高度
          initialFrameHeight:200,
          //初始容器宽度
          initialFrameWidth:'80%',
          //上传文件接口
          serverUrl:'',
          //UEditor 资源文件的存放路径
          UEDITOR_HOME_URL:'/UEditor/'
        },
        content:''
    };
  },
  methods:{
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    },
    
};
</script>

<style >
.el-container {
  margin: auto;
}
</style>
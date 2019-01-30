<template>
  <div id="elimUpload">
    <label class="title">上传中标合同：</label>
    <el-upload
      action="123123"
      :http-request="uploadFileMethod"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      name="uploadFile"
    >
      <!-- :file-list="fileList" -->
      <i class="el-icon-plus"/>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="dialogImageUrl" width="100%" alt>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      imgList: []
    }
  },
  watch: {
    imgList: {
      deep: true,
      handler (imgList) {
        this.$emit('imgUpDate', imgList)
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      let urlList = []
      fileList.map(item => {
        urlList.push(item.response)
      })
      this.imgList = urlList
    },
    handleSuccess (response, file, fileList) {
      let urlList = []
      fileList.map(item => {
        urlList.push(item.response)
      })
      this.imgList = urlList
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    async uploadFileMethod (param) {
      const fileObject = param.file
      const formData = new FormData()
      formData.append('uploadFile', fileObject)
      /**
       * @todo  此处接口还未更改
       */
      let res = await this.$api.uploadFiles(formData)
      console.log(res)
      return res
    }
  }
}
</script>
<style lang="scss" scoped>
#elimUpload {
  .title {
    width: 15%;
    text-align: right;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .title:before {
    content: "*";
    color: #f56c6c;
    margin-right: 4px;
  }
  .el-upload__tip {
    margin-left: 15%;
  }
}
</style>

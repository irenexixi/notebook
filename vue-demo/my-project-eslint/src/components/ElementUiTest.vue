<!--element ui 自定义上传 demo-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Element ui upload</h2>

        <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<!--Elementui 当前版本 V1.4.7， bug版本 V1.2.4-->
<!--bug: 自动上传文件，文件列表无法显示x，对比两个版本，实现方式不同-->

<script>
export default {
    name: 'ElementUiTest',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            fileList: []
        };
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

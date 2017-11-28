<!--Markdown demo-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>vue markdown <el-button @click="submit" size="small" type="primary">提交</el-button></h2>

        <mavon-editor @imgAdd="imgAdd" @imgDel="imgDel" v-model="editorVal"/>

    </div>
</template>

<script>
    import Vue from 'vue'
    //import mavonEditor from 'mavon-editor'
    import axios from 'axios'
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    // use
    //Vue.use(mavonEditor)

    console.log('mavonEditor', mavonEditor);

    export default {
        name: 'VueMarkdownTest',

        components:{
            mavonEditor
        },

        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                editorVal: '',
                img_file: []
            }
        },

        mounted() {
        },

        methods: {
            $(id) {
                return document.getElementById(id);
            },
            submit(){
                // console.log(this.editorVal);
            },
            imgAdd(pos, $file){
                // console.log('pos', pos)
                // console.log('$file', $file)
                this.img_file[pos] = $file;
                this.uploadimg();
            },
            imgDel(pos){
                // console.log('pos', pos)
                delete this.img_file[pos];
            },
            uploadimg($e){
                // upload files in one request.
                // console.log('img_file', this.img_file);

                var formdata = new FormData();
                for(var _img in this.img_file){
                    console.log('img_file444', this.img_file[_img]);
                    formdata.append(_img, this.img_file[_img]);
                }

                formdata.append('test','qqli');

                axios({
                    url: 'http://127.0.0.1/index.php',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((res) => {
                    console.log(res);
                })
            },
        }
    }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
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

<!--App's all comment, user's all/accept/unaccept comment-->
<template>
    <div>
        <loading :show="isLoading" text="上传中..."></loading>
        <toast :show="isShowErrorTip" width="20em" type="text">{{errorTipText}}</toast>

        <div class="uploaded-img-box wrap2">
            <div class="ico ico-thumb" v-for="list in lists"
                 v-bind:style="{ backgroundImage: `url(${list.src})` }">
                <span class="remove" @click="remove(list)"></span>
            </div>

            <div class="ico ico-add">
                <input type="file" v-model="files" name="file" @change="fileInfo" multiple="multiple" lazy
                       class="file"/>
            </div>
        </div>
    </div>

</template>
<!--multiple="multiple"-->
<script>
import actions from '../actions';
import {PAGE_NO} from '../constants/const';

var {showPageLoading, hidePageLoading, showErrorTip} = actions;

export default {
  props: {
    lists: Array,
    uploadurl: String,
    addimg: Function,
    removeimg: Function
  },

  data () {
    return {
        files: [],
        isLoading: false,
        isShowErrorTip: false,
        errorTipText: ""
    }
  },

  methods: {
    remove(list) {
        this.removeimg(list);
    },

    fileInfo(evt){
        let self = this;
        var files = evt.target.files;

        for (var i = 0, f; i < files.length; i++) {

            f = files[i];

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            //显示img size
            var reader = new FileReader();

            reader.onload =((theFile)=>{
                return (e) => {
                    var src = e.target.result;
                    var name = theFile.name;
                    var size = theFile.size;

                    console.log('file name', name);
                    console.log('file size', size);

                    // 检查是否支持FormData
                　　if(window.FormData) {　
                       self.isLoading = true;
                　　　　var formData = new FormData();

                　　　　// 建立一个upload表单项，值为上传的文件
                　　　　formData.append('file', theFile);

                　　　　var xhr = new XMLHttpRequest();

                        // 定义上传完成后的回调函数
                　　　　xhr.onload = function (res) {

                           self.isLoading = false;

                　　　　　　if (xhr.status === 200) {
                                console.log(xhr.response);
                                console.log(JSON.parse(xhr.response));
                                self.addimg(JSON.parse(xhr.response));

                　　　　　　} else {
                                self.errorTipText = res.msg || "上传返回出错";
                                self.isShowErrorTip = true;
                　　　　　　}
                　　　　};

                        xhr.onerror = function (err) {
                           self.isLoading = false;
                           self.errorTipText = "上传错误";
                           self.isShowErrorTip = true;
                　　　　};

                　　　　xhr.open('POST', self.uploadurl);
                　　　　xhr.send(formData);

                　　} else {
                        self.errorTipText = "对不起，您的设备不支持上传文件！";
                        self.isShowErrorTip = true;
                    }
                }
            })(f);

            reader.readAsDataURL(f);
        }
    }
  }
}

</script>
<!--xhr.setRequestHeader('content-type', 'multipart/form-data');-->

<style lang='less' scoped>
    @import '../layouts/css/fun.less';
    @import '../../node_modules/vux/dist/styles/close.css';

    .uploaded-img-box {
        margin-top: 1.8rem;
        .ico { float: left; width: 6.4rem; margin-bottom: 1.2rem; height: 6.4rem; background-size: 100% 100%; background-color: @base-color3; background-repeat: no-repeat; background-position: 50% 50%; }
        .ico-thumb { margin-right: 1.2rem; position: relative; border: 1px solid @base-color3; }
        .ico-add { background-image: url("../layouts/img/ic_add.png"); }

        .file { width: 6.4rem; height: 6.4rem; opacity: 0; }

        .remove { display: block; position: absolute; right: 0; bottom: 0; width: 2rem; height: 2rem; opacity: @opacity-b;
            background-image: url("../layouts/img/ic_remove.png");
            background-size: 100% 100%; background-repeat: no-repeat; background-position: 50% 50%; }

        .vux-close {
            position: absolute;
            right: -.2rem;
            bottom: -.2rem;
            vertical-align: middle;
            width: 2rem;
            height: 2rem;
            overflow: hidden;
            color: #ccc;
            z-index: 1;
        }

        .vux-close:after, .vux-close:before {
            content: '';
            position: absolute;
            height: .2rem;
            width: 100%;
            top: 50%;
            left: 0;
            background: #98979d
        }

        .vux-close:before {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg)
        }

        .vux-close:after {
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg)
        }
    }
</style>
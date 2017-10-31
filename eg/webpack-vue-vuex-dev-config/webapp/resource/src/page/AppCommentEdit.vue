<!--Add comment-->
<template>
    <section class="app-comment-edit-wrap">
        <toast class="" :show.sync="toastShow" width="10em" type="text">
            <span class="">{{toastText}}</span>
        </toast>
        <sticky class="vux-fixed">
            <x-header class="app-comment-edit-header" :left-options="{showBack: true, backText:'取消'}">
                写评论<a class="ico-send" @click="sendComment" slot="right">发送</a>
            </x-header>
        </sticky>

        <div class="pt-header">
            <div class="rater">
                <rater :value.sync="saveParams.score" :max=5 :font-size=36 :margin=12></rater>
            </div>

            <div class="con-box wrap">
                <x-textarea class="textarea" :value.sync="saveParams.comment" :show-counter="false"
                            placeholder="写评论"></x-textarea>
            </div>

            <upload-img :lists="imageList" :uploadurl="uploadUrl" :addImg="addUploadedImgFn"
                        :removeImg="removeUploadedImgFn"></upload-img>
        </div>
    </section>
</template>

<script>
import actions from '../actions';
import UploadImg from '../components/uploadImg';
import * as Api from '../constants/api';
import AppMixin from '../components/appMixin.js';
import {LOGIN_PATH} from "../constants/const";

var { clearUploadedImg, uploadImg, saveComment, addUploadedImg,
    removeUploadedImg, showPageLoading, hidePageLoading } = actions;

export default {
    name: 'appCommentEdit',

    mixins: [AppMixin],

    components: {
        UploadImg
    },

    vuex: {
        getters: {
            route: (state) => state.route,
            imageList: ({appCommentEdit}) => appCommentEdit.imageList
        },

        actions: {
            clearUploadedImg, uploadImg, saveComment, addUploadedImg,
            removeUploadedImg, showPageLoading, hidePageLoading
        }
    },

    data () {
        return {
            toastShow: false,
            toastText: '',
            uploadUrl: Api.UPLOAD_IMG,
            saveParams: {
                userId: window.config.currentUser,
                appId: this.route.params.appId,
                versionCode: this.route.params.versionCode,
                comment	:'',
                imageList: [],
                score: 0
            }
        }
    },

    created () {
        this.clearUploadedImg();
    },

    methods: {
        sendComment() {
            console.log("comment", this.saveParams.comment);
            console.log("this.saveParams.userId", this.saveParams.userId);

            if( this.saveParams.score === 0 ) {
                this.toastShow = true;
                this.toastText = "请评分";
                return;
            }

            if( this.trim(this.saveParams.comment) == '' ) {
                this.toastShow = true;
                this.toastText = "请抒写评语";
                return;
            }

            this.showPageLoading();
            this.saveParams.imageList = this.imageList;

            this.saveComment(this.saveParams).then(res => {
                if(!res) return;

                this.toastShow = true;
                this.toastText = "评论成功";

                setTimeout( () => {
                    this.goToUrl(this, "/app/detail/"+this.route.params.appId + "/" + this.route.params.versionCode);
                }, 2000);


            }, (res) => {

                this.toastShow = true;
                this.toastText = "评论失败";

            }).then( () => {

                this.hidePageLoading();

            });
        },

        addUploadedImgFn(res) {
            if (res.code === Api.CODE_SESSION_EXPIRE) {

                window.config.currentUser = '';
                this.goToUrl(this, LOGIN_PATH);

            } else {
                this.addUploadedImg(res.data);
            }
        },

        removeUploadedImgFn(list) {
            this.removeUploadedImg(list);
        },

        trim(str) {
    　　     return str.replace(/(^\s*)|(\s*$)/g, "");
    　　 }
    },

    computed: {

    }
}

</script>

<style lang='less' scoped>
    @import '../layouts/css/fun.less';

    .rater { text-align: center; height: 9rem; line-height: 9rem; background: #fff; }

    .con-box {
        background: @base-color3; height: 12.4rem; overflow: hidden;

        .textarea { padding: 0; background: @base-color3; width: 100%; height: 10rem; margin: 1.2rem 0 0; border: none; resize: none; font-size: 1.6rem; opacity: @opacity-b; }
    }
</style>
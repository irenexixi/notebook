<!--App's detail-->
<template>
    <section class="app-detail-wrap section">
        <sticky class="vux-fixed">
            <x-header>详情页<a class="ico-edit" @click="goToEditComment(appDetail)" slot="right">写评论</a></x-header>
        </sticky>

        <div class="app-detal-box pt-header">
            <div class="item" v-if="appDetail.imageList">
                <div class="app-box wrap">
                    <div class="flex-item1">
                        <img :src="appDetail.icon">
                    </div>
                    <div class="flex-item2">
                        <h2>{{appDetail.appName}}</h2>
                        <p>{{appDetail.versionName}}</p>
                        <p>{{appDetail.createdTime}}</p>
                    </div>
                    <div class="flex-item3">
                        <button class="btn btn-download" v-on:click="countDownloadFn(appDetail)">下载</button>
                    </div>
                </div>

                <div class="desc-box wrap">
                    <div class="label"><i class="line"></i><span>更新简介</span></div>
                    <div class="desc">{{{appDetail.description}}}</div>

                    <i class="ico-arrow-bottom"></i>
                </div>


                <div class="preview-list-box app-preview-list-box wrap" v-if="appDetail.imageList.length">
                    <div class="preview-list" v-bind:style="{ height: previewAppH, width: previewAppW }">

                        <img class="thumb-app-img" v-for="(index, item) in appDetail.imageList" :src="item.src"
                             v-bind:style="{ width: appThumbW+'px' }" @click="$refs.previewer.show(index)"/>

                        <previewer :list="appDetail.imageList" v-ref:previewer :options="appImgOptions"></previewer>
                    </div>
                </div>

                <div v-if="showComment">
                    <comment-list2 v-for="list in appDetail.commentsList" :list='list'></comment-list2>
                </div>

                <div v-if="appDetail.imageList" class="view-all-comment" @click="goToComment(appDetail)">
                    查看当前版本全部评论
                </div>

                <div v-if="showNoComment">
                    <div class="comment-item no-comment">
                        <div class="comment-box">
                            <div class="title">
                                <span class="line"></span>
                                <span class="txt">评论</span>
                            </div>

                            <div class="con">暂无内容</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import actions from '../actions';
import CommentList2 from '../components/CommentList2';
import AppMixin from '../components/appMixin.js';

let { getAppDetail, countDownload, showPageLoading, hidePageLoading} = actions;

export default {
   name: 'AppDetail',

   mixins: [AppMixin],

   components: {
        CommentList2
    },

   vuex: {
      getters: {
        route: (state) =>  state.route,
        appDetail: ({appDetail})=> appDetail.appDetail
      },
      actions: {
            getAppDetail, countDownload, showPageLoading, hidePageLoading
      }
  },
  data () {
    return {
        previewAppH: window.config.appImgH,
        appThumbW: window.config.appThumbW,
        showComment: false,
        showNoComment: false,
        requestParams: {
            appId: this.route.params.appId,
            versionCode: this.route.params.versionCode
        },
        appImgOptions: {
            getThumbBoundsFn (index) {
              // find thumbnail element
              let thumbnail = document.querySelectorAll('.thumb-app-img')[index]
              // get window scroll Y
              let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
              // optionally get horizontal scroll
              // get position of element relative to viewport
              let rect = thumbnail.getBoundingClientRect()
              // w = width
              return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
              // Good guide on how to get element coordinates:
              // http://javascript.info/tutorial/coordinates
            }
        }
    }
  },

  created () {
    this.fetchData();
  },

  methods: {
    goToEditComment(appDetail){
        this.$router.go('/app/comment/edit/'+ appDetail.appId+'/'+appDetail.versionCode, {replace: true})
    },

    goToComment(appDetail) {
        this.goToUrl(this,'/app/comment/'+ appDetail.appId+'/'+appDetail.versionCode);
    },

    fetchData() {
        this.showPageLoading();
        this.getAppDetail(this.requestParams).then((res) => {

            this.hidePageLoading();

            if(!res) return;

            this.setHasComment(res);
        });
    },

    setHasComment(res) {
        let len = res.commentsList.length;
        this.showComment = len > 0 ? true: false;
        this.showNoComment = len > 0 ? false: true;
    },

    countDownloadFn(appDetail) {
        event.stopPropagation();
        event.preventDefault();

        let countDownloadParams = {
            appId: appDetail.appId,
            versionCode: appDetail.versionCode
        };
        this.countDownload(countDownloadParams);
        window.open(appDetail.downloadUrl);
    },
  },

  computed: {
    previewAppW() {
        if( this.appDetail.imageList) {

            let len = this.appDetail.imageList.length;
            return ( (window.config.appThumbW + window.config.appThumbMargin) * len +
                     ((len-1) * window.config.paddingRight) ) + 'px';

        } else {
            return window.config.boxW;
        }
    }
  }
}

</script>

<style lang="less" scoped>
    @import "../layouts/css/fun.less";

    .item {
        .app-box {
            display: flex;
            padding-top: 1.4rem;
            padding-bottom: 1.4rem;
            background: #fff;

            .flex-item1 {
                width: 5.6rem;
                height: 5.6rem;
                margin-right: 1.2rem;

                img { width: 100%; height: 100%; }
            }

            .flex-item2 {
                flex: 1;

                h2 { font-size: 1.6rem; line-height: 2.4rem; opacity: @opacity-b; }
                p { opacity: @opacity-m; margin-top: .5rem; line-height: 1; }
            }

            .flex-item3 { width: 6rem; height: 5.6rem; margin-left: 1.2rem; }
        }

        .desc-box {
            padding-top: 1.6rem;
            padding-bottom: 1rem;
            background: @base-color2;
            .label {
                padding-bottom: .8rem;
                .line { display: inline-block; vertical-align: middle; width: 2px; height: 1.3rem; background: @base-color; }
                span { display: inline-block; vertical-align: middle; padding-left: .8rem; font-size: 1.4rem; line-height: 1.6rem; opacity: @opacity-b; }
            }
            .desc { font-size: 1.3rem; opacity: @opacity-m; line-height: 1.8; }
            .ico-arrow-bottom { display: block; margin: 0 auto; background: url("../layouts/img/ic_drop-down.png") no-repeat 50% 50%; background-size: 100%; width: 1.6rem; height: 1.6rem; }
        }
    }

    .view-all-comment { color: @base-color; font-size: 1.3rem; height: 4.8rem; line-height: 4.8rem; text-align: center; }

    .no-comment {
        .comment-box { border-bottom: none; }
        .con { opacity: @opacity-m; font-size: 1.6rem; height: 13rem; line-height: 13rem; text-align: center; }
    }
</style>

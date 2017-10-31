<!--App's all comment, user's all/accept/unaccept comment-->
<template>
    <div class="comment-item">
        <div class="user-box wrap">
            <div class="name">{{list.userName}}</div>
            <div class="time">{{list.commentTime}}</div>
        </div>
        <div class="app-box-wrap">
            <div class="app-box wrap">
                <div class="flex-item1">
                    <img v-bind:src="list.icon">
                </div>
                <div class="flex-item2">
                    <h2>{{list.appName}}</h2>
                    <div class="rater">
                        <rater :value='list.score' :max=5 :font-size=12 :margin=5 active-color="#272636" disabled>
                        </rater>
                    </div>
                </div>
                <div class="flex-item3">{{list.versionName}}</div>
            </div>
        </div>

        <div class="comment-box wrap">
            <div class="title">评论 <span class="line"></span></div>
            <p class="text"> {{list.comment}} </p>

            <div class="preview-list-box" v-if="list.imageList.length" v-bind:style="{ height: previewCommentH }">
                <div class="preview-list"
                     v-bind:style="{ height: previewCommentH, width: previewCommentW }">

                    <img class="thumb" v-for="(index, item) in list.imageList" :src="item.src"
                         v-bind:style="{ width: commentThumbW+'px' }" @click="$refs.previewer.show(index)">

                    <previewer :list="list.imageList" v-ref:previewer :options="commentImgOptions"></previewer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import actions from '../actions';
import {PAGE_NO} from '../constants/const';

var {showPageLoading, hidePageLoading, showErrorTip} = actions;

export default {

  props: {
    list: [String, Object]
  },

  data () {
        return {
            previewCommentH: window.config.commentImgH,
            commentThumbW: window.config.commentThumbW,

            commentImgOptions: {

                getThumbBoundsFn (index) {
                  // find thumbnail element
                  let thumbnail = document.querySelectorAll('.thumb')[index]
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

    computed: {
        previewCommentW() {
            if( this.list.imageList) {

                let len = this.list.imageList.length;
                return window.config.commentThumbW * (len+1) + 'px';

            } else {

                return window.config.boxW;
            }
        }
  }
}




</script>

<style lang='less' scoped>
    @import '../layouts/css/fun.less';

    .comment-item {
        padding-top: 1.2rem;
        background: @base-color3;
    }

    .user-box {
         background: #fff; line-height: 1.8rem; height: 5.4rem; padding-top: 1.8rem; padding-bottom: 1.8rem; overflow: hidden;
        .name { float: left; width: 57%; font-size: 1.6rem; opacity: @opacity-b; .text-overflow; }
        .time { float: right; width: 43%; opacity: @opacity-m; text-align: right; padding-left: 1.6rem; box-sizing: border-box; white-space: nowrap; overflow: hidden; }
    }

    .app-box-wrap { background: #fff; padding-bottom: 1.6rem; /*padding-top: 1.8rem; */}

    .app-box {
        display: flex;
        background: @base-color6;
        padding: 0;
        margin: 0 1.6rem;

        .flex-item1 {
            width: 5.2rem;
            height: 5.2rem;
            padding-right: 1.2rem;

            img { width: 100%; height: 100%; }
        }

        .flex-item2 {
            flex: 1;

            h2 { font-size: 1.6rem; line-height: 2.4rem; margin-top: .5rem; opacity: @opacity-b;  .text-overflow; }
            p { opacity: @opacity-m; margin-top: .5rem; line-height: 1; }
            .rater { color: #b8b9bf; }
        }

        .flex-item3 { height: 5.2rem; line-height: 5.2rem; padding-left: 1.6rem; padding-right: 1.2rem; opacity: @opacity-s; }
    }

    .comment-box {
        background: #fff;

        .title { opacity: @opacity-b; margin-bottom: 1rem; }
        .title .line { background: @base-color5; width: 1.2rem; height: 3px; display: block; margin-top: .3rem; }
        .text { opacity: @opacity-m; padding-bottom: 1rem; }
    }

    .preview-list-box{
        padding-bottom: 1.6rem;;
    }

    /*.preview-list {
        display: flex; overflow: hidden; padding-bottom: 1.6rem;

        .thumb { display: inline-block; width: 31%; height: 100%; margin-right: 3.5%; padding-bottom: 1.6rem; }
        .thumb:last-child { margin-right: 0; }

    }*/
</style>
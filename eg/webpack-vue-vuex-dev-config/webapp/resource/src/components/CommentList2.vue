<!--App's all comment, user's all/accept/unaccept comment-->
<template>
    <div class="comment-item">
        <div class="comment-box">
            <div class="title">
                <span class="line"></span>
                <span class="txt">评论</span>
                <div class="rater">
                    <rater :value='list.score' :max=5 :font-size=12 :margin=5 active-color="#272636"
                           disabled>
                    </rater>
                </div>
            </div>
            <div class="user-box">
                <div class="name">{{list.userName}}</div>
                <div class="time">{{list.commentTime}}</div>
            </div>

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
        background: #fff; padding-top: 1.6rem;
        &:first-child {
            padding-top: 0;

            .comment-box { border-top: 0; }

        }

        &:last-child { padding-bottom: 1.6rem; }

        .user-box {
            line-height: 1.8rem; height: 1.8rem; margin: 1.6rem 0 .8rem; overflow: hidden; font-size: 1.2rem;
            .name { float: left; width: 57%; opacity: @opacity-b; .text-overflow; }
            .time { float: right; width: 43%; opacity: @opacity-m; text-align: right; padding-left: 1.6rem; box-sizing: border-box; white-space: nowrap; overflow: hidden; }
        }

        .app-box-wrap { background: #fff; padding-bottom: 1.6rem; }

        .comment-box {
            margin: 0 1.6rem; border-top: 1px solid @base-color3;

            .rater { margin-top: -.2rem; color: #b8b9bf; display: inline-block; margin-left: .8rem; line-height: 1.8rem; vertical-align: middle; }
            .title { position: relative; font-size: 0; opacity: @opacity-b; padding-top: 1.6rem; height: 1.8rem; line-height: 1.8rem; }
            .title .line { background: @base-color5; width: 3px; height: 1.3rem; display: inline-block; vertical-align: middle; margin-right: .6rem; }
            .title .txt { display: inline-block; vertical-align: middle; font-size: 1.2rem; }
            .text { opacity: @opacity-m; padding-bottom: 1rem; }
            .rater .vux-rater { vertical-align: middle; }
        }
    }

    /*.preview-list-box {
        width: 100%;
        overflow: hidden;
        background: #fff;

        .preview-list {
            !*display: flex;*!
            overflow: hidden;

            .thumb { display: block; float: left; !*width: 31%; *! height: 100%; margin-right: 2%; padding-bottom: 1.6rem; }
            .thumb:last-child { margin-right: 0; }
        }
    }*/
</style>
<!--Some app's all comments-->
<template>
    <section class="section-wrap">
        <sticky class="vux-fixed">
            <x-header>当前版本全部评论</x-header>
        </sticky>

        <div class="scroll-wrap pt-header">
            <comment-list2 v-for="list in appCommentList.items" :list='list'></comment-list2>
        </div>

        <load-more :islastpage="isLastPage" :loadmore="loadMore" :cannotloading="isLoading"></load-more>
    </section>
</template>

<script>
import actions from '../actions';
import {PAGE_SIZE} from '../constants/const';
import LoadMore from '../components/LoadMore';
import AppMixin from '../components/appMixin.js';
import CommentList2 from '../components/CommentList2';

var {getAppCommentList, clearAppCommentList, showPageLoading, hidePageLoading} = actions;

export default {
    name: 'appComment',

    mixins: [AppMixin],

    components: {
        LoadMore, CommentList2
    },

    vuex: {
        getters: {
            route: (state) => state.route,
            appCommentList: ({appComment}) => appComment.appCommentList
        },

        actions: {
            getAppCommentList,  clearAppCommentList, showPageLoading, hidePageLoading
        }
    },

    data () {
        return {
            requestParams: {
                pageSize: PAGE_SIZE,
                pageNo: 1,
                appId: this.route.params.appId,
                versionCode: this.route.params.versionCode
            },
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
            },
            isLoading: false,
            isLastPage: false
        }
    },

    created () {
        this.clearAppCommentList();
        this.fetchData();
    },

    ready() {
        this.scrollerH = this.getScrollH();
      },

    methods: {
        fetchData(cb){
            !cb && this.showPageLoading();

            this.isLoading = true;

            this.getAppCommentList(this.requestParams).then((res) => {
                cb ? cb(): '';

                !cb && this.hidePageLoading();

                this.isLoading = false;

                if(!res) return;

                if(res.items.length < PAGE_SIZE){
                    this.isLastPage = true;
                    return;
                }

                this.requestParams.pageNo +=1;
            });
        },

        loadMore (cb) {
            this.fetchData(cb);
        }
    }
}




</script>

<style lang='less' scoped>
    @import '../layouts/css/fun.less';

    .comment-item {
        &:first-child {
            padding-top: 0;
            .comment-box { border-top: 0; }
        }
    }

    /*.comment-item {
        background: #fff;
        .user-box {
            margin: 1.6rem 0 .8rem; overflow: hidden;
            .name { float: left; width: 58%; opacity: @opacity-b; .text-overflow; }
            .time { float: right; width: 42%; opacity: @opacity-m; text-align: right; padding-left: 1.6rem; box-sizing: border-box; }
        }

        .app-box-wrap { background: #fff; padding-bottom: 1.6rem; }

        .comment-box {
            margin: 0 1.6rem;
            !*background: #fff;*!
            border-bottom: 1px solid @base-color3;

            .rater { color: #b8b9bf; display: inline-block; margin-left: .8rem; line-height: 1.8rem; vertical-align: middle; }
            .title { position: relative; font-size: 0; opacity: @opacity-b; padding-top: 1.6rem; height: 1.8rem; line-height: 1.8rem; }
            .title .line { background: @base-color5; width: 3px; height: 1.3rem; display: inline-block; vertical-align: middle; margin-right: .6rem; margin-top: .3rem; }
            .title .txt { display: inline-block; vertical-align: middle; font-size: 1.2rem; }
            .text { opacity: @opacity-m; padding-bottom: 1rem; }
            .rater .vux-rater { vertical-align: middle; }
        }

        .preview-list {
            display: flex;
            overflow: hidden;

            .thumb { display: inline-block; width: 31%; height: 17.8rem; margin-right: 3.5%; padding-bottom: 1.6rem; }
            .thumb:last-child { margin-right: 0; }
        }
    }*/
</style>
<!--All app's all comments-->
<template>
    <section class="section-wrap user-comment-wrap">
        <sticky class="vux-fixed">
            <x-header>{{title}}</x-header>
        </sticky>

        <div class="scroll-wrap mt-header">
            <comment-list v-for="list in userCommentList.items" :list='list'></comment-list>
        </div>

        <load-more :islastpage="isLastPage" :loadmore="loadMore" :cannotloading="isLoading"></load-more>
    </section>
</template>

<script>
import actions from '../actions';
import CommentList from '../components/commentList';
import {PAGE_SIZE} from '../constants/const';
import AppMixin from '../components/appMixin.js';
import LoadMore from '../components/LoadMore';

var {getUserCommentList, clearUserCommentList, showPageLoading, hidePageLoading} = actions;

export default {
    name: 'userCommentAll',

    mixins: [AppMixin],

    components: {
        CommentList, LoadMore
    },

    vuex: {
        getters: {
            route: (state) => state.route,
            userCommentList: ({userComment}) => userComment.userCommentList
        },

        actions: {
            getUserCommentList, clearUserCommentList, showPageLoading, hidePageLoading
        }
    },

    data () {
        return {
            requestParams: {
                pageSize: PAGE_SIZE,
                pageNo: 1,
                userId: window.config.currentUser,
                type: this.route.params.type //为空时，返回所有状态下的评论，为1时返回被采纳的评论，为3时返回被弃用的评论
            },
            title: '',
            titles: {
                0: "我的所有评论",
                1: "被采纳的评论",
                3: "被弃用的评论",
            },
            isLoading: false,
            isLastPage: false
        }
    },

    created () {
        this.clearUserCommentList();

        this.setTitle();

        this.setType();

        this.fetchData();
    },

    ready() {
        this.scrollerH = this.getScrollH();
    },


    methods: {
        fetchData(cb){
            !cb && this.showPageLoading();

            this.isLoading = true;

            this.getUserCommentList(this.requestParams).then((res) => {

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

        setTitle() {
            this.title = this.titles[this.route.params.type];
        },

        setType() {
            let type = this.route.params.type;
            this.requestParams.type = type==0 ? '': type;
        },

        loadMore (cb) {
             this.fetchData(cb);
        }
    }
}
</script>

<style lang='less' scoped>
    @import '../layouts/css/fun.less';

    .comment-wrap { background: @base-color3; }

    .ico-red-honor { background: url("../layouts/img/ic_praise.png") no-repeat 50% 50%; }

    .ico-black-honor { background: url("../layouts/img/ic_black-list.png") no-repeat 50% 50%; }

    .ico-red-honor, .ico-black-honor { background-size: 100%; width: 5.4rem; height: 5.4rem; margin: 0 auto; }

    .btn-wrap { background: #fff; }

    .reminder { opacity: @opacity-m; padding-top: 1.8rem; text-align: center; }

    .icon-wrap { padding: 1.2rem 0 2.2rem 0; }

    .user-comment-wrap {
        .comment-item:first-child { padding-top: 0 }
    }
</style>
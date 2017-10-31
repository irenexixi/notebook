<!--All app's all comments-->
<template>
    <div>
        <section class="scroll-wrap mt-header">
            <div class="btn-wrap">
                <div class="reminder">一周红黑榜</div>
                <flexbox class="icon-wrap">
                    <flexbox-item>
                        <div class="ico-red-honor" v-link="{path:'/honorCurWeek/1'}"></div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="ico-black-honor" v-link="{path:'/honorCurWeek/2'}"></div>
                    </flexbox-item>
                </flexbox>
            </div>

            <comment-list v-for="list in appCommentAllList.items" :list='list'></comment-list>

        </section>
        <load-more :islastpage="isLastPage" :loadmore="loadMore" :cannotloading="isLoading"></load-more>
    </div>
</template>
<script>
import actions from '../actions';
import CommentList from '../components/commentList';
import {PAGE_SIZE} from '../constants/const';
import AppMixin from '../components/appMixin.js';
import LoadMore from '../components/LoadMore';

var {getAppCommentAllList, clearAppCommentAllList, showPageLoading, hidePageLoading } = actions;

export default {
    name: 'appCommentAll',

    mixins: [AppMixin],

    components: {
        CommentList, LoadMore
    },

    vuex: {
        getters: {
            route: (state) => state.route,
            appCommentAllList: ({appCommentAll}) => appCommentAll.appCommentAllList
        },

        actions: {
            getAppCommentAllList,  clearAppCommentAllList, showPageLoading, hidePageLoading
        }
    },

    data () {
        return {
            isLoading: false,
            isLastPage: false,
            requestParams: {
                pageSize: PAGE_SIZE,
                pageNo: 1,
                appId: '',
                versionCode: ''
            }
        }
    },

    created () {
        this.clearAppCommentAllList();
        this.fetchData();
    },

    ready() {
        this.scrollerH = this.getScrollH();
    },

    methods: {
        fetchData(cb){

            !cb && this.showPageLoading();

            this.isLoading = true;

            this.getAppCommentAllList(this.requestParams).then((res) => {

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

    .ico-red-honor { background: url("../layouts/img/ic_praise.png") no-repeat 50% 50%; }

    .ico-black-honor { background: url("../layouts/img/ic_black-list.png") no-repeat 50% 50%; }

    .ico-red-honor, .ico-black-honor { background-size: 100%; width: 5.4rem; height: 5.4rem; margin: 0 auto; }

    .btn-wrap { background: #fff; }

    .reminder { opacity: @opacity-m; padding-top: 1.8rem; text-align: center; }

    .icon-wrap { padding: 1.2rem 0 2.2rem 0; }
</style>
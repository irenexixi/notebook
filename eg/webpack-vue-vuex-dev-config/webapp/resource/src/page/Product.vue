<template>
    <div>

        <section class="scroll-wrap mt-header">
            <div class="reminder"><span>以产品名首字母排序</span></div>
            <div class="item" v-for="list in appList.items">
                <div class="app-box wrap" v-on:click="goToDetail(list)">
                    <div class="flex-item1">
                        <img v-bind:src="list.icon">
                        <div class="ico-shadow"></div>
                    </div>
                    <div class="flex-item2">
                        <h2>{{list.appName}}</h2>
                        <p>{{list.versionCount}}个版本</p>
                    </div>
                    <div class="flex-item3">
                        <i class="ico-comment"></i>
                        <span class="comment-count">{{list.commentCount}}</span>
                    </div>
                </div>
            </div>
        </section>

        <load-more :islastpage="isLastPage" :loadmore="loadMore" :cannotloading="isLoading"></load-more>
    </div>
</template>

<script>
import actions from '../actions';
import {PAGE_SIZE} from '../constants/const';
import AppMixin from '../components/appMixin.js';
import LoadMore from '../components/LoadMore';

console.log('actions', actions)
var {getAppList, clearAppList, showPageLoading, hidePageLoading} = actions;

export default {
  name: "product",

  components: {
    LoadMore
  },

  mixins: [AppMixin],

  vuex: {
    getters: {
        route: (state) => state.route,
        appList: ({product}) => product.appList
    },
    actions: {
        getAppList,  clearAppList, showPageLoading, hidePageLoading
    }
  },

  data () {
    return {
        isLoading: false,
        isLastPage: false,
        requestParams: {
            type: 2,
            pageSize: PAGE_SIZE,
            pageNo: 1
        }
    }
  },

  created () {
    this.clearAppList();
    this.fetchData();
  },

   ready() {
    this.scrollerH = this.getScrollH();
  },

  methods: {
    fetchData(cb) {

        !cb && this.showPageLoading();

        this.isLoading = true;

        this.getAppList(this.requestParams).then( res => {

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

    goToDetail(list) {
        this.goToUrl(this,"/app/detail/"+list.appId+"/"+list.versionCode);
    },

    loadMore (cb) {
        this.fetchData(cb);
    }
  }
}

</script>

<style lang="less" scoped>
    @import '../layouts/css/fun.less';

    .item {
        padding-top: 2rem;
        background: @base-color3;

        .app-box {
            display: flex;
            background: @base-color3;
            background: #fff;

            .flex-item1 {
                width: 6.4rem;
                height: 7.4rem;
                margin-right: 1.6rem;
                margin-top: -1rem;

                img { width: 100%; height: 6.4rem; display: block; border-radius: .1rem; }
                .ico-shadow { background: url("../layouts/img/ic_shadow.png") no-repeat -7px 0; height: 1rem; width: 100%; }
            }

            .flex-item2 {
                flex: 1;

                h2 { font-size: 1.4rem; line-height: 2.4rem; opacity: @opacity-b; margin-top: 1rem;  .text-overflow;}
                p { opacity: @opacity-m; margin-top: .8rem; line-height: 1; }
            }

            .flex-item3 {
                width: 6rem; height: 5.6rem; margin-left: 1rem; overflow: hidden; box-sizing: border-box; padding-top: 2.5rem;

                .ico-comment { float: left; display: block; width: 2rem; height: 2rem; background: url("../layouts/img/ic_comment.png") no-repeat 50% 50%; background-size: 100%; }
                .comment-count { float: left; display: block; width: 3rem; height: 2rem; line-height: 2rem; text-align: center; opacity: @opacity-m; }
            }
        }
    }
</style>

<template>
    <div>
        <section class="scroll-wrap mt-header">
            <div class="item" v-for="list in newestAppList.items" @click="goToDetail(list)">
                <div class="app-box wrap">
                    <div class="flex-item1">
                        <img :src="list.icon">
                    </div>
                    <div class="flex-item2">
                        <h2>{{list.appName}}</h2>
                        <p>{{list.versionName}}</p>
                        <p>{{list.createdTime}}</p>
                    </div>
                    <div class="flex-item3">
                        <button type="button" class="btn btn-download" @click="countDownloadFn(list, $event)">下载
                        </button>
                    </div>
                </div>

                <div class="desc-box wrap">
                    <div class="label"><i class="line"></i><span>更新简介</span></div>
                    <div class="desc">{{{list.description}}}</div>
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

let {getNewestAppList, clearNewestAppList, countDownload, showPageLoading, hidePageLoading} = actions;

export default {
   name: 'Newest',

   mixins: [AppMixin],

   components: {
        LoadMore
    },

   vuex: {
      getters: {
        route: (state) => state.route,
        newestAppList: (state) => {
            return state.newest.newestAppList
        }
      },
      actions: {
          getNewestAppList, clearNewestAppList, countDownload, showPageLoading, hidePageLoading
      }
  },

  data () {
    return {

        requestParams: {
          type: 1, //产品列表状态，为１时，为更新列表，２为产品库的列表
          pageNo: 1,
          pageSize: PAGE_SIZE
        },
        isLoading: false,
        isLastPage: false
    }
  },

  created () {
    this.clearNewestAppList();
    this.fetchData();
  },

  ready() {
    this.scrollerH = this.getScrollH();
  },

  methods: {

    fetchData(cb) {

        !cb && this.showPageLoading();

        this.isLoading = true;

        this.getNewestAppList(this.requestParams).then( res => {

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

    countDownloadFn(list, event) {
        event.stopPropagation();
        event.preventDefault();

        let countDownloadParams = {
            appId: list.appId,
            versionCode: list.versionCode
        };

        this.countDownload(countDownloadParams);

        window.open(list.downloadUrl);
    },

    goToDetail(list) {
        this.goToUrl(this, "/app/detail/"+list.appId+"/"+list.versionCode);
    },

    loadMore (cb) {
        this.fetchData(cb);
    }
  },

  computed: {
  }
}
</script>

<style lang="less" scoped>
    @import "../layouts/css/fun.less";

    p { margin: 10px 0; }

    .item {
        padding-bottom: 1.2rem;
        background: @base-color3;
        overflow: hidden;

        &:last-child {
            padding-bottom: 0;
        }

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

                h2 { font-size: 1.6rem; line-height: 2.4rem; opacity: @opacity-b; .text-overflow;}
                p { opacity: @opacity-m; margin-top: .5rem; margin-bottom: 0; line-height: 1; }
            }

            .flex-item3 { width: 6rem; height: 5.6rem; margin-left: 1.2rem; }
        }

        .desc-box {
            padding-top: 1.6rem;
            padding-bottom: 1.4rem;
            background: @base-color2;
            .label {
                padding-bottom: .8rem;
                .line { display: inline-block; vertical-align: middle; width: 2px; height: 1.3rem; background: @base-color; }
                span { display: inline-block; vertical-align: middle; padding-left: .8rem; font-size: 1.4rem; line-height: 1.6rem; opacity: @opacity-b; }
            }
            .desc { font-size: 1.3rem; opacity: @opacity-m; line-height: 1.8; }
        }
    }
</style>
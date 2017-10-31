<template>
    <section class="section-wrap">
        <sticky class="vux-fixed">
            <x-header>{{title}}</x-header>
        </sticky>

        <div class="scroll-wrap mt-header">

            <p class="reminder"><span>{{$route.params.fromDate}} 至 {{$route.params.endDate}}</span></p>

            <div v-if="useRedTpl">
                <honor-red-list v-for='list in honorHistoryList.items' :value='list'></honor-red-list>
            </div>

            <div v-if="useBlackTpl">
                <honor-black-list v-for='list in honorHistoryList.items' :value='list'></honor-black-list>
            </div>
        </div>
        <load-more :islastpage="isLastPage" :loadmore="loadMore" :cannotloading="isLoading"></load-more>
    </section>
</template>

<script>
import actions from '../actions';
import {PAGE_SIZE} from '../constants/const';
import HonorRedList from '../components/HonorRedList';
import HonorBlackList from '../components/HonorBlackList';
import AppMixin from '../components/appMixin.js';
import LoadMore from '../components/LoadMore';

var {getHonorHistoryList, clearHonorHistoryList,  showPageLoading, hidePageLoading } = actions;

export default {
  name: "honorHistory",

  mixins: [AppMixin],

  components: {
    HonorRedList, HonorBlackList, LoadMore
  },

  vuex: {
    getters: {
        route: (state) => state.route,
        honorHistoryList: ({honorHistory}) => honorHistory.honorHistoryList
    },
    actions: {
        getHonorHistoryList, clearHonorHistoryList, showPageLoading, hidePageLoading
    }
  },

  data () {
    return {
        type: this.route.params.type,
        requestParams: {
            type: this.route.params.type, //红黑榜类型，1为红榜，2为黑榜
            pageSize: PAGE_SIZE,
            pageNo: 1,
            fromDate: this.route.params.fromDate + " 00:00:00",
            endDate: this.route.params.endDate + " 23:59:59"
        },
        useRedTpl: this.route.params.type == 1 ? true: false,
        useBlackTpl: this.route.params.type == 2 ? true: false,
        title: '',
        titles: {
            1: "历史红榜",
            2: "历史黑榜"
        },
        isLoading: false,
        isLastPage: false
    }
  },

    created () {
        this.clearHonorHistoryList();
        this.setTitle();
        this.fetchData();
    },

    ready() {
        this.scrollerH = this.getScrollH();
    },

  methods: {
    fetchData(cb) {
        !cb && this.showPageLoading();

        this.isLoading = true;

        this.getHonorHistoryList(this.requestParams).then((res) => {

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

    loadMore (cb) {
        this.fetchData(cb);
    }
  }
}




</script>
<style lang="less" scoped>
    @import '../layouts/css/fun.less';
</style>

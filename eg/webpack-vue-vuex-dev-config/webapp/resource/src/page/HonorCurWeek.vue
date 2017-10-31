<template>
    <section class="section-wrap">
        <sticky class="vux-fixed">
            <x-header>{{title}}<a class="ico-history" @click="goToHistory" slot="right">历史</a></x-header>
        </sticky>

        <div class="mt-header scroll-wrap">
            <p class="reminder" v-if="curWeekDate.fromDate"><span>{{curWeekDate.fromDate}} 至 {{curWeekDate.endDate}}</span></p>

            <div v-if="useRedTpl">
                <honor-red-list v-for='list in honorCurWeekList.items' :value='list'></honor-red-list>
            </div>

            <div v-if="useBlackTpl">
                <honor-black-list v-for='list in honorCurWeekList.items' :value='list'></honor-black-list>
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

var {getHonorList, clearHonorList, getCurWeekDate,  showPageLoading, hidePageLoading} = actions;

export default {
  name: "honorCurWeek",

  mixins: [AppMixin],

  components: {
    HonorRedList, HonorBlackList, LoadMore
  },

  vuex: {
    getters: {
        route: (state) => state.route,
        honorCurWeekList: ({honorCurWeek}) => honorCurWeek.honorCurWeekList,
        curWeekDate: ({honorCurWeek}) => honorCurWeek.curWeekDate
    },
    actions: {
        getHonorList, clearHonorList, getCurWeekDate, showPageLoading, hidePageLoading
    }
  },

  data () {
    return {
        requestParams: {
            type: this.route.params.type, //红黑榜类型，1为红榜，2为黑榜
            pageSize: PAGE_SIZE,
            pageNo: 1,
            fromDate: '',
            endDate: ''
        },
        title: '',
        titles: {
            1: "本周红榜",
            2: "本周黑榜"
        },
        useRedTpl: this.route.params.type == 1 ? true: false,
        useBlackTpl: this.route.params.type == 2 ? true: false,
        isLoading: false,
        isLastPage: false
    }
  },
  created () {
    this.clearHonorList();
    this.setTitle();
    this.getCurWeekDate();
    this.fetchData();
  },

    ready() {
        this.scrollerH = this.getScrollH();
    },

  methods: {

    fetchData (cb) {
        !cb && this.showPageLoading();

        this.isLoading = true;

        this.getHonorList(this.requestParams).then((res) => {

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

    goToHistory() {
        this.goToUrl(this,'/honor/date/'+ this.route.params.type);
    },

    loadMore (cb) {
        this.fetchData(cb);
    }
  }
}


</script>

<style lang="less" scoped>
    @import '../layouts/css/fun.less';

    .reminder { margin-top: 1.2rem; }
</style>

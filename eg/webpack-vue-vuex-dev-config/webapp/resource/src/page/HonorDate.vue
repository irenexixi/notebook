<template>
    <section class="section">
        <sticky class="vux-fixed">
            <x-header>{{title}}</x-header>
        </sticky>
        <div class="pt-header">
            <div class="honor-box">
                <div class="honor-date-list" v-for='list in honorDateList'>
                    <div class="wrap" v-on:click="goToHistory(list)">{{list.fromDate}} 至 {{list.endDate}}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import actions from '../actions';
import AppMixin from '../components/appMixin.js';

var {getHonorDateList, showPageLoading, hidePageLoading} = actions;

export default {
  name: "honorDate",

  mixins: [AppMixin],

  vuex: {
    getters: {
        route: (state) => state.route,
        honorDateList: ({honorDate}) => honorDate.honorDateList
    },
    actions: {
        getHonorDateList, showPageLoading, hidePageLoading
    }
  },

  data () {
    return {
        title: '',
        titles: {
            1: "历史红榜",
            2: "历史黑榜"
        }
    }
  },

  created () {
    this.setTitle();
    this.fetchData();
  },

  methods: {
    fetchData() {
        var self = this;
        this.showPageLoading();
        this.getHonorDateList().then(res => {
            this.hidePageLoading();
        });
    },

    setTitle() {
        this.title = this.titles[this.route.params.type];
    },

    goToHistory(list) {
        let type = this.route.params.type;
        this.goToUrl(this, '/honor/history/' + type + '/'+  list.fromDate + '/' + list.endDate);
    }
  }
}
</script>

<style lang="less" scoped>
    @import '../layouts/css/fun.less';

    .honor-box { margin-top: 1.2rem; }

    .honor-date-list {
        margin-top: 1.2rem;
        height: 5.4rem;
        line-height: 5.4rem;
        background: #fff;
        font-size: 1.6rem;
    }
</style>

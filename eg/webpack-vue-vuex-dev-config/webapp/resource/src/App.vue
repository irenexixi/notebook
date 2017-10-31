<template>
    <div>
        <loading :show="isLoading" text="加载中..."></loading>
        <toast :show.sync="isShowErrorTip" width="20em" type="text">{{errorTipText}}</toast>
        <div class="wrap" style="opacity:0;font-size:0;"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    import store from "./store/store";
    import './components/registerComponents';
    import AppMixin from './components/appMixin.js';

    import actions from './actions';
    var { getUserInfo } = actions;

    export default {
        store,

        mixins: [AppMixin],

        vuex: {
            getters: {
                isLoading: (state) => state.root.isLoading,
                isShowErrorTip: (state) => state.root.isShowErrorTip,
                errorTipText: (state) => state.root.errorTipText
            },

            actions: {
                getUserInfo
            }
        },

        data() {
            return {
            }
        },

         created() {
            this.fetchData();
        },

        ready() {
            this.commentImgH();
        },

        methods: {
            fetchData() {
                if(window.config.currentUser){
                    this.getUserInfo({"userId": window.config.currentUser});
                }
            }
        }
    }

</script>
<style lang="less">
    @import '../node_modules/vux/dist/vux.css';
    @import 'layouts/css/app';
</style>
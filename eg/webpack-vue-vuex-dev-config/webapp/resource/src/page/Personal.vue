<template>
    <section class="personal-wrap pt-header">
        <div class="username row">
            <div class="wrap">{{userInfo.userName}}</div>
        </div>
        <div class="row">
            <div class="wrap">本期未完成投票数 <span>{{userId}}</span>
                <div class="num"><span>{{userInfo.unreachedNum}}</span></div>
            </div>
        </div>

        <div class="group">
            <div class="row2 border-b">
                <div class="wrap" v-link="{path:'/user/comment/1'}">被采纳 <i class="ico-arrow-r"></i></div>
            </div>
            <div class="row2 border-b">
                <div class="wrap" v-link="{path:'/user/comment/3'}">被弃用 <i class="ico-arrow-r"></i></div>
            </div>
            <div class="row2">
                <div class="wrap" v-link="{path:'/user/comment/0'}">所有评论 <i class="ico-arrow-r"></i></div>
            </div>
        </div>

        <div class="row">
            <div class="wrap logout" @click="logout">退出登录</div>
        </div>
    </section>
</template>

<script>
import actions from "../actions";
import {LOGIN_PATH} from "../constants/const";
import AppMixin from '../components/appMixin.js';

var {getUserInfo, sendLoginOut, showPageLoading, hidePageLoading} = actions;

export default {
    name: 'personal',

    mixins: [AppMixin],

    vuex : {
        getters: {
            route: (state) => state.route,
            userInfo: ({personal}) => personal.userInfo
        },
        actions: {
            getUserInfo, sendLoginOut, showPageLoading, hidePageLoading
        }
    },

    data () {
        return {
             requestParams: {
                userId: window.config.currentUser
             }
        }
    },

    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.getUserInfo(this.requestParams);
        },

        logout() {
            this.showPageLoading();

            this.sendLoginOut().then( res => {

                this.hidePageLoading();

                if(!res) return;

                window.config.currentUser = '';
                this.goToUrl(this, LOGIN_PATH);
            });
        }
    }
}
</script>
<!--this.goToUrl(this, LOGIN_PATH);-->
<!--this.$router.redirect(LOGIN_PATH);-->
<style lang="less" scoped>
    @import "../layouts/css/fun.less";

    .personal-wrap {
        background: @base-color3;

        .group, .row {
            margin-top: 1.2rem;
        }
        .row, .row2 {
            height: 5.4rem;
            line-height: 5.4rem;
            background: #fff;
            font-size: 1.6rem;
        }

        .row > .wrap, .row2 > .wrap {
            opacity: @opacity-b;
        }

        .border-b { border-bottom: .1rem solid @base-color3; }

        .logout { text-align: center; }

        .num { float: right; background: @base-color3; margin-top: 1.5rem; border-radius: 50%; width: 2rem; height: 2rem; line-height: 2rem; text-align: center; }

        .num span { opacity: @opacity-b; font-size: 1.2rem; }

        .ico-arrow-r { display: block; float: right; margin-top: 1.7rem; background: url("../layouts/img/ic_drop-down.png") no-repeat 50% 50%; background-size: 100%; width: 1.6rem; height: 1.6rem; transform: rotate(-90deg); }
    }
</style>

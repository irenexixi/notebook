<template>
    <div class="login-wrap">
        <toast class="toast-top" :show.sync="toastShow" width="30em" type="text">
            <span class="c-danger">{{toastText}}</span>
        </toast>
        <div class="login">
            <div class="login-box">
                <div class="logo"></div>
                <h1>内测平台</h1>
                <form class="form-box">
                    <div class="ipt-group">
                        <label class="ico-user"></label>
                        <input type="text" v-model="account" placeholder="xxxx.xx@tcl.com"/>
                    </div>
                    <div class="ipt-group">
                        <label class="ico-password"></label>
                        <input type="password" v-model="password"/>
                    </div>
                </form>
                <p>如忘记密码请联系部门管理员</p>
                <div class="btn-login" @click="loginRequest"></div>
            </div>
        </div>
    </div>
</template>
<!--<x-button type="primary" @click="login">登录</x-button>-->
<script>
import actions from '../actions';
import * as API from '../constants/api';
import AppMixin from '../components/appMixin.js';

var {sendLogin, getUserInfo, hidePageLoading, showPageLoading, showErrorTip} = actions;

export default{
    name: 'login',

    mixins: [AppMixin],

    vuex: {
        actions: {
            sendLogin,getUserInfo, hidePageLoading, showPageLoading
        },
        getters:{
            userId: (state) => state.login.userId
        }
    },

    data() {
        return {
            account: '',
            password: '',
            toastShow: false,
            toastText: ''
        }
    },

    created() {
        this.hidePageLoading();
        this.init();
    },

    methods: {
        init() {
            if(window.config.currentUser){
                this.goToUrl(this, "/entrance");
            }
        },

        loginRequest() {
            if( this.account=='' || this.password == '') {
                this.toastText = "账户或密码不能为空";
                this.toastShow = true;
                return false;
            }

            let params = {
                account: this.account,
                password: this.password,
            };

            this.showPageLoading();
            this.sendLogin(params).then((res)=>{
                this.hidePageLoading();

                if(res){
                    location.reload();

                } else{
                    this.toastText = res.msg;
                    this.toastShow = true;
                }
            });
        }
    },

    computed: {

    }
}

</script>
<!--this.getUserInfo({"userId": this.userId});-->
<!--this.goToUrl(this, "/entrance");-->
<style lang="less" scoped>
    @import url(../layouts/css/fun.less);

    .login-wrap { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-size: 100%;
        background: #1b1217 url("../layouts/img/bg.png") no-repeat 50% 50%; }

    .login { /*display: table; width: 100%; height: 100%;*/ }

    .login-box {
        color: #fff; text-align: center; /*display: table-cell; vertical-align: middle;*/

        position: fixed;
        left: 50%;
        top: 50%;
        -webkit-transform: translate3d(-50%, -50%, 0);
        -moz-transform: translate3d(-50%, -50%, 0);
        -ms-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);

        width: 100%;

        h1 { font-size: 2rem; margin: 2rem 0; }
        p { opacity: @opacity-m; margin: 1.8rem 0 2rem; }
    }

    .form-box { margin: 0 3rem; }

    .ipt-group {
        background: #fff; display: flex; border-radius: .4rem; margin-bottom: 1.8rem;
        label { display: block; width: 3.2rem; height: 3.2rem; margin: 1rem; background-size: 100%; background-position: 50% 50%; background-repeat: no-repeat; }
        label.ico-user { background-image: url(../layouts/img/ic_user.png); }
        label.ico-password { background-image: url(../layouts/img/ic_password.png); }
        input { margin: 1rem 1rem 1rem 0; opacity: @opacity-b; border: none; display: inline-block; height: 3.2rem; }
    }

    .logo { width: 7rem; height: 7rem; margin: 0 auto; background: url("../layouts/img/ic_sign-in_logo.png") no-repeat 50% 50%; background-size: 100%; }

    .btn-login { width: 12.6rem; height: 5.4rem; margin: 0 auto; background: url("../layouts/img/bt_sign-in.png") no-repeat 50% 50%; background-size: 100%; }
</style>

<!--axios demo-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Axios</h2>

        <el-button type="success" @click="getRequest">发送 GET 请求</el-button>
        <el-button type="success" @click="postRequest">发送 POST 请求</el-button>
    </div>
</template>

<script>
    import 'es6-promise';
    import axios from 'axios';
    import md5 from 'md5';
    import {Message} from 'element-ui';
    import isEmpty from 'lodash.isempty';
    import qs from 'querystring';

    const METHODS = {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete'
    };

    const checkRespStatus = (resp) => {
        console.log('resp', resp);

        if (resp.status !== 200) {
            console.log('Server error occurred');
            return Promise.reject('Server error occurred');
        }

        let data = resp.data;

        return new Promise((resolve, reject) => {

            if (resp && data.code == 200) {
                data.remark && Message({message: data.remark, type: 'success', showClose: false});

                resolve(resp);
            } else if (resp && data.code == 401) {
                // 页面超时，重新刷新页面
                localStorage.clear();
                if (window.location.href.indexOf('login') !== -1) return;
                window.location.href = `${COMMON_LOGIN_ROUTER}?next=${encodeURIComponent(window.location.href)}`;

            } else if (resp && data.code == 424) {
                history.go(-1);
                Message.error({message: '您没有权限访问', type: 'error', showClose: false});
            } else {
                reject(resp);
                data.remark && Message.error({message: data.remark, type: 'error', showClose: false});
            }
        });
    };

    const request = (url, params, headers = {}, method = METHODS.GET, jsonType = true) => {
        let sessionId = localStorage.getItem('sessionId') || '1f01949454ab9284738a2a7a5b6839be';
        var options = {
            headers: {
                'Content-Type': jsonType ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded',
                'user-sessionid': sessionId,
                'request-sessionid': md5(url + sessionId + (params ? JSON.stringify(params) : ''))
            },
            method: method,
            url: '',
            responseType: 'json',
        };


        if (method !== METHODS.GET && !isEmpty(params)) {
            options.data = jsonType ? JSON.stringify(params) : qs.stringify(params);

        } else if (method === METHODS.GET && !isEmpty(params)) {
            const newParams = ( ~url.lastIndexOf('?') ? '&' : '?' ) + qs.stringify(params);
            url += newParams;
        }

        //options.url = window.config.context + url;
        options.url = url;

        return axios(options).then(checkRespStatus);
    };

    const post = (url, params, headers) => request(url, params, headers, METHODS.POST, true);
    const get = (url, params, headers) => request(url, params, headers, METHODS.GET, true);


    export default {
        name: 'AxiosTest',

        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },

        methods: {
            getRequest() {
                get('http://localhost:8081/get');
            },

            postRequest() {
                post('http://localhost:8081/post');
            }
        }
    }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

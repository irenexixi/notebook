<!--axios demo-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Create fluid and interactive gradients animations with this small (< 10 kB) js library.</h2>

        <el-button type="success" @click="getRequest">发送 GET 请求</el-button>
        <el-button type="success" @click="postRequest">发送 POST 请求</el-button>
    </div>
</template>

<script>
    import "es6-promise";
    import axios from 'axios';
    import md5 from 'md5';
    import {Message} from 'element-ui';
    import isEmpty from "lodash.isempty";
    import qs from "querystring";




    export default {
        name: 'Granim.js',

        data () {
            return {
                msg: 'Granim.js',
            }
        },

        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

<!--Count-->
<template>
    <div class="hello">
        <!--<h1>{{ msg }}</h1>-->
        <h2>{{counter}}</h2>

        <el-button type="success" @click="handleClick()">click</el-button>
    </div>
</template>

<script>
    import {Message} from 'element-ui';

    let data = {counter: 0};
    console.log('data',data);
    let cc = {
        name: 'Count',

        props: ['index'],

        data () {
            //return data;
            return {
                counter:0
            }
        },

        mounted(){
            console.log('mounted', this)
        },

        methods: {
            handleClick() {
                console.log('handleClick ' + this.index);
                this.counter += 1;
            }
        }
    };

    console.log('cc',cc)
    export default cc;
</script>

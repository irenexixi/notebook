<!--PushJs demo-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>html2canvas</h2>
            
        <div id="capture" @click="capture" style="padding: 10px; background: #f5da55">
            <h4 style="color: #000; ">Hello html2canvas! Capture me</h4>
        </div>
        
        <el-dialog id="dialog" title="截图" :visible.sync="showDialog">
            <div ref="content" class="content"></div>
        </el-dialog>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
    
    export default {
        name: 'Html2canvas',

        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                showDialog: true
            };
        },

        mounted() {
        },

        methods: {
            capture() {
                // html2canvas(document.querySelector('#capture')).then(canvas => {
                html2canvas(document.body).then(canvas => {
                    this.showDialog = true;
                    let dialog = document.querySelector('#dialog');
                    console.log('dialog', dialog);
                    console.log(dialog.querySelector('.content'));
                    dialog.querySelector('.content').appendChild(canvas);
                });
            }
        }
    };
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
    .content {
        width: 100%;
        height: 100%;
    }
</style>

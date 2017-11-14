<!--Markdown demo-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>markdown</h2>

        <textarea id="text-input" oninput="update()"
                  rows="6" cols="60">Type **Markdown** here.</textarea>
        <div id="preview"></div>
    </div>
</template>

<script>
    import {markdown} from 'markdown';
    //console.log(markdown);

    export default {
        name: 'MarkdownTest',

        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                editor: null
            }
        },

        mounted(){
            let _this = this;
            /*function Editor(input, preview) {
                console.log('this', this)
                _this.editor = this;
                _this.update(preview);
            }
            new Editor(this.$("text-input"), this.$("preview"));*/
        },

        methods: {
            $(id) {
                return document.getElementById(id);
            },

            update() {
                this.$("preview").innerHTML = markdown.toHTML(this.$("text-input").value);
            }
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

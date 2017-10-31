<template>
    <div v-if="!islastpage" class="load-more">
        <span v-if="isLoading">{{loadingTxt}}</span>
    </div>
</template>

<script>
import AppMixin from './appMixin.js';

    export default {
        mixins: [AppMixin],

        props: {
            islastpage: Boolean,
            loadmore: Function,
            cannotloading: Boolean
        },


        data(){
            return {
                container: document,
                distance: 50,
                isLoading: false,
                loadingTxt: '加载中...',
            }
        },


        ready() {
            this.attachEvents();
        },

        beforeDestroy() {
            this.detachEvents();
        },

        methods: {
            getScrollTop() {
                let scrollTop = 0;

                if(document.documentElement&&document.documentElement.scrollTop) {
                    scrollTop = document.documentElement.scrollTop;

                } else if(document.body) {
                    scrollTop = document.body.scrollTop;
                }

                return scrollTop;
            },

            getScrollHeight() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            },

            getClientHeight() {
                let clientHeight = 0;

                let container = document;

                if(document.body.clientHeight && document.documentElement.clientHeight) {
                    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight)?
                    document.body.clientHeight : document.documentElement.clientHeight;

                } else {
                    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ?
                    document.body.clientHeight : document.documentElement.clientHeight;
                }

                return clientHeight;
            },

            scroll () {
                var container = this.container;

                var offset = this.getScrollHeight() - (this.getClientHeight() + this.getScrollTop());

                if (offset <= this.distance) {

                    if(!this.islastpage && !this.isLoading && !this.cannotloading) {
                        this.isLoading = true;
                        this.loadmore(()=>{
                            this.isLoading = false;
                        });

                    } else if(this.islastpage) {
                        this.attachEvents(true);
                    }
                }
            },

            attachEvents (off) {

                var container = document;

                if(off) {
                    document.removeEventListener('scroll', this.scroll, false);
                } else {
                    document.addEventListener('scroll', this.scroll, false);
                }
            },

            detachEvents () {
                this.attachEvents(true);
            }
        }
    }

</script>
<!--document.getElementsByClassName("scroll-wrap")[0]-->
<style lang="less" scoped>
    @import '../layouts/css/fun.less';

    .load-more {
        width: 100%; height: 3.6rem; line-height: 3.6rem; text-align: center; background: @base-color3;
        span { opacity: @opacity-b; }
    }
</style>

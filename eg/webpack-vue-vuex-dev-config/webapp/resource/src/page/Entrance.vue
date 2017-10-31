<!-- Login success, and entrance -->
<template>
    <view-box v-ref:view-box>
        <sticky class="vux-fixed">
            <tab active-color="#fff" default-color="#fff">
                <tab-item v-link="{path:'/entrance'}" :selected="this.$route.path === '/entrance'">
                    <span>更新</span>
                </tab-item>

                <tab-item v-link="{path:'/entrance/product'}" :selected="this.$route.path === '/entrance/product'">
                    <span v-else>产品库</span>
                </tab-item>

                <tab-item v-link="{path:'/entrance/appCommentAll'}"
                          :selected="this.$route.path === '/entrance/appCommentAll'">
                    <span>评论</span>
                </tab-item>

                <tab-item v-link="{path:'/entrance/personal'}"
                          :selected="this.$route.path === '/entrance/personal'">
                    <span class="num-parent">
                        我
                        <div v-if="userInfo.unreachedNum" class="num"><span>{{userInfo.unreachedNum}}</span></div>
                    </span>


                </tab-item>
            </tab>
        </sticky>

        <!--<router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>-->
        <router-view></router-view>
    </view-box>
</template>

<script>
export default {
    name: "entrance",
    vuex: {
        getters: {
             userInfo: (state) => {
                return state.personal.userInfo;
            }
        },

        actions: { },
    },
    data(){
        return {
        }
    },

    created() {

    },

    methods: {
    }
}
</script>

<style lang="less" scoped>
    @import "../layouts/css/fun.less";

    .num-parent{ position: relative; }
    .num {position: absolute; right: -2.2rem; top:-1.2rem; background: @base-color7; border-radius: 50%; width: 2rem; height: 2rem; line-height: 2rem; text-align: center; }
    .num span { opacity: @opacity-b; font-size: 1.2rem; }

</style>
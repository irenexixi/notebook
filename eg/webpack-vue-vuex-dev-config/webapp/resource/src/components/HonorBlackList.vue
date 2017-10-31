<template>
    <div class="honor-list">
        <div class="wrap">{{value.userName}}
            <div class="num"><i></i><span>{{value.abandonCount}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    value: Object
  },

  created() {
    console.log("black list created")
  },

  ready() {
    console.log('black list value ', this.value);
  }
}
</script>


<style lang="less" scoped>
    @import '../layouts/css/fun.less';

    .honor-list {
        margin-bottom: 1.2rem;
        height: 5.4rem;
        line-height: 5.4rem;
        background: #fff;
        font-size: 1.6rem;

        &:last-child { margin-bottom: 0; }
    }

    .honor-list > .wrap {
        opacity: @opacity-b;
    }

    .num { float: right; margin-top: 1.8rem; width: 4.5rem; height: 2rem; line-height: 2rem; }
    .num i { font-style: normal; display: inline-block; vertical-align: middle; width: 2rem; height: 2rem; background: url('../layouts/img/ic_adopt.png') no-repeat 50% 50%; background-size: 100%; }
    .num span { opacity: @opacity-b; font-size: 1.2rem; }
</style>

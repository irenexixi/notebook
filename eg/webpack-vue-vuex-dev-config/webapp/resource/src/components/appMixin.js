var mixin = {
    methods: {
        goToUrl(vm, url) {
            vm.$router.go(url);
        },

        getScrollH() {
            let winH = parseInt(document.documentElement.clientHeight);
            let topH = parseInt(document.getElementsByClassName("vux-fixed")[0].offsetHeight);
            let finalH = winH - topH;
            document.getElementsByClassName("scroll-wrap")[0].style.minHeight = finalH + 'px';
            return winH - topH;
        },


        commentImgH() {
            let winW = parseInt(window.innerWidth);
            let wrap = document.getElementsByClassName("wrap")[0];
            // console.log("winW", winW);
            // console.log("wrap", wrap);
            let style = window.getComputedStyle(wrap, null);
            let paddingLeft = style.paddingLeft;
            let paddingRight = style.paddingRight;
            let boxW = winW - parseFloat(paddingLeft) - parseFloat(paddingRight);

            // console.log('paddingLeft' ,  paddingLeft);
            // console.log('boxW' ,  boxW);

            window.config.paddingRight = parseInt(paddingRight);
            window.config.boxW = boxW + 'px';
            window.config.commentImgH = Math.ceil(boxW * 0.32 * 16 / 9) + 'px';
            window.config.appImgH = Math.ceil(boxW * 0.6 * 16 / 9) + 'px';
            
            window.config.commentThumbW = parseFloat(boxW * 0.31 + 1);

            window.config.appThumbW = Math.ceil(boxW * 0.6);
            window.config.appThumbMargin = Math.ceil(boxW * 0.02);

            // console.log('window.config.appThumbW' ,  window.config.appThumbW);
            // console.log('window.config.appThumbMargin' ,  window.config.appThumbMargin);
        }
    }
};

export default mixin;

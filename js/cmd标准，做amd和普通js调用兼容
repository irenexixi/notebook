##umd形式输出

'use strict';

var MyModule = function() {};

module.exports = MyModule;



##借用FastClick的写法 https://github.com/ftlabs/fastclick

FastClick.attach = function(layer, options) {
    return new FastClick(layer, options);
};


if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

    // AMD. Register as an anonymous module.
    define(function() {
        return FastClick;
    });
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;

} else {
    window.FastClick = FastClick;
}

//CMD调用

var attachFastClick = require('fastclick');
attachFastClick(document.body);

//AMD调用

var FastClick = require('fastclick');
FastClick.attach(document.body, options);

//直接调用
<script type='application/javascript' src='/path/to/fastclick.js'></script>
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
or
$(function() {
    FastClick.attach(document.body);
});

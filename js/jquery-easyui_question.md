

jQuery easyui使用过程遇到的问题


1、在IE11浏览器中，鼠标移动到使用easyui-linkbutton的按钮上时，按钮消失了只剩下文字，鼠标离开按钮并没有恢复原状。

   解决办法：将页面中的 layout 相关布局全部替换成普通布局（width: xx%, float： left）后就可以了，并不明白为什么。


2、系统中有注册设备、注册用户等，使用的是弹窗，由于弹窗比较多，就把弹窗的内容单独写在一个页面，用异步加载页面的方式显示页面，页面会闪现布局错乱的情况。

   问题解答：需要在js中初始化easyui组件。异步加载的jsp页面里面没有重新引入easyuicss、js，而是使用父窗口中引入的文件；试了重新引入easyui.css文件是
   不行的,没有尝试引入easyui.js文件； easyui 的组件初始化有两种方式，一种是将class加载元素上，另一种是在js中对元素设置对应的方法，例如：

   方法一：

   <input class="easyui-textbox width-200 networkMacAddress" type="text" name="networkMacAddress" validType="mac">

   方法二：

   <input class="setTextbox width-200 networkMacAddress" type="text" name="networkMacAddress" validType="mac">

   $registerDeviceWrap.find(".setTextbox").textbox();

   使用方法二就可以完美解决闪现的问题。


3、项目需要兼容到IE8及以上，因为有大量的交互，所以我在js里面写了console.log(); 当提交一个表单时，完全没有反应，网页的左下侧还显示“网页上有错误”，
   F12打开控制台，错误的地方又没有断点。

   问题解答： console.log(), IE8只有在开启调试窗口(F12)的时候，console.log 才能出结果，不然就报错。

   可以这样复写console.log()方法

   //log

   var DEBUG = true;

   function log(message) {
      if (DEBUG) {
        if (window.console) {
         window.console.log(message);
        }
       }
   }


   开发的时候总是会忘记，切记啊，因为这个问题都被测试提了2个bug，泪奔···


4、css超出字符换行.

   问题描述： 弹窗左边是一个表格，右边是一个表格，内容是apk的包名，存在很长的情况，有字母、下划线、数字等，表格的宽度设置的百分比，
   td包含的span的css设置的是word-wrap: break-word;word-break: break-all;强制任何情况下都换行。

   chrome下可以实现、但在Firefox、IE下都不行，会被撑开。

    问题解答： 一直在找word-wrap、word-break的用法，都没有找到问题的所在，span是行内元素，给它设置宽度是不能生效的，
    所以需要将span设置成display：block；
    
    
 5、IE8下异步上传apk的选择按钮不能触发input file change事件。

    问题描述： 现在做上传功能都不会用type=”file”元素的外观，太丑啦，一般都会有自定义设置的样式，easyui有专门的filebox组件，外观当然要借用，
    但是用ajaxuploadfile插件上传文件会无效，于是选用方案一：file控件设置成display:none，写js在点击选择按钮的时候触发file控件，
    可惜IE8下面不支持呀。

    问题解答： 网上到了下解决方案，将file设置成透明的，覆盖在“选择文件”按钮上。

    .pr { position: relative; }
    #file { position: absolute; width: 100%; height: 100%; top: 0; right: 0; opacity: 0; filter: alpha(opacity=0); }
    
    


js 操作 dom 的一些方法

来源：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList

一、Element.classList

是一个只读属性，返回一个元素的类属性的实时 DOMTokenList 集合。
e.g. var elementClasses = elementNodeReference.classList;

add( String [, String] ) 添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。
e.g. div.classList.add("anotherclass");

remove( String [,String] ) 删除指定的类值。
e.g. div.classList.remove("foo");

item ( Number ) 按集合中的索引返回类值。
e.g.

toggle ( String [, force] ) 当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。
                            当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它。
e.g. div.classList.toggle("visible"); // 如果visible是设置删除它，否则添加它
e.g. div.classList.toggle("visible", i < 10); // 添加/删除 visible，取决于测试条件，i小于10

contains( String ) 检查元素的类属性中是否存在指定的类值。
e.g.div.classList.contains("foo")

兼容性：desk: Chrome8+, ie10+, Safari (WebKit)5.1+, Firefox3.6+


来源：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector

二、document.querySelector()

返回第一个。
element = document.querySelector(selectors);
element 是一个 element 对象（DOM 元素）。
selectors 是一个字符串，包含一个或是多个 CSS 选择器 ，多个则以逗号分隔。
var el = document.querySelector(".myclass");
如果没有找到匹配元素，则返回 null，否则找到多个匹配元素，则返回第一个匹配到的元素。
如果选择器是一个 ID，并且这个 ID 在文档中错误地使用了多次，那么返回第一个匹配该 ID 的元素。
如果指定的选择器不合法，则抛出 SYNTAX_ERR 异常。
CSS 伪类不会返回任何元素
兼容性：desk: IE8+; mobile: IE9+


三、
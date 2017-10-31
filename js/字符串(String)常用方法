
[来源]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


String.fromCharCode()
根据指定的 Unicode 编码中的序号值来返回一个字符串。 所有浏览器都支持。
String.fromCharCode(40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60) // "()*+,-./0123456789:;<"


String.fromCodePoint() 
该方法使用指定的unicode参数返回一个primitive的字符串。与fromCharCode功能类似，但是支持的Unicode字符更全，但是浏览器支持情况不是太好，
目前ie以及safari还不支持。另外，性能并没有fromCharCode快。因为是ES6当中的新定义的特性，所以目前还不适合放到正式产品环境中去使用。ie不支持
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"


String.prototype.charAt()
charAt() 方法返回字符串中指定位置的字符。
str.charAt(index) index 0 到 字符串长度-1 的一个整数。
兼容性：全部支持
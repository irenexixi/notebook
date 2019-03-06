
[来源]：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

### String 对象
    - String 全局对象是一个用于字符串或一个字符序列的构造函数。
    - 字符串字面量：'string text' 、"string text"
    - 将其他值生成或转换成字符串：String(thing)、new String(thing)
    - 模板字面量：`hello ${who}`
    - 转义字符：\0 空字符， \' 单引号， \n换行， \r回车， \b退格， \uXXXX unicode码，\u{X} ... \u{XXXXXX} unicode codepoint， \xXX Latin-1 字符(x小写) 。和其他语言不同，javascript 的字符串不区分单引号和双引号，所以不论是单引号还是双引号的字符串，上面的转义字符都能运行 。
    - 长字符：其一，可以使用 + 运算符将多个字符串连接起来。其二，可以在每行末尾使用反斜杠字符（“\”），以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。
    - 从字符串中获取单个字符：
    - return 'cat'.charAt(1); // returns "a"
    - return 'cat'[1]; // returns "a" 使用括号访问字符串不可以对其进行删除或添加，因为字符串对应未知的属性并不是可读或配置的。
    - 字符串比较：使用比较操作符(>/</>=/<=) var a = "a"; var b = "b"; if (a < b) // true
    - 基本字符串和字符串对象的区别：字符串字面量 (通过单引号或双引号定义) 和 直接调用 String 方法(没有通过 new 生成字符串对象实例)的字符串都是基本字符串。JavaScript会自动将基本字符串转换为字符串对象，只有将基本字符串转化为字符串对象之后才可以使用字符串对象的方法。当基本字符串需要调用一个字符串对象才有的方法或者查询值的时候(基本字符串是没有这些方法的)，JavaScript 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。
    - var s_prim = "foo"; var s_obj = new String(s_prim); 
    - typeof s_prim // Logs "string"；typeof s_obj // Logs "object"

### String.prototype
    - String.prototype 属性表示 String原型对象。
    - writable - false; enumerable - false; configurable - false;
    - 所有 String 的实例都继承自 String.prototype. 任何String.prototype上的改变都会影响到所有的 String 实例。
    - String.prototype.constructor 用于创造对象的原型对象的特定的函数。
    - String.prototype.length 返回了字符串的长度。
    - N 用于访问第N个位置的字符，其中N是小于 length 和 0之间的正整数。这些属性都是“只读”性质，不能编辑。


### String.fromCharCode()
    - 返回使用指定的Unicode值序列创建的字符串，返回一个字符串，而不是一个 String 对象
    - String.fromCharCode(num1, ..., numN) 
    - num1, ..., numN一组序列数字，表示 Unicode 值
    - String.fromCharCode(65,66,67) // "ABC"
    - 无兼容性问题

### String.fromCodePoint()
    - String.fromCodePoint(num1[, ...[, numN]]) 返回使用指定的代码点序列创建的字符串。
    - num1, ..., numN一串 Unicode 编码
    - 返回值，使用 Unicode 编码创建的字符串，而不是一个 String 对象
    - RangeError 如果传入无效的 Unicode 编码，将会抛出一个RangeError
    - String.fromCodePoint(42);       // "*"
    - String.fromCodePoint(65, 90);   // "AZ"
    - String.fromCodePoint(0x404);    // "\u0404"
    - String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
    - chrome41+，firefox29，IE不支持，opera28+

### String.prototype.anchor()
    - anchor() 方法创建一个 <a> HTML 锚元素，被用作超文本靶标（hypertext target）
    - str.anchor(name) 
    - name 一个字符串，表示被创建的标签的 name 属性。
    - 使用 anchor 方法能够以编程方式在一个文档中创建和展现一个锚链接。
    - 使用 anchor 方法创建的锚点（anchors）将会成为 document.anchors 数组的元素。
    - var myString = "Table of Contents";
    - document.body.innerHTML = myString.anchor("contents_anchor");
    - <a name="contents_anchor">Table of Contents</a>
    - 无兼容性问题

### String.prototype.big() - 已废弃
    - blink()方法创建使字符串闪烁的 <blink> HTML 元素。
    - 'you'.big() // "<big>you</big>"
    - 无兼容性问题

### String.prototype.blink() - 已废弃
    - big()方法的作用是创建一个使字符串显示大号字体的<big>标签。
    - str.blink() 返回值是包含  <blink> HTML 元素的字符串。
    - blink()方法将字符串嵌入 <blink> 标签中： "<blink>str</blink>".
    - 无兼容性问题

### String.prototype.bold() - 已废弃
    - bold()方法会创建 HTML 元素 “b”，并将字符串加粗展示。
    - str.bold() 返回值是包含HTML元素 <b> 的字符串。
    - bold() 方法将一个字符串嵌入到<b></b>标记中。 // <b>Hello,world</b>.
    - 无兼容性问题

### String.prototype.charAt()
    - charAt() 方法从一个字符串中返回指定的字符。
    - str.charAt(index) 返回值是包含HTML元素 <b> 的字符串。
    - index 一个介于0 和字符串长度减1之间的整数。 (0~length-1).如果没有提供索引，charAt() 将使用0。如果指定的 index 值超出了该范围，则返回一个空字符串。
    - var anyString = "Brave new world"; 
    - anyString.charAt(0) // B
    - anyString.charAt(1) // r
    - 无兼容性问题

### String.prototype.charCodeAt()
    - charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元 (在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。
    - str.charCodeAt(index) 返回值是一表示给定索引处（String中index索引处）字符的 UTF-16 代码单元值的数字；如果索引超出范围，则返回 NaN。
    - index 一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。
    - var anyString = "Brave new world"; 
    - anyString.charAt(0) // B
    - anyString.charAt(1) // r
    - 无兼容性问题







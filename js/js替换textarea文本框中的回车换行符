
js 替换 textarea 文本框中的回车换行符

来源：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList

HTML里面的换行是<br />,而TextArea的换行是\n
js 获取到 textarea 文本框中的字符串，如果包含有回车换行符，在字符串中表现为 \n，而不是我们通常所见的 \r\n。

如果我们要获取用户在textarea中输入的回车位置，需要使用类似下面的代码：
var pos = content.indexOf("\n");

如果我们需要将回车替换为别的字符，例如br，需要使用类似下面的代码：
content = content.replace(/(\r|\n)/gi, '<br />');
content = content.replace(/(\r|\n)/gi, "；");

回车return ( Carriage Return ) - \r
换行next ( New line )- \n

Unix系统里，每行结尾只有“ <换行> ”，即“\n”；Windows系统里面，每行结尾是“ <换行> <回车> ”，即“\n\r”；Mac系统里，每行结尾是“ <回车> ”。
一个直接后果是，Unix/Mac系统下的文件在Windows里打开的话，所有文字会变成一行；而Windows里的文件在Unix/Mac下打开的话，在每行的结尾可能会多出一个^M符号。

[来源]：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

稀疏数组？

### Array 对象
    - Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

### Array.prototype 属性
    - 属性表示 Array 构造函数的原型，并允许您向所有 Array 对象添加新的属性和方法。
    - 鲜为人知的事实：Array.prototype 本身也是一个 Array。
    - Array.isArray(Array.prototype) => true
    - Array.prototype.length => 0
    - Array.prototype.constructor => Array 所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。
    - Array.prototype.constructor() => []; new Array() => [];
    
### Array.from()
    - Array.from(arrayLike[, mapFn[, thisArg]]) 从一个类似数组或可迭代对象中创建一个新的数组实例。
    - arrayLike 想要转换成数组的伪数组对象或可迭代对象。
    - mapFn (可选参数) 如果指定了该参数，新数组中的每个元素会执行该回调函数。
    - thisArg (可选参数) 可选参数，执行回调函数 mapFn 时 this 对象。
    - Array.from.length => 1
    - Array.from({a: 'a', b: 'b', c: 'c'}); => []
    - Array.from('foo'); => ["f", "o", "o"]
    - Array.from([1, 2, 3], x => x + x); => [2, 4, 6]
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持
    
## Array.isArray()
    - Array.isArray(obj) 用于确定传递的值是否是一个 Array。 
    - obj 需要检测的值。  
    - 返回值：如果对象是 Array，则为true; 否则为false。
    - Array.isArray([]); Array.isArray(new Array()); Array.isArray(Array.prototype); => true
    - Array.isArray({}); Array.isArray(null); Array.isArray(undefined); => false
    - 当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.
    - 兼容性：ie9+
    
### Array.of()
    - Array.of(element0[, element1[, ...[, elementN]]]) 
    - 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量和类型
    - elementN 任意个参数，将按顺序成为返回数组中的元素。
    - Array.of(1, 2, 3); => [1, 2, 3]
    - Array.of(undefined); => [undefined]
    - Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度
    - 为7的空数组（注意：这是指一个有7个空位的数组，而不是由7个 undefined 组成的数组）。
    - Array.of(7); => [7]  Array.of(1, 2, 3); => [1, 2, 3]
    - Array(7); => [ , , , , , , ] Array(1, 2, 3); => [1, 2, 3]
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持
    
## Array.prototype.concat()
    - var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
    - 用于合并两个或多个数组。此方法不会更改现有数组，返回一个新数组
    - valueN 将数组和/或值连接成新数组。
    - 需要合并的数组元素是数组或对象时：会保留引用,对新数组的操作会对原始数组产生影响
    - var a = ['a', 'b', 'c']; var b = ['x', 'y', 'z']; var c = a.concat(b, true); // c = ['a', 'b', 'c', 'x', 'y', 'z',true]
    - let num1 = [{id: 1}, {id: 2}]; let num2 = [{id: 3}, {id: 4}]; let nums = num1.concat(num2); // nums = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    - num1.push({id: 5}); 此时的 nums 不会更改 // num1 = [{id: 1}, {id: 2}, {id: 3}]; nums = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    - num1[0].name='qqli'; 此时 nums 会同时变化 // num1 = [{id: 1, name: "qqli"}, {id: 2}, {id: 3}]; nums = [{id: 1, name: "qqli"}, {id: 2}, {id: 3}, {id: 4}]
    - nums[1].name='jm'; 此时 num1 随 nums 变化而变化 // nums = [{id: 1, name: "qqli"}, {id: 2, name: "jm"}, {id: 3}, {id: 4}] num1 = [{id: 1, name: "qqli"}, {id: 2, name: "jm"}, {id: 3}];
    
### Array.prototype.copyWithin() 不太好用
    - 浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
    - arr.copyWithin(target[, start[, end]])
    - 返回值： 改变了的数组
    - target 0 为基底的索引，复制序列到该位置。如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
    - start 0 为基底的索引，开始复制元素的起始位置。如果 start 被忽略，copyWithin 将会从0开始复制。
    - end 0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果 end 被忽略，copyWithin 将会复制到 arr.length。
    - 参数target,start和end 必须为整数。如果是负数，将从末尾开始计算。
    - The copyWithin 是一个可变方法，它不会改变 this 的 length，但是会改变 this 本身的内容，且需要时会创建新的属性。
    - var array1 = [1, 2, 3, 4, 5]; array1.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持，其他浏览器都支持
    
### Array.prototype.entries() 
    - 返回一个新的Array 迭代器对象，该对象包含数组中每个索引的键/值对。
    - arr.entries();
    - Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持，chrome 38+, firefox 28+
    
### Array.prototype.every() 
    - 测试数组的所有元素是否都通过了指定函数的测试。
    - arr.every(callback[, thisArg])
    - callback 用来测试每个元素的函数。传入三个参数：元素值，元素的索引，原数组。
    - thisArg 执行 callback 时使用的 this 值。
    - every 不会改变原数组。
    - every 遍历的元素范围在第一次调用 callback 之前就已确定了。在调用 every 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是 every 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。
    - every 和数学中的"所有"类似，当所有的元素都符合条件才返回true。另外，空数组也是返回true。(空数组中所有元素都符合给定的条件，注：因为空数组没有元素)。
    - 兼容性：win7 下的 ie9+, win 10 的 ie 支持，其他浏览器支持
    
### Array.prototype.fill() 
    - 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。返回修改后的数组。
    - arr.fill(value[, start[, end]])
    - value 用来填充数组元素的值
    - start 可选。 起始索引，默认值为0。
    - end 可选。 终止索引，默认值为 this.length。[start, end) , 一个半开半闭区间.
    - fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的, 其默认值分别为 0 和 this 对象的 length 属性值.    
    - fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象.
    - fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本.当一个对象被传递给 fill 方法的时候, 填充数组的是这个对象的引用.
    - [1, 2, 3].fill(4); // [4, 4, 4]   [1, 2, 3].fill(4, 1); // [1, 4, 4]   [1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
    - var arr = Array(3).fill({}) // [{}, {}, {}];
    - arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持，chrome 45+, firefox 31+
    
### Array.prototype.filter() 
    - 不会改变原数组，创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 没有通过测试则返回空数组。
    - var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])
    - callback 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。返回true表示保留该元素（通过测试），false则不保留。
    - callback 的三个元素 element 当前在数组中处理的元素；index（可选） 正在处理元素在数组中的索引； array（可选） 调用了filter筛选器的数组；
    - filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。
    - let [...spread]= [12, 5, 8, 130, 44]; 等同于：let spread = 浅克隆([12, 5, 8, 130, 44]) 
    - var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    - const result = words.filter(word => word.length > 6); // ["exuberant", "destruction", "present"]
    - 兼容性：win7 下的 ie9+, win 10 的 ie 支持，其他浏览器支持
    
### Array.prototype.find()
    - 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
    - arr.find(callback[, thisArg])
    - callback 在数组每一项上执行的函数，接收 3 个参数：element 当前遍历到的元素。index 当前遍历到的索引。array 数组本身。
    - thisArg 可选，指定 callback 的 this 参数。
    - var array1 = [5, 12, 8, 130, 44]; var found = array1.find(function(element) { return element > 10; }); // 12
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持，chrome 45+, firefox 32+
    
### Array.prototype.findIndex()
    - 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
    - arr.findIndex(callback[, thisArg]) 参数同 find() 方法
    - var array1 = [5, 12, 8, 130, 44]; function findFirstLargeNumber(element) { return element > 13; } array1.findIndex(findFirstLargeNumber); // 3
    - 兼容性：win7 下的 ie 不支持, win 10 的 ie 支持，chrome 45+, firefox 32+
    
### Array.prototype.flat() 实验中
    - 会递归到指定深度将所有子数组连接，并返回一个新数组。
    - var newArray = arr.flat(depth)
    - depth 可选 指定嵌套数组中的结构深度，默认值为1。
    - var arr1 = [1, 2, [3, 4]]; arr1.flat(); // [1, 2, 3, 4]
    - var arr2 = [1, 2, [3, 4, [5, 6]]]; arr2.flat(); // [1, 2, 3, 4, [5, 6]]
    - var arr3 = [1, 2, [3, 4, [5, 6]]]; arr3.flat(2); // [1, 2, 3, 4, 5, 6]
    - 兼容性：win7/win10 下的 ie 不支持, chrome 69+, firefox 62+, safari 不支持
    
### Array.prototype.flatMap() 实验中
    - 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但flatMap通常在合并成一种方法的效率稍微高一些。
    - var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) { // 返回新数组的元素 }[, thisArg])
    - var arr1 = [1, 2, 3, 4]; arr1.map(x => [x * 2]); // [[2], [4], [6], [8]]
    - arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8] 
    - // only one level is flattened arr1.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]]
    - 兼容性：win7/win10 下的 ie 不支持, chrome 69+, firefox 62+, safari 不支持
    
### Array.prototype.forEach()
    - 对数组的每个元素执行一次提供的函数。注意: 没有返回一个新数组! & 没有返回值! 应用场景：为一些相同的元素，绑定事件处理器！
    - array.forEach(callback(currentValue, index, array){ //do something }, this)
    - array.forEach(callback[, thisArg])
    - forEach 方法按升序为数组中含有效值的每一项执行一次callback 函数，那些已删除（使用delete方法等情况）或者未初始化的项将被跳过（但不包括那些值为 undefined 的项）（例如在稀疏数组上）。
    - 注意： 没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，你可以用一个简单的循环作为替代。如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用 Array.every 或 Array.some。如果可用，新方法 find() 或者findIndex() 也可被用于真值测试的提早终止。
    - function logArrayElements(element, index, array) { console.log("a[" + index + "] = " + element); }
    - // 注意索引2被跳过了，因为在数组的这个位置没有项 
    - [2, 5, ,9].forEach(logArrayElements); // a[0] = 2 a[1] = 5 a[3] = 9
    - 兼容性：win7 下的 ie9+, win 10 的 ie 支持，其他浏览器支持
    
### Array.prototype.includes()
    - 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
    - arr.includes(searchElement)
    - arr.includes(searchElement, fromIndex)
    - var pets = ['cat', 'dog', 'bat']; console.log(pets.includes('cat')); // true
    - 如果fromIndex 大于等于数组长度 ，则返回 false 。该数组不会被搜索。
    - 兼容性：win7 下的 ie不支持, win 10 的 ie14+，其他浏览器支持
    
### Array.prototype.indexOf()
    - 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
    - arr.indexOf(searchElement)
    - arr.indexOf(searchElement[, fromIndex = 0])
    - var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    - console.log(beasts.indexOf('bison')); // 1
    - 兼容性：全支持
    
### Array.prototype.join()
    - 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。不会改变原数组。如果 arr.length 为0，则返回空字符串
    - str = arr.join() // 默认为 ","
    - str = arr.join("") // 分隔符 === 空字符串 ""，所有元素之间都没有任何字符。
    - str = arr.join(separator) // 分隔符
    - separator 指定一个字符串来分隔数组的每个元素。如果需要(separator)，将分隔符转换为字符串。
    - var elements = ['Fire', 'Wind', 'Rain']; console.log(elements.join()); // Fire,Wind,Rain
    - 所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。如果元素是undefined 或者null， 则会转化成空字符串。
    - 兼容性：全支持
    
### Array.prototype.keys()
    - 返回一个包含数组中每个索引键的Array Iterator对象。
    - arr.keys(), 返回一个新的 Array 迭代器对象。
    - 索引迭代器会包含那些没有对应元素的索引
    - var arr = ["a", , "c"];
    - var sparseKeys = Object.keys(arr); // ['0', '2']
    - var denseKeys = [...arr.keys()]; // [0, 1, 2]
    - 兼容性：win7 下的 ie不支持, win10 的 IE 支持，其他浏览器支持中上浏览器版本支持
    
### Array.prototype.lastIndexOf() ？fromIndex 为负值时不理解
    - 返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
    - arr.lastIndexOf(searchElement[,fromIndex = arr.length - 1])
    - lastIndexOf 使用严格相等（strict equality，即 ===）比较 searchElement 和数组中的元素。
    - 兼容性：win7 下的 ie9+, win10 的 IE 支持，其他浏览器支持中上浏览器版本支持
    
### Array.prototype.map()
    - 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
    - var new_array = arr.map(function callback(currentValue[, index[, array]]) { // Return element for new_array }[, thisArg]);
    - var array1 = [1, 4, 9, 16]; const map1 = array1.map(x => x * 2); // Array [2, 8, 18, 32]
    - 如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。
    - 如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。
    - map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）。
    - callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 
    - callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。
    - 兼容性：win7 下的 ie9+, win10 的 IE 支持，其他浏览器支持
    
### Array.prototype.pop()
    - 从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
    - arr.pop() 从数组中删除的元素(当数组为空时返回undefined)。
    - var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']; plants.pop(); // "tomato"
    - console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]
    - pop 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。
    - 兼容性：全支持

### Array.prototype.push()
    - 将一个或多个元素添加到数组的末尾，并返回新数组的长度。
    - arr.push(element1, ..., elementN) 当调用该方法时，新的 length 属性值将被返回。
    - var animals = ['pigs', 'goats', 'sheep']; console.log(animals.push('cows')); // 4
    - push 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。
    - var vegetables = ['parsnip', 'potato']; var moreVegs = ['celery', 'beetroot']; // 将第二个数组融合进第一个数组
    - // 相当于 vegetables.push('celery', 'beetroot'); Array.prototype.push.apply(vegetables, moreVegs);
    - 兼容性：全支持
    
### Array.prototype.reduce()
    - 对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
    - arr.reduce(callback[, initialValue])
    - callback 执行数组中每个值的函数，包含四个参数：
        - accumulator 累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。
        - currentValue 数组中正在处理的元素。
        - currentIndex可选 数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。
        - array可选 调用reduce的数组
    - initialValue可选 用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
    - 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：调用reduce时提供initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；没有提供 initialValue，accumulator取数组中的第一个值，currentValue取数组中的第二个值。
    - 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
    - 如果数组为空且没有提供initialValue，会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。
    - 提供初始值通常更安全.
    - const array1 = [1, 2, 3, 4];
    - const reducer = (accumulator, currentValue) => accumulator + currentValue; // 1 + 2 + 3 + 4
    - console.log(array1.reduce(reducer)); // expected output: 10
    - [{ x: 22 }, { x: 42 }].reduce( maxCallback ); // 42
    - [{ x: 22 }].reduce( maxCallback ); // { x: 22 }
    - [].reduce( maxCallback ); // TypeError
    - 兼容性：win7 下的 ie9+, win10 的 IE 支持，其他浏览器支持


### Array.prototype.reduceRight()
    - 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
    - arr.reduceRight(callback[, initialValue])
    - 参数和兼容性同 reduce()
    
### Array.prototype.reverse()
    - 将数组中的元素位置颠倒
    - arr.reverse() 返回该数组的引用，当然改变原数组
    - var myArray = ['one', 'two']; 
    - myArray.reverse(); console.log(myArray) // ['two', 'one']
    - 兼容性：全支持
    
### Array.prototype.shift()
    - 从数组中删除第一个元素，并返回该元素的值。其他元素的索引值随之减1，这个方法更改数组的长度。
    - arr.shift() 如果数组为空则返回 undefined
    - var array1 = [1, 2, 3]; var firstElement = array1.shift(); 
    - console.log(array1); // [2, 3] console.log(firstElement); // 1
    - shift 方法并不局限于数组：这个方法能够通过 call 或 apply 方法作用于类似数组的对象上。
    - 兼容性：Full support
    
### Array.prototype.slice()
    - 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
    - arr.slice(); // [0, end]
    - arr.slice(begin); // [begin, end] 如果begin大于等于array的长度，返回空。
    - arr.slice(begin, end); // [begin, end)
    - var a = ['a', 'b', 'c'];
    - var b = a.slice(0,1); //b 是 ["a"]; 
    - var c = a.slice(1);  //c 是 ["b", "c"]; 
    - var e = a.slice(-1,-2); //e 是 []
    - 数组的slice方法可以将类似数组的对象，变成真正的数组  var arr = Array.prototype.slice.call(arrayLike);
    - 兼容性：全支持
    
### Array.prototype.some()
    - 测试数组中某些元素是否通过由提供的函数实现的测试。如果回调函数返回任何数组元素的truthy值，则返回true；否则为false。
    - 对于放在空数组上的任何条件，此方法返回false。
    - arr.some(callback[, thisArg]) some 被调用时不会改变数组。
    - callback 用来测试每个元素的函数，接受三个参数：
        - currentValue 数组中正在处理的元素。
        - index 可选 数组中正在处理的元素的索引值。
        - array可选 some()被调用的数组。
    - thisArg可选 执行 callback 时使用的 this 值。
    - some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。
    - 兼容性：win7 下的 ie9+, win10 的 IE 支持，其他浏览器支持
    
### Array.prototype.sort()
    - 用原地算法对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
    - arr.sort([compareFunction]) 返回值是排序后的数组。请注意，数组已原地排序，并且不进行复制。
    - compareFunction 可选 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
    - 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
    - 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
    - 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
    - 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
    - 兼容性：全支持
    
### Array.prototype.splice()
    - 通过删除现有元素和/或添加新元素来更改一个数组的内容。
    - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    - start​ 指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。
    - deleteCount 可选 整数，表示要移除的数组元素的个数。如果 deleteCount 是 0，则不移除元素。这种情况下，至少应添加一个新元素。如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。如果deleteCount被省略，则其相当于(arr.length - start)。
    - item1, item2, ... 可选 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
    - 返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
    - 注释：请注意，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
    - 兼容性：全支持
    
### Array.prototype.toLocalString() 不理解
    - arr.toLocaleString([locales[,options]]);
    - locales 可选 带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。
    - options 可选 一个可配置属性的对象，对于数字 Number.prototype.toLocaleString()，对于日期Date.prototype.toLocaleString().
    - 返回值：表示数组元素的字符串。
    - var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    - var localeString = array1.toLocaleString('en', {timeZone: "UTC"});
    - console.log(localeString); // expected output: "1,a,12/21/1997, 2:12:00 PM"
    - 兼容性：浏览器基本支持

### Array.prototype.toSource() 非标准
    - 返回一个字符串,代表该数组的源代码.在调试时,你可以使用toSource方法来查看一个数组的内容.
    - array.toSource()
    - var alpha = new Array("a", "b", "c"); alpha.toSource(); //返回["a", "b", "c"]
    - 兼容性：只有火狐浏览器支持
    
### Array.prototype.toString()
    - 返回一个字符串，表示指定的数组及其元素。
    - arr.toString()
    - var array1 = [1, 2, 'a', '1a']; console.log(array1.toString()); // "1,2,a,1a"
    - 兼容性：全支持
    
### Array.prototype.unshift()
    - 将一个或多个元素添加到数组的开头，并返回新数组的长度。
    - arr.unshift(element1, ..., elementN)
    - elementN 要添加到数组开头的元素。
    - 兼容性：全支持
    
### Array.prototype.values()
    - 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
    - arr.values()
    - let arr = ['w', 'y', 'k', 'o', 'p']; let eArr = arr.values(); 
    - // 使用 for...of 循环进行迭代, 您的浏览器必须支持 for..of 循环
    - // 以及 let —— 将变量作用域限定在 for 循环中
    - for (let letter of eArr) {
        console.log(letter);
    - }
    - 另外一种迭代方式 console.log(eArr.next().value); // w
    - 兼容性：win7下的ie不支持,其他浏览器支持


10. array.unshift(item…)
推荐些的较好的博客：http://www.cnblogs.com/tianguook/archive/2010/09/30/1839648.html

8. array.sort(comparefn)

sort方法对array中的内容进行排序。它不能正确的给一组数字排序。

var n = ['4', '8', '15', '16', '23', '42'];
n.sort(); //n是 ["15", "16", "23", "4", "42", "8"]

JavaScript的默认 比较函数把要排序的元素视为字符串。并未在比较这些元素之前先检测他们的类型，所以比较数字时，会将它们转换成字符串，
于是得到一个错误的结果。

幸运的是，可以使用自己的比较函数来替换默认的比较函数。比较函数接收两个参数，如果这两个参数相等则返回0，如果第一个参数应该排在前面，返回一个负数，
如果第二个参数排在前面，则返回一个正数。

n.sort(function(a, b){
    return a-b
});   //["4", "8", "15", "16", "23", "42"]

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function(a, b){
    if(a === b){
        return 0;
    }

   if(typeof a === typeof b){
       return a < b ? -1 : 1;
   }

   return typeof a < typeof b ? -1:1;

});  
console.log(m); //[4, 8, 15, 16, 23, 42, "a", "aa", "bb"]

//m = ['aa', 'bb', 'aa', '4', '8', '15', '16', '23', '42'];
//输出：["15", "16", "23", "4", "42", "8", "aa", "aa", "bb"]

//m = ['aa', 'bb', 'A', '4', '8', '15', '16', '23', '42'];
//输出：["15", "16", "23", "4", "42", "8", "A", "aa", "bb"]

//m = ['aa', 'bb', 'AA', '4', '8', '15', '16', '23', '42'];
//输出：["15", "16", "23", "4", "42", "8", "AA", "aa", "bb"]

如果大小写不重要，比较函数应该在比较之前先将两个运算符转换为小写。

更智能的比较函数。

//by函数接受一个成员名字符串作为参数
//并返回一个可以用来对包含该成员的对象数组进行排序的比较函数。
var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            }
        }
    }
};
var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Moe', last: 'Hesser'},
    {first: 'Joe', last: 'Desser'},
    {first: 'Soe', last: 'Hesser'},
    {first: 'Loe', last: 'Fesser'},
    {first: 'Coe', last: 'Hesser'}
];
console.log(s.sort(by('first')));
//console.log(s.sort(by('first')).sort(by('last'))); 不能保证顺序是对的

如果想要基于多个键值进行排序，修改by函数，让其可以接受第二个参数，当主要的键值产生一个匹配的时候，另一个compare方法将被调用已决高下。

var by = function (name, minor) {
    return function (o, p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            }
        }
    }
};
s.sort(by('last', by('first')));


11、判断一个变量是数组

// 这里提供两种js方法。返回true则是数组。

var array = new Array("1", "2", "3", "4", "5");
alert(array instanceof Array);
alert(array.constructor == Array);

// 较为严谨并且通用的方法：
function isArray(object){
    return object && typeof object==='object' &&
            Array == object.constructor;
}

详细说明链接 http://www.cnblogs.com/mofish/p/3388427.html


12、Array.prototype.forEach.call

由于字符串也是类似数组的对象，所以也可以用遍历。

Array.prototype.forEach.call('abc', function(chr) {
  console.log(chr);
});
// a
// b
// c



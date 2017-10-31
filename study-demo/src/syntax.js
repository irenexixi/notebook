console.log('语法');
/**
 * 定义变量
 * @type {number}
 */
// const 定义常量
const pageSize = 10;

// var let
var a = 5;
var b = 10;
if (a === 5) {
    let a = 4;
    let b = 1;

    console.log('a', a, 'b', b);
}

console.log('a', a, 'b', b);

for (let i = 0; i < 10; i++) {
    // ...
}

/**
 * 变量提升
 */
function example() {
    //console.log(notDefined); //throw error, Uncaught ReferenceError
}

function example2() {
    // debugger;
    console.log('declareButNotAssign', declareButNotAssign);
    var declareButNotAssign = true;
}

function example3() {
    // console.log(declareButNotAssign);  //throw error
    const declareButNotAssign = true;
}

example();
example2();
example3();

// 命名函数表达式变量名会被提升，函数以及函数内容不会被提升
function example4() {
    console.log('named fun', named);  //undefined

    // named();   // named is not a function

    // superPower(); // superPower is not a defined

    var named = function superPower() {
        console.log('flying');
    }
}

example4();


// 函数声明的名称和函数体都会被提升
function example5() {
    console.log(superPower);  //undefined

    superPower(); // superPower is not a defined

    function superPower() {
        console.log('superPower');
    }
}

example5();


// 定义数字
const num = 1;

// 定义布尔值
const bool = true;

// 定义对象
// 使用字面值创建对象
const obj = {};

// 使用对象属性值的简写
const ll = 'll';
let obj2 = {
    ll,
    a: 'a',
    dog: {
        name:'xinxin',
        age: 1.5
    }
};
console.log('obj2', obj2);
// 使用扩展运算符 ... 拷贝对象
let obj2Copy = {...obj2, b: 'b'};
console.log('obj2', obj2, 'obj2Copy', obj2Copy);


// 定义数组
// 使用直接量创建数组
let arr = [1, 2, 3];

// 使用push增量元素，而不是直接赋值
arr.push(4);

// 使用扩展运算符 ... 复制数组
let arrCopy = [...arr];
arrCopy.push('test');
console.log('arr', arr, 'arrCopy', arrCopy);

// 类数组转换成数组， 不会改变原数组
function list() {
    console.log('arguments', arguments);
    return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3, 'dadada'); // [1, 2, 3]
console.log('list1', list1);


// 定义字符串
const name = 'qqli';
// 多行纯字符串
const name2 = 'tttt' +
    'rrrrrr';
// 模板字符串, 反引号
const strText = `fullName ${name}`;
const strText2 = `In JavaScript this is
not legal.`;
console.log('strText', strText);
console.log(strText2);

// 定义函数
// 匿名函数表达式
const anonymous = function () {
    return true;
};

// 命名函数式表达式
const named = function named() {
    return true;
};

// 立即调用的函数式表达式
(function () {
    console.log('IIFE Immediately invoking function expression')
})();

// 传参
// ...args, rest 参数，用户获取函数的多余参数，放入一个数组中
function concatenateAll(...args) {
    console.log('args', args);
}
concatenateAll(1, 2, 3, 'qqli');

// 给参数指定默认值
function handThings(opts = {}, ...args) {
    console.log('opts', opts);
    console.log('opts args', args);
}
handThings();
handThings(1, 2, 3, 'qqli');


/**
 * 属性访问
 */
// 使用. 来访问对象的属性
const luke = {
    jedi: true,
    age: 28
};
const isJedi = luke.jedi;

// 当通过变量访问对象的属性时使用[]
function getProp(prop) {
    return luke[prop];
}

const isJedi2 = getProp('jedi');

/**
 * 比较运算符与等号
 */
console.log('-5 == false', -5 == false);
console.log('-0 == false', -0 == false);
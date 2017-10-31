console.log('ES6 语法');

/**
 * 箭头函数
 */
// 正常函数写法
let arr = [1, 2, 3].map(function (x) {
    return x * x;
});

console.log('arr ', arr);

// 箭头函数写法
[1, 2, 3].map((x) => {
    return x * x;
});

//简写
[1, 2, 3].map(x => x * x);

// 正常函数写法
const values = [3, 5, 1, 7, 2];
values.sort(function (a, b) {
    return a - b;
});

console.log('values', values);

// 箭头函数写法
values.sort((a, b) => a - b);
console.log('values', values);

// 函数的this
function foo() {
    // console.log('this', this);
    // (function () {
        // console.log('this', this);
        // console.log('id:', this.id);
    // })();


    (() => {
        console.log('this', this);
        console.log('id:', this.id);
    })();
}

var id = 21;

foo.call({id: 42});

//
var handler = {
    id: '123456',

    init: function () {
        document.addEventListener('click', event => this.doSomething(event.type), false);
    },

    doSomething: function (type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }
};


/**
 * 变量的解构赋值
 */
// 对象的解构赋值
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
    const {firstName, lastName, age} = user;
    return `${firstName} ${lastName} ${age}`;
}

const fullName = getFullName({
    firstName: 'qq',
    lastName: 'li',
    age: '18'
});

console.log('fullName', fullName);

// 数组的解构赋值
let [head, ...tail] = [1, 2, 3, 4];
console.log('head', head); // 1
console.log('tail', tail); // [2, 3, 4]


/**
 * 模块
 */
import Fruit, {text} from 'a.js';
console.log('Fruit', Fruit);
console.log('text', text);


/**
 * 构造函数
 */
//es5
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log('p', p);
console.log('p', p.toString());

//定义类
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    toValue() {

    }
}

let point2 = new Point2();


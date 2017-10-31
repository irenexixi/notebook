/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _a2 = __webpack_require__(2);

var _a3 = _interopRequireDefault(_a2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 语法
 */

/**
 * 变量
 * @type {number}
 */
// const 定义常量
var pageSize = 10;

// var let
var a = 5;
var b = 10;
if (a === 5) {
    var _a = 4;
    var _b = 1;

    console.log('a', _a, 'b', _b);
}

console.log('a', a, 'b', b);

for (var i = 0; i < 10; i++) {}
// ...


/**
 * 变量提升
 */
function example() {
    //console.log(notDefined); //throw error, Uncaught ReferenceError
}

function example2() {
    // debugger;
    console.log(declareButNotAssign);
    var declareButNotAssign = true;
}

function example3() {
    // console.log(declareButNotAssign);  //throw error
    var declareButNotAssign = true;
}

example();
example2();
example3();

// 命名函数表达式变量名会被提升，函数以及函数内容不会被提升
function example4() {
    console.log('named fun', named); //undefined

    //named();   // named is not a function

    //superPower(); // superPower is not a defined

    var named = function superPower() {
        console.log('flying');
    };
}

example4();

// 函数声明的名称和函数体都会被提升
function example5() {
    console.log(superPower); //undefined

    superPower(); // superPower is not a defined

    function superPower() {
        console.log('superPower');
    }
}

example5();

/**
 * 属性访问
 */
// 使用. 来访问对象的属性
var luke = {
    jedi: true,
    age: 28
};
var isJedi = luke.jedi;

// 当通过变量访问对象的属性时使用[]
function getProp(prop) {
    return luke[prop];
}

var isJedi2 = getProp('jedi');

/**
 * 比较运算符与等号
 */
console.log('-5 == false', -5 == false);
console.log('-0 == false', -0 == false);

/**
 * 箭头函数
 */
// 正常函数写法
var arr = [1, 2, 3].map(function (x) {
    return x * x;
});

console.log('arr ', arr);

// 箭头函数写法
[1, 2, 3].map(function (x) {
    return x * x;
});

//简写
[1, 2, 3].map(function (x) {
    return x * x;
});

// 正常函数写法
var values = [3, 5, 1, 7, 2];
values.sort(function (a, b) {
    return a - b;
});

console.log('values', values);

// 箭头函数写法
values.sort(function (a, b) {
    return a - b;
});
console.log('values', values);

// 函数的this
function foo() {
    var _this = this;

    // console.log('this', this);
    // (function () {
    // console.log('this', this);
    // console.log('id:', this.id);
    // })();


    (function () {
        console.log('this', _this);
        console.log('id:', _this.id);
    })();
}

var id = 21;

foo.call({ id: 42 });

//
var handler = {
    id: '123456',

    init: function init() {
        var _this2 = this;

        document.addEventListener('click', function (event) {
            return _this2.doSomething(event.type);
        }, false);
    },

    doSomething: function doSomething(type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }
};

/**
 * 变量的解构赋值
 */
// 对象的解构赋值
// bad
function getFullName(user) {
    var firstName = user.firstName;
    var lastName = user.lastName;

    return firstName + ' ' + lastName;
}

// good
function getFullName(user) {
    var firstName = user.firstName,
        lastName = user.lastName,
        age = user.age;

    return firstName + ' ' + lastName + ' ' + age;
}

var fullName = getFullName({
    firstName: 'qq',
    lastName: 'li',
    age: '18'
});

console.log('fullName', fullName);

// 数组的解构赋值
var head = 1,
    tail = [2, 3, 4];

console.log('head', head); // 1
console.log('tail', tail); // [2, 3, 4]


/**
 * 模块
 */

console.log('Fruit', _a3.default);

/**
 * 构造函数
 */
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

var Point2 = function () {
    function Point2(x, y) {
        _classCallCheck(this, Point2);

        this.x = x;
        this.y = y;
    }

    _createClass(Point2, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }, {
        key: 'toValue',
        value: function toValue() {}
    }]);

    return Point2;
}();

var point2 = new Point2();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by qqli on 2017/7/9.
 */
console.log('a.js');

var Fruit = {
  apple: 10,
  banner: 20
};

exports.default = Fruit;

/***/ })
/******/ ]);
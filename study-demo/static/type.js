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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// 基本数据类型

// 类型
// 原始值（原始类型）
var foo = 1;
var bar = foo;
bar = 9;
console.log('foo', foo, 'bar', bar);

// 复杂类型（引用类型）
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2[3] = 4;
console.log('arr1', arr1, 'arr2', arr2);

// 判断变量的类型
console.log(Object.prototype.toString.call(arr1));
console.log(Object.prototype.toString.call(foo));
console.log(Object.prototype.toString.call('foo'));

// null
var nullDemo = null;
console.log('nullDemo', nullDemo);
console.log('nullType', Object.prototype.toString.call(null));

// undefined
// window.undefined;
var undefinedDemo = void 0;
console.log('undefinedDemo', undefinedDemo);
console.log('undefinedType', Object.prototype.toString.call(undefined));

console.log('null == undefined', null == undefined);
console.log('null === undefined', null === undefined);

// 定义数字
var num = 1;

// 定义布尔值
var bool = true;

// 定义对象 
// 使用字面值创建对象
var obj = {};

// 使用对象属性值的简写
var ll = 'll';
var obj2 = {
    ll: ll,
    a: 'a',
    dog: {
        name: 'xinxin',
        age: 1.5
    }
};
console.log('obj2', obj2);
// 使用扩展运算符 ... 拷贝对象
var obj2Copy = _extends({}, obj2, { b: 'b' });
console.log('obj2', obj2, 'obj2Copy', obj2Copy);

// 定义数组
// 使用直接量创建数组
var arr = [1, 2, 3];

// 使用push增量元素，而不是直接赋值
arr.push(4);

// 使用扩展运算符 ... 复制数组
var arrCopy = [].concat(arr);
arrCopy.push('test');
console.log('arr', arr, 'arrCopy', arrCopy);

// 类数组转换成数组， 不会改变原数组
function list() {
    return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3, 'dadada'); // [1, 2, 3]
console.log('list1', list1);

// 定义字符串
var name = 'qqli';
// 多行纯字符串
var name2 = 'tttt' + 'rrrrrr';
// 模板字符串, 反引号
var strText = 'fullName ' + name;
var strText2 = 'In JavaScript this is\nnot legal.';
console.log('strText', strText);
console.log(strText2);

// 定义函数
// 匿名函数表达式
var anonymous = function anonymous() {
    return true;
};

// 命名函数式表达式
var named = function named() {
    return true;
};

// 立即调用的函数式表达式
(function () {
    console.log('IIFE Immediately invoking function expression');
})();

// 传参
// ...args, rest 参数，用户获取函数的多余参数，放入一个数组中
function concatenateAll() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log('args', args);
}
concatenateAll(1, 2, 3, 'qqli');

// 给参数指定默认值
function handThings() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    console.log('opts', opts);

    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    console.log('opts args', args);
}
handThings();
handThings(1, 2, 3, 'qqli');

/***/ })
/******/ ]);
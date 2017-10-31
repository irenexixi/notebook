// 基本数据类型
console.log('数据类型');

// 类型
// 原始值（原始类型）
const foo = 1;
let bar = foo;
bar = 9;
console.log('foo', foo, 'bar', bar);

// 复杂类型（引用类型）
const arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[3] = 4;
console.log('arr1', arr1, 'arr2', arr2);

// 判断变量的类型 typeof
console.log(Object.prototype.toString.call(arr1));
console.log(Object.prototype.toString.call(foo));
console.log(Object.prototype.toString.call('foo'));


// null
const nullDemo = null;
console.log('nullDemo', nullDemo);
console.log('nullType', Object.prototype.toString.call(null));

// undefined
// window.undefined;
let undefinedDemo;
console.log('undefinedDemo', undefinedDemo);
console.log('undefinedType', Object.prototype.toString.call(undefined));

console.log('null == undefined', null == undefined); // true
console.log('null === undefined', null === undefined); // false
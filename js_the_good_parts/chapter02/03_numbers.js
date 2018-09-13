// JavaScript 没有分离出整形
// 1 和 1.0 的值相同
var n1 = 1;
var n2 = 1.0;
console.log(n1 === n2); // true

// 用指数符号 e 表示数值
var v1 = 100;
var v2 = 1e2;
console.log(v1 === v2); // true

// NaN 表示一个不能产生正常结果的运算结果
var e1 = parseInt("abc"); // 操作假,产生 NaN

// isNaN(number) 可以检测 NaN
console.log('parseInt("abc") = ', e1, ', isNaN(e1) = ', isNaN(e1));
// parseInt("abc") =  NaN , isNaN(e1) =  true

// 格式化输出
console.log('parseInt("abc") = %d, isNaN(e1) = %s', e1, isNaN(e1));
// parseInt("abc") = NaN, isNaN(e1) = true

// Infinity 表示所有大于 1.79769313486231570e+308 的数值
var i1 = 100 / 0; // 除 0 生成 Infinity
console.log('i1 = %d, i1 === Infinity 结果 %s', i1, i1 === Infinity);
// i1 = Infinity, i1 === Infinity 结果 true

console.log('Infinity > 1.79769313486231570e+308 结果 ', Infinity > 1.79769313486231570e+308);
// Infinity > 1.79769313486231570e+308 结果  true

// Math.floor
console.log('Math.floor(1.79769313486231570) = ', Math.floor(1.79769313486231570));
// Math.floor(1.79769313486231570) =  1
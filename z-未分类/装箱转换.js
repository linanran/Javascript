/*
将普通类型转换成对象
如：数字10转换为Number对象
装箱机制会频繁产生临时对象，在一些对性能要求笔记爱哦高的场景下，应当避免对基本类型做装箱转换
 */

var symbolObject = (function(){ return this; }).call(Symbol("a"));

console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true

//方式2
var symbolObject = Object(Symbol("a"));

console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true

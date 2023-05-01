/*
数值类型
 */

/*
数值类型的相等
 */
let a=-0;
let b=+0;

console.log( 0.1 + 0.2 == 0.3);//错误方式
/*
number精度丢失问题
number类型运算都要想将其转化为二进制，将二进制运算，运算的结果再转化为十进制，因为number是64位双精度，小数部分只有52位，
但0.1转化成为二进制是无限循环的，所以四舍五入了，这里就发生了精度丢失，0.1的二进制和0.2的二进制相加需要保留有效数字，
所以又发生了精度丢失，所以结果为0.300000000000004，所以为false，而0.2+0.3恰好两个转化成为二进制和相加的过程都不会发生精度丢失，
所以为true
 */
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);//正确方式

console.log(Number.isInteger(1));     // true
console.log(Number.isInteger(1.00));  // true
console.log(Number.isInteger(1.01));  // false

let num = 10;
console.log(num.toFixed(2));  // "10.00"

num = 10.005;
console.log(num.toFixed(2));  // "10.01"

num = 10;
console.log(num.toExponential(1));  // "1.0e+1"

num = 99;
console.log(num.toPrecision(1));  // "1e+2"
console.log(num.toPrecision(2));  // "99"
console.log(num.toPrecision(3));  // "99.0"

let numberObject = Number(10);
// let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject);       // "object"
console.log(typeof numberValue);        // "number"
console.log(numberObject instanceof Number);  // true
console.log(numberValue instanceof Number);   // false

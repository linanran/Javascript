/*
String的长度 2的53次方-1  这代表这编码长度，不同的编码长度不同
 */

let s1 = "some text";
let s2 = s1.substring(2);
//
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;
//
let s1 = "some text";
s1.color = "red";
console.log(s1.color);   // undefined
//
let value = "25";
let number = Number(value);   // casting function
console.log(typeof number);     // "number"
let obj = new Number(value);  // constructor
console.log(typeof obj);        // "object"
let message = "foobarbaz";
/*
startWith endWith
 */
console.log(message.startsWith("foo"));  // true
console.log(message.startsWith("bar"));  // false

console.log(message.endsWith("baz"));    // true
console.log(message.endsWith("bar"));    // false

console.log(message.includes("bar"));    // true
console.log(message.includes("qux"));    // false


console.log(message.startsWith("foo"));     // true
console.log(message.startsWith("foo", 1));  // false

console.log(message.includes("bar"));       // true
console.log(message.includes("bar", 4));    // false
/*
indexOf lastIndexOf
 */
let stringValue = "hello world";
console.log(stringValue.indexOf("o"));      // 4
console.log(stringValue.lastIndexOf("o"));  // 7

console.log(stringValue.indexOf("o", 6));      // 7
console.log(stringValue.lastIndexOf("o", 6));  // 4
/*
查找字符串中所有e字符的下标位置
 */
let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");

while(pos > -1) {
    positions.push(pos);
    pos = stringValue.indexOf("e", pos + 1);
}

console.log(positions);  // "3,24,32,35,52"
/*
concat 连接字符串
 */
let stringValue = "hello ";
let result = stringValue.concat("world");

console.log(result);       // "hello world"
console.log(stringValue);  // "hello"

let result = stringValue.concat("world", "!");

console.log(result);       // "hello world!"
console.log(stringValue);  // "hello"
/*
slice substring substr 截取字符串
 */
let stringValue = "hello world";
console.log(stringValue.slice(3));        // "lo world"
console.log(stringValue.substring(3));    // "lo world"
console.log(stringValue.substr(3));       // "lo world"
console.log(stringValue.slice(3, 7));     // "lo w"
console.log(stringValue.substring(3,7));  // "lo w"
console.log(stringValue.substr(3, 7));    // "lo worl"

console.log(stringValue.slice(-3));         // "rld"
console.log(stringValue.substring(-3));     // "hello world"
console.log(stringValue.substr(-3));        // "rld"
console.log(stringValue.slice(3, -4));      // "lo w"
console.log(stringValue.substring(3, -4));  // "hel"
console.log(stringValue.substr(3, -4));     // "" (empty string)
/*
split 分隔字符串
 */
let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(",");       // ["red", "blue", "green", "yellow"]
let colors2 = colorText.split(",", 2);    // ["red", "blue"]
let colors3 = colorText.split(/[^\,]+/);  // ["", ",", ",", ",", ""]
/*
padStart 增加字符串长度方法
 */
let stringValue = "foo";

console.log(stringValue.padStart(6));       // "   foo"
console.log(stringValue.padStart(9, "."));  // "......foo"

console.log(stringValue.padEnd(6));         // "foo   "
console.log(stringValue.padEnd(9, "."));    // "foo......"
/*
trim 去掉前后多余的空格
 */
let stringValue = "  hello world  ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue);         // "  hello world  "
console.log(trimmedStringValue);  // "hello world"

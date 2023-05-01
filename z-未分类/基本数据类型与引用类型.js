let s = "Nicholas";
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();

console.log(typeof s);   // string
console.log(typeof i);   // number
console.log(typeof b);   // boolean
console.log(typeof u);   // undefined
console.log(typeof n);   // object
console.log(typeof o);   // object

result = variable instanceof constructor

console.log(person instanceof Object);   // is the variable person an Object?
console.log(colors instanceof Array);    // is the variable colors an Array?
console.log(pattern instanceof RegExp);  // is the variable pattern a RegExp?
/*
对象传递
 */
function setName(obj) {
    obj.name = "Nicholas";
}

let person = new Object();
setName(person);
console.log(person.name);  // "Nicholas"

function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}

let person = new Object();
setName(person);
console.log(person.name);  // "Nicholas"
/*
基本类型与对象的赋值操作
 */
let num1 = 5;
let num2 = num1;


let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name);  // "Nicholas"
/*
对象可以定义属性，基本类型不可以
 */
let person = new Object();
person.name = "Nicholas";
console.log(person.name);  // "Nicholas"

let name = "Nicholas";
name.age = 27;
console.log(name.age);  // undefined

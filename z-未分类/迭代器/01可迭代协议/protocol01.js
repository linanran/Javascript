/*
1，迭代的数据结构有哪些？
    数组、对象
2，可迭代协议？
    可迭代意味着可以通过for in获取数据，也意味着该对象遵循了可迭代协议，遵循可迭代协议也就是实现了Iterable接口。
    iterable：可迭代对象，实现了迭代协议的对象
3，一个普通的对象如何实现可迭代协议，变成可迭代对象？
    存在一个默认迭代器属性（Symbol.iterator），且属性必须引用一个迭代器工厂函数，调用该函数返回一个新的迭代器
    iterator：迭代器
 */
let num = 1;
let obj = {};

// These types do not have iterator factories
console.log(num[Symbol.iterator]);  // undefined
console.log(obj[Symbol.iterator]);  // undefined

let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
//let els = document.querySelectorAll('div');
function test(){
    console.log("aaa");
}
console.log(test);
// These types all have iterator factories
console.log(str[Symbol.iterator]);  // f values() { [native code] }
console.log(arr[Symbol.iterator]);  // f values() { [native code] }
console.log(map[Symbol.iterator]);  // f values() { [native code] }
console.log(set[Symbol.iterator]);  // f values() { [native code] }
//console.log(els[Symbol.iterator]);  // f values() { [native code] }

// Invoking the factory function produces an Iterator
console.log(str[Symbol.iterator]());  // StringIterator {}
console.log(arr[Symbol.iterator]());  // ArrayIterator {}
console.log(map[Symbol.iterator]());  // MapIterator {}
console.log(set[Symbol.iterator]());  // SetIterator {}
//console.log(els[Symbol.iterator]());  // ArrayIterator {}


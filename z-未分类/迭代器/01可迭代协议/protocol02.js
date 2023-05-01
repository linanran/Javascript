/*
4，可迭代对象的语言特性包括：
    for-of循环
    数组解构
    扩展操作符
    Array.from
    创建集合
    创建映射
    Promise.all()
    Promise.race()
    yield*操作符，在生成器中使用

 */
let arr = ['foo', 'bar', 'baz'];

// for...of loops
for (let el of arr) {
  console.log(el);
}
// foo
// bar
// baz

// Array destructuring
let [a, b, c] = arr;
console.log(a, b, c);  // foo, bar, baz

// 扩展操作符
let arr2 = [...arr];
console.log(arr2);  // ['foo', 'bar', 'baz']

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3);  // ['foo', 'bar', 'baz']

// Set constructor
let set = new Set(arr);
console.log(set);  // Set(3) {'foo', 'bar', 'baz'}

// Map constructor
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs);  // [['foo', 0], ['bar', 1], ['baz', 2]]
let map = new Map(pairs);
console.log(map);  // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }
IteratorPatternExample02.js
// Arrays have finite countable elements
// In-order traversal visits each index in increasing index order
let arr2 = [3, 1, 4];

// Sets have finite countable elements
// In-order traversal visits each value in insertion order
let set2 = new Set().add(3).add(1).add(4);
//这里数组和集合都是有序有个数有索引的

/*
5，迭代器协议
    1，使用next方法可在迭代器对象中遍历数据
    2，每次调用next都会返回一个IteratorResult对象
    3，对象包含两个属性，第一个属性done表示是否可以再次调用next，value表示迭代对象返回的值
    4，第一个值为true表示迭代结束
    5，迭代器对象在迭代期间被修改了，那么迭代器也会反映相应的变化
 */
// 可迭代对象
let arr = ['foo', 'bar'];

// 迭代器工厂函数
console.log(arr[Symbol.iterator]);  // function: values() { [native code] }

// 调用迭代器工厂函数返回迭代器
let iter = arr[Symbol.iterator]();
console.log(iter);  // ArrayIterator {}

// 执行迭代 done为true时，后面调用next都会返回同样的值
console.log(iter.next());  // { done: false, value: 'foo' }
console.log(iter.next());  // { done: false, value: 'bar' }
console.log(iter.next());  // { done: true, value: undefined }
//不同迭代器的实例相互没有关系
let arr2 = ['foo', 'bar'];
let iter1 = arr2[Symbol.iterator]();
let iter2 = arr2[Symbol.iterator]();

console.log(iter1.next());  // { done: false, value: 'foo' }
console.log(iter2.next());  // { done: false, value: 'foo' }
console.log(iter2.next());  // { done: false, value: 'bar' }
console.log(iter1.next());  // { done: false, value: 'bar' }
//迭代器
let arr3 = ['foo', 'baz'];
let iter3 = arr3[Symbol.iterator]();

console.log(iter3.next());  // { done: false, value: 'foo' }

// Insert value in the middle of array
arr3.splice(1, 0, 'bar');

console.log(iter3.next());  // { done: false, value: 'bar' }
console.log(iter3.next());  // { done: false, value: 'baz' }
console.log(iter3.next());  // { done: true, value: undefined }

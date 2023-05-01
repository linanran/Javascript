function* generatorFn() {}

const g = generatorFn();
//生成器对象及方法
console.log(g);         // generatorFn {<suspended>}
console.log(g.next);    // f next() { [native code] }
console.log(g.return);  // f return() { [native code] }
console.log(g.throw);   // f throw() { [native code] }
//----
function* generatorFn() {
    yield;
}

let generatorObject = generatorFn();

console.log(generatorObject.next());  // { done: false, value: undefined }
console.log(generatorObject.next());  // { done: true, value: undefined }
GeneratorYieldExample01.js
//yield中端器
function* generatorFn() {
    yield 'foo';
    yield 'bar';
    return 'baz';
}

let generatorObject = generatorFn();

console.log(generatorObject.next());  // { done: false, value: 'foo' }
console.log(generatorObject.next());  // { done: false, value: 'bar' }
console.log(generatorObject.next());  // { done: true, value: 'baz' }
//每个生成器都是独立的
function* generatorFn() {
    yield 'foo';
    yield 'bar';
    return 'baz';
}

let generatorObject1 = generatorFn();
let generatorObject2 = generatorFn();


console.log(generatorObject1.next());  // { done: false, value: 'foo' }
console.log(generatorObject2.next());  // { done: false, value: 'foo' }
console.log(generatorObject2.next());  // { done: false, value: 'bar' }
console.log(generatorObject1.next());  // { done: false, value: 'bar' }
/*
生成器与yield的基本流程
 */
function* generatorFn() {
    return yield 'foo';
}

let generatorObject = generatorFn();

console.log(generatorObject.next());       // { done: false, value: 'foo' }
console.log(generatorObject.next('bar'));  // { done: true, value: 'bar' }

/*
使用yield实现输入与输出
 */
function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
}
//传参无效
let generatorObject = generatorFn('foo');

generatorObject.next('bar');  // foo
generatorObject.next('baz');  // baz
generatorObject.next('qux');  // qux
YieldInputOutputExample01.js

/*
无穷计数生成器
 */
function* generatorFn() {
    for (let i = 0;;++i) {
        yield i;
    }
}

let generatorObject = generatorFn();

console.log(generatorObject.next().value);  // 0
console.log(generatorObject.next().value);  // 1
console.log(generatorObject.next().value);  // 2
console.log(generatorObject.next().value);  // 3
console.log(generatorObject.next().value);  // 4
console.log(generatorObject.next().value);  // 5
/*
调用函数返回的生成器本身就是一个特殊的iterator
 */
function* nTimes(n) {
    for (let i = 0; i < n; ++i) {
        yield i;
    }
}

for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
function* nTimes(n) {
    let i = 0;
    while(n--) {
        yield i++;
    }
}

for (let x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2
//？？？？？？
function* nTimes(n) {
    if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
    }
}

for (const x of nTimes(3)) {
    console.log(x);
}
// 0
// 1
// 2

/*
return方法 结束执行代码
 */
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const g = generatorFn();

//console.log(g);            // generatorFn {<suspended>}
console.log(g.return(4));  // { done: true, value: 4 }
console.log(g);            // generatorFn {<closed>}

//----
function* generatorFn() {
    for (const x of [1, 2, 3]) {
        yield x;
    }
}

const g = generatorFn();

console.log(g.next());     // { done: false, value: 1 }
console.log(g.return(4));  // { done: true, value: 4 }
console.log(g.next());     // { done: true, value: undefined }
console.log(g.next());     // { done: true, value: undefined }
console.log(g.next());     // { done: true, value: undefined }

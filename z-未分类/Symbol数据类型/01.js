/*
作用：作为对象属性的标识符，所以Symbol()返回的值都是唯一的
    Symbol.for方法或Symbol.keyFor方法从哪个全局Symbol注册表设置和取得symbol
    Object.getOwnPropertySymbols(n)方法   不知道干嘛的
    https://blog.csdn.net/qq_34703156/article/details/116711477

 */
let sym = Symbol();
console.log(typeof sym);  // symbol

let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();
//传入的字符串参数与富豪定义或标识无关44
let fooSymbol = Symbol('foo');
let otherFooSymbol = Symbol('foo');

console.log(genericSymbol == otherGenericSymbol);  // false
console.log(fooSymbol == otherFooSymbol);          // false

//--------------------------------------凡是可以使用字符串或数值作为属性的地方都可以使用symbol
let s1 = Symbol('foo'),
    s2 = Symbol('bar'),
    s3 = Symbol('baz'),
    s4 = Symbol('qux');

// let o = {
//     [s1]: 'something val'//将一个变量作为属性名[]
// };
let o = {
    [s1]: 'foo val',
    [s2]: 'bar val',
    baz: 'baz val',
    qux: 'qux val'
};
// Also valid:   o[s1] = 'something val';

console.log(o);
// {Symbol{foo}: something val}

Object.defineProperty(o, s2, {value: 'something val'});

console.log(o);
// {Symbol{foo}: foo val, Symbol(bar): bar val}

Object.defineProperties(o, {
    [s3]: {value: 'baz val'},
    [s4]: {value: 'qux val'}
});

console.log(o);
// {Symbol{foo}: foo val, Symbol(bar): bar val,
//  Symbol{baz}: baz val, Symbol(qux): qux val}


console.log(Object.getOwnPropertySymbols(o));
// [Symbol(foo), Symbol(bar)]

console.log(Object.getOwnPropertyNames(o));
// ["baz", "qux"]

console.log(Object.getOwnPropertyDescriptors(o));
// {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}

console.log(Reflect.ownKeys(o));
// ["baz", "qux", Symbol(foo), Symbol(bar)]
//----------------------------全局符号
let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol);  // "symbol "

let otherFooGlobalSymbol = Symbol.for('foo');     // reuses existing symbol

console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true
//----
let localSymbol = Symbol('foo');
let globalSymbol = Symbol.for('foo');

console.log(localSymbol === globalSymbol);  // false

//全局注册表中的符号必须用字符串作为键
let emptyGlobalSymbol = Symbol.for();
console.log(emptyGlobalSymbol);   // Symbol(undefined)
//keyFor查询全局注册表
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s));   // foo

// Create regular symbol
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2));  // undefined
/*
    ES6：常用内置符号
    用于暴露语言内部行为，开发者可以直接访问、重写或模拟这些行为。以symbol工厂函数字符串属性的形式存在
    通过重写这些工厂函数，改变原生结构的行为
    比如：可迭代对象都包含返回迭代器的Symbol.iterator函数，通过重写对象的该函数，达到给该对象添加或修改迭代的效果
    Symbol.iterator for each使用
    Symbol.asyncIterator 实现异步迭代器API的函数 for-await-of使用
    Symbol.hasInstance 决定一个构造器对象是否认可一个对象是它的实例

 */

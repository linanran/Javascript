// Generator function declaration
function* generatorFn() {}

// Generator function expression
let generatorFn = function* () {}

// Object literal method generator function
let foo = {
  * generatorFn() {}
}

// Class instance method generator function
class Foo {
  * generatorFn() {}
}

// Class static method generator function
class Bar {
  static * generatorFn() {}
}
// Equivalent generator functions:
function* generatorFnA() {}
function *generatorFnB() {}
function * generatorFnC() {}

// Equivalent generator methods:
class Foo {
  *generatorFnD() {}
  * generatorFnE() {}
}

function* generatorFn() {}

const g = generatorFn();//调用生成器函数会返回一个生成器对象，生成器对象实现了Iterator接口

console.log(g);       // generatorFn {<suspended>}
console.log(g.next);  // f next() { [native code] }
GeneratorBasicsExample01.js

function* generatorFn() {}

let generatorObject = generatorFn();

console.log(generatorObject);         // generatorFn {<suspended>}
console.log(generatorObject.next());  // { done: true, value: undefined }
GeneratorBasicsExample02.js

function* generatorFn() {
  return 'foo';
}

let generatorObject = generatorFn();

console.log(generatorObject);         // generatorFn {<suspended>}
console.log(generatorObject.next());  // { done: true, value: 'foo' }
GeneratorBasicsExample03.js

function* generatorFn() {
  console.log('foobar');
}

// Nothing is logged yet when the generator function is initially invoked
let generatorObject = generatorFn();

generatorObject.next();  // foobar
GeneratorBasicsExample04.js

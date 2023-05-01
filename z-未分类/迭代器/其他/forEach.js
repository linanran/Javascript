
let collection2 = ['foo', 'bar', 'baz'];

collection2.forEach((item) => console.log(item));
// foo
// bar
// baz
//这解决了通过数组对象单独跟踪索引和检索项目的问题。
// 但是，没有办法终止此迭代，该方法仅限于数组，并且回调结构笨拙。

function* show() {
    console.log('a');
    yield;
    console.log('b');
}

let genObj = show();
genObj.next();
genObj.next();

//"赶一步走一步"，不赶不走，第一个next用来启动生成器
function* show2() {
    console.log('a');
    yield 12;
    console.log('b');
    return 34;
}

let genObj2 = show2();
let res1 = genObj2.next();
console.log(res1);  //{value:12,done:false}
let res2 = genObj2.next();
console.log(res2);  //{value:34,done:false}
// yield充当了方法中断时的return，允许方法在中断暂停的时候，也可以返回一个结果数据，方便我们在执行下一个方法的时候，需要用到上个方法的结果去处理一些东西
/*
做饭案例
 */
// function *炒菜(菜市场买回来的菜){
// 洗菜->洗好的菜;
// let 干净的菜=yield 洗好的菜;
// 干净的菜->切->丝;
// let 切好的菜=yield 丝;
// 切好的菜->炒->熟的菜;
// return 熟的菜;
// }
// let genObj = show(菜市场买回来的菜);
// let res1 = genObj.next();
// /*res1.value是洗好的菜，方法外可以做一些其他的操作，例如让老婆看看干不干净等... */
// let res2 = genObj.next(res1.value);
// /*res2.value是切好的菜，方法外可以做一些其他的操作，例如去拿儿子刚买过来的盐去简单腌制一下丝...*/
// let res3 = genObj.next(res2.value);
// //res3.value是最终的“熟的菜”

function* foo() {
    console.log("函数开始执行~")

    const value1 = 100
    console.log("第一段代码:", value1)
    yield

    const value2 = 200
    console.log("第二段代码:", value2)
    yield

    const value3 = 300
    console.log("第三段代码:", value3)
    yield

    console.log("函数执行结束~")
}
console.log("案例二分割线")
// 调用生成器函数时, 会给我们返回一个生成器对象
const generator = foo()
console.log("第一个next开始")
generator.next()
console.log("第二个next开始")
generator.next()
console.log("第三个next开始")
generator.next()
console.log("第四个next开始")
generator.next()
//yield就相当于一个"分割器"，三个yield就相当于把一个函数变成四个函数



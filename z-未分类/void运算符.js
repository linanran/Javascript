/*
void 运算符
    1，让表达式返回undefined
    2，点击某个文字链接时产生某个动画效果但保持页面不刷新时
        <a href="javascript:void 0">
    3,可以利用 void 运算符让 JavaScript 引擎把一个function关键字识别成函数表达式而不是函数声明（语句）
 */
// 1 创建一个函数 用于测试
function doSomething(){
    console.log("函数执行")
    return "函数 return 结果"
}
// 2 创建两个变量 分别赋值 函数，和 void 执行函数
var s1 = doSomething();
var s2 = void doSomething();
// 3 打印看两个变量有什么不同
console.log("s1",s1)
console.log("s2",s2)
// 4 判断一下 变量2，即s2 void 返回的值是否全等于 undefined； 答案是的
if(s2 === undefined){
    console.log("返回值等于undefined")
}


// 5 判断一下 void 返回是否都是一样的undefined
function doSomething2(){
    console.log("函数执行2")
    return "函数 return 结果2"
}
if(s2 === void 0&& s2 === void doSomething2()){
    console.log("返回值等于 void 任何结果")
}

//void作用第三点，让函数声明变成表达式
void function test(){
    //code
}();
//执行匿名函数
void function(){
    //code
}

//讲一个匿名函数赋值给test
//没有名字的函数，一旦执行完毕立刻释放内存，而闭包需要手动释放内存或浏览器关闭后才会释放内存。
//不会污染全局对象
var test=function (){

}
//匿名函数的几种表现形式
//1，函数字面量,先声明函数对象，然后执行
(function(){}
    //code
)();
//2，优先表达式
(function (){
    //code
}());
//3,void操作符
void function(){

}();

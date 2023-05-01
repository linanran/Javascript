/*
    闭包的由来是一个函数A想要去访问另一个函数B中的变量。即使函数A已经结束了。
 */
//赋值给全局变量
function test() {
    var m = 0;
    function getM() { return m; }
    function seta(val) { m = val; }
    window.g = getM;
    window.f = seta;
}
f(100);
console.info(g()); //100

//作为参数返回
function A() {
    varcount = 0;
    function B() {
        count ++;
        console.log(count);
    }
    returnB;
}
varC = A();
C();// 1
C();// 2
C();// 3
//与匿名函数一起
(function (document) {
    var viewport;
    var obj = {
        init: function(id) {
            viewport = document.querySelector('#'+ id);
        },
        addChild: function(child) {
            viewport.appendChild(child);
        },
        removeChild: function(child) {
            viewport.removeChild(child);
        }
    }
    window.jView = obj;
})(document);

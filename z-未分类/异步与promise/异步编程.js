/*
异步编程
 */
//异步函数的回调是：我需要做一个什么样的事情，但是做这件事之前需要满足一定的条件，只要条件达到了就按照我预先给定的方案执行。
//异步编程回掉函数

setTimeout(function test(){
    console.log('timer1 invoke');
},1000);

//异步ajax
var xhr = new XMLHttpRequest();

xhr.onload = function () {
    // 输出接收到的文字数据
    document.getElementById("demo").innerHTML=xhr.responseText;
}

xhr.onerror = function () {
    document.getElementById("demo").innerHTML="请求出错";
}

// 发送异步 GET 请求
xhr.open("GET", "https://www.runoob.com/try/ajax/ajax_info.txt", true);
xhr.send();

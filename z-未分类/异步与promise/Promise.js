/*
为什么要设计 Promise ？

在 Promise 出现之前，JavaScript 本身不具备异步的能力，而只能通过宿主环境提供的 API 比如浏览器的setTimeout 来实现异步，
而为了语言的完备性，必须设计一个内部的异步支持，否则 JavaScript 将无法脱离浏览器工作。
 */
function sleep(second){
    return new Promise((resolve)=>{setTimeout(resolve,second*1000);
    });
}

function go3(){
    green();
    sleep(10)
        .then(()=>{
            yellow();return sleep(2);
        })
        .then(()=>{
            red();returnsleep(5);
        })
        .then(()=>{
            go3();
        });
}

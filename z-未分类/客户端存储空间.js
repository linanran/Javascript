/*
cookie、localStorage、sessionStorage的区别


第一，它们都客户端存储器，第二、存储空间不同，cookie4k左右，另外两个5Mb，

第三，它们的数据数据有效期不一样，cookie是可以设置的，（默认为浏览器关闭后失效），sessionStorage关闭当前页面/对话内有效，local storage是一直有效（除非手动删除）。

第四，与服务器通信时，cookie会存在于http的请求头部中，而另外两个只是前端存储。
*/

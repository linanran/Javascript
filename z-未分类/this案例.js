var name="小王",age=13;
var obj={
    name:'小张',
    objAge:this.age,
    myFun:function(){
        console.log("this:",this);
        console.log(this.objAge)
        console.log(this.name+":年龄："+this.age);
    }
}
// obj.objAge;
// obj.myFun();
var db={
    name:'德玛',
    age:99
}
obj.myFun.call(db);
obj.myFun.apply(db);
obj.myFun.bind(db)();

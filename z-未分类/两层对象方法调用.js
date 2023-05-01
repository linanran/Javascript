var o ={
    age:18,
    a:{
        fn:function (){
            console.log("d");
            console.log(this.age);
        }
    }
}
console.log(o.a);
o.a.fn();

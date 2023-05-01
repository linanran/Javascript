var A={
    name:"A",
    getName:function(){
        console.log(this.name);
    }
}

let b=Object.create(A);
b.name2="b";
b.getName2=function(){
    console.log("b");
}

b.getName();

class Animal{
    constructor(color) {
        console.log("我被调用了")
    this.color=color;
    }
    getColor(){
        console.log(this.color)
    }
}
class Dog extends Animal{
    constructor(color) {
        super();
        this.color = color;
    }
}
var dog=new Dog("hunag");
dog.getColor();

// Animal.getColor();

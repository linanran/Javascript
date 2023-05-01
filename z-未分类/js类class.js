class Dog{
    static dog(){
        console.log(this);
    }
    bark(){
        console.log('狗会叫');
    }
}
var dog = new Dog();

let o={x:1,y:2};
delete o.x;//true
typeof o.x;//undefined
delete o.x;//true
delete 1;//true

delete o;//删除变量严格模式下会报错，非严格模式返回false

delete Obejct.prototype;//同上，删除不可以被删除的属性，返回false，严格模式报错

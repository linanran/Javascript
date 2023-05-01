
//1,多个值赋给多个变量
let [a,b]=[1,2];

//2,表达式赋值
let [a,b]=[a+1,b+2];

//3,变量赋值
let [a,b]=[b,a];

//4,函数范湖值赋值
function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}
    // 转换坐标
function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r,theta] = toPolar(1.0, 1.0);  // r == Math.sqrt(2); theta == Math.PI/4
let [x,y] = toCartesian(r,theta);   // [x, y] == [1.0, 1,0]

//5,遍历对象中的属性与值
const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(key,value);
}
//6,左侧值比右侧值多时会被设置为undefined

//7,左侧的变量列表可以包含额外的逗号，以跳过右侧的某些值
 let [x,,y]=[1,2,3,4];

//8,将右侧未赋值给变量的剩下的值收集到一个变量中
let [x,...y]=[1,2,3,4];//y==[2,3,4]

//9,嵌套数组
let [a,[b,c]]=[1,[2,2.5],3];
//10,右侧值可以为任意可遍历的对象
let [first,...reset]="hello";//first=h,reset="ello";

//11,右侧为对象的情况
let transparent={
    r:0.0,
    g:20,
    c:2.3,
    d:5.0
}
let [r,g,c]=transparent;
//12,赋值键值对
const {cos:cosine,tan:tangent}=Math;//将全局对象Math中的变量赋值给cosine、tangent（属性名：变量名）


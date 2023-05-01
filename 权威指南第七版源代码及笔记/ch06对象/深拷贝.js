// 定义遍历赋值的函数
let cloneObj = function (obj) {
    let newObj = obj instanceof Array ? [] : {}

    for (let key in obj) {
        let val = obj[key]

        newObj[key] = typeof val === 'object' ? cloneObj(val) : val
    }
    return newObj
}

// 测试
const list = {
    id: 'a',
    title: 'A',
    authors: ['y', 'h'],
    fTest:function(){
        console.log(this.id);
    }
}
let list2 = cloneObj(list)
list2.authors[0] = 'a'
list2.id="b";
console.log(list)
console.log(list.fTest());
console.log(list2.fTest());
console.log(list2)
console.log(typeof list.fTest);

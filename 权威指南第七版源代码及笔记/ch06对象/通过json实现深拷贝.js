// let newObj = JSON.parse(JSON.stringify(obj))

// 测试
const list = {
    id: 'a',
    title: 'A',
    authors: ['y', 'h'],
    fTest:function(){
        console.log(this.id);
    }
}



let list2 = JSON.parse(JSON.stringify(list))
list2.authors[0] = 'a'
list2.id="b";
console.log(list)
console.log(list.fTest());
// console.log(list2.fTest());
console.log(list2)


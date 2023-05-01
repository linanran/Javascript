/*
    来源：
    判断数据是否为undefined的时候产生了一个问题
    即：undefined不是保留子和关键字，因此undefined可以被定义和赋值
    因此不能作为判断一个变量为未定义的方式，因此改为了void 0
    为什么是0？因为节省代码量，void 0为最少代码量
    void见void运算符笔记
 */
function foo() {
    var a  = arguments[0] !== (void 0 ) ? arguments[0] : 2;
    return a;
}

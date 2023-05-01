
const PROPERTY_NAME="p1";
function computePropertyName(){
    return "p"+2;
}
let o={};
o[PROPERTY_NAME]=1;
o[computePropertyName()]=2;

// 简写为
let p={
    [PROPERTY_NAME]:1,
    [computePropertyName()]:2
}


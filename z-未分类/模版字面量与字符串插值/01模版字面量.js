let myMultiLineString = 'first line\nsecond line';
let myMultiLineTemplateLiteral = `first line
second line`;

console.log(myMultiLineString);
// first line
// second line"

console.log(myMultiLineTemplateLiteral);
// first line
// second line

console.log(myMultiLineString === myMultiLinetemplateLiteral);   // true

let pageHTML = `
<div>
  <a href="#">
    <span>Jake</span>
  </a>
</div>`;
//----------------------
let a = 6;
let b = 9;
//支持定义标签函数
function impleTag(strings, aValExpression, bValExpression, sumExpression) {
    console.log(strings);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);
    return 'foobar';
}

// let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
let taggedResult = impleTag`${ a }`;
let taggedResult2 = impleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15

// console.log(untaggedResult);  // "6 + 9 = 15"
console.log(taggedResult);    // "foobar"

//-----------
let a = 6;
let b = 9;

function simpleTag(strings, ...expressions) {
    console.log(strings);
    for(const expression of expressions) {
        console.log(expression);
    }

    return 'foobar';
}
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15

console.log(taggedResult);  // "foobar"

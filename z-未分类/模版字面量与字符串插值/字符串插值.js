let firstName = "John";
let lastName = 'Jacob';
let lastName = `Jingleheimerschmidt`

let value = 5;
let exponent = 'second';

// Formerly, interpolation was accomplished as follows:
let interpolatedString =
  value + ' to the ' + exponent + ' power is ' + (value * value);

// The same thing accomplished with template literals:
let interpolatedTemplateLiteral =
  `${ value } to the ${ exponent } power is ${ value * value }`;

console.log(interpolatedString);           // 5 to the second power is 25
console.log(interpolatedTemplateLiteral);  // 5 to the second power is 25

console.log(`Hello, ${ `World` }!`);  // Hello, World!

let foo = { toString: () => 'World' };
console.log(`Hello, ${ foo }!`);      // Hello, World!

function capitalize(word) {
    return `${ word[0].toUpperCase() }${ word.slice(1) }`;
}
console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`);  // Hello, World!

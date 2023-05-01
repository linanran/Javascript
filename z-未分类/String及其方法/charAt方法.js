let message = "abcde";

console.log(message.length);  // 5

console.log(message.charAt(2));  // "c"


// Unicode "Latin small letter C" is U+0063
console.log(message.charCodeAt(2));  // 99

// Decimal 99 === Hexadecimal 63
console.log(99 === 0x63);            // true

// Unicode "Latin small letter A" is U+0061
// Unicode "Latin small letter B" is U+0062
// Unicode "Latin small letter C" is U+0063
// Unicode "Latin small letter D" is U+0064
// Unicode "Latin small letter E" is U+0065

console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65));  // "abcde"

// 0x0061 === 97
// 0x0062 === 98
// 0x0063 === 99
// 0x0064 === 100
// 0x0065 === 101

console.log(String.fromCharCode(97, 98, 99, 100, 101));          // "abcde"

// The "smiling face with smiling eyes" emoji is U+1F60A
// 0x1F60A === 128522
// let message = "ab😊de";

console.log(message.length);         // 6

console.log(message.charAt(1));      // b
console.log(message.charAt(2));      // <?>
console.log(message.charAt(3));      // <?>
console.log(message.charAt(4));      // d

console.log(message.charCodeAt(1));  // 98
console.log(message.charCodeAt(2));  // 55357
console.log(message.charCodeAt(3));  // 56842
console.log(message.charCodeAt(4));  // 100

console.log(String.fromCharCode(0x1F60A));  // 

console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101));  // ab😊de


console.log(message.codePointAt(1));  // 98
console.log(message.codePointAt(2));  // 128522
console.log(message.codePointAt(3));  // 56842
console.log(message.codePointAt(4));  // 100

console.log([..."ab😊de"]);  // ["a", "b", "😊", "d", "e"]

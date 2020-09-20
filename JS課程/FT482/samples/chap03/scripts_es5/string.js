'use strict';

var str1 = 'ABCABCABC';
console.log(str1.indexOf('ABC'));
console.log(str1.lastIndexOf('ABC'));
console.log(str1.indexOf('ABC', 3));
console.log(str1.lastIndexOf('B', 5));
console.log(str1.indexOf('DEF'));
console.log(str1.startsWith('ABC'));
console.log(str1.endsWith('ABC'));
console.log(str1.includes('ABC'));

var str2 = 'WingsProject';
var str3 = '被罵';
var str4 = '   wings   ';

console.log(str2.charAt(4));
console.log(str2.slice(5, 8));
console.log(str2.substring(5, 8));
console.log(str2.substr(5, 3));
console.log(str2.split('s'));
console.log(str1.split('C', 3));
console.log(str2.charCodeAt(0));
console.log(String.fromCharCode(87, 105, 110, 103));
console.log(str3.codePointAt(0));
console.log(String.fromCodePoint(134047));
console.log(str2.concat(' 有限会社'));
console.log(str2.repeat(2));
console.log(str4.trim());
console.log(str2.length);

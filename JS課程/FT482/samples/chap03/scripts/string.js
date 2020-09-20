var str1 = 'ABCABCABC';
console.log(str1.indexOf('ABC')); //結果:0(從前端搜尋)
console.log(str1.lastIndexOf('ABC'));//結果:6(從後端搜尋)
console.log(str1.indexOf('ABC', 3));//結果:3(從第4個字往右搜尋)
console.log(str1.lastIndexOf('B', 5));//結果:4(從第6個字往左搜尋)
console.log(str1.indexOf('DEF'));//結果:-1(不一致)
console.log(str1.startsWith('ABC'));//結果:true
console.log(str1.endsWith('ABC'));//結果:false
console.log(str1.includes('ABC'));//結果:true

var str2 = 'WingsProject';
var str3 = '被罵';
var str4 = '   wings   ';

console.log(str2.charAt(4));//結果:s(擷取第5個字)
console.log(str2.slice(5, 8));//結果:pro(擷取第6~8個字)
console.log(str2.substring(5, 8));//結果:pro(擷取第6~8個字)
console.log(str2.substr(5, 3));//結果:pro(從第6個字開始擷取3個字)
console.log(str2.split('s'));//結果: ["Wing", "Project"]
console.log(str1.split('C', 3));//結果:  ["AB", "AB", "AB"](分3部分)
console.log(str2.charCodeAt(0));//結果: 87
console.log(String.fromCharCode(87, 105, 110, 103));//結果: Wing
console.log(str3.codePointAt(0));//結果: 34987
console.log(String.fromCodePoint(34987));//結果: 被
console.log(str2.concat(' 有限公司'));//結果: WingsProject 有限公司
console.log(str2.repeat(2));//結果: WingsProjectWingsProject
console.log(str4.trim());//結果: Wings
console.log(str2.length);//結果: 12(1個英文字算一個)

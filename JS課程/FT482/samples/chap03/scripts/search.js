var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = '支援網站是http://www.wings.msn.to/。';
var str2 = '支援網站「伺服器技術小窩」請多指教!';
console.log(str1.search(p));
console.log(str2.search(p));

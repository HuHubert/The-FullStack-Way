var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = '支援網站是http://www.wings.msn.to/。';
str += '範例介紹網站是HTTP://www.web-deli.com/！'
var result = p.exec(str);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

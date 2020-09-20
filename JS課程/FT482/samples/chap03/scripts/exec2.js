var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = '支援網站是http://www.wings.msn.to/。';
str += '範例介紹網站是HTTP://www.web-deli.com/！'
while((result = p.exec(str)) !== null) {
  console.log(result[0]);
}

var p = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str = '支援網站是http://www.wings.msn.to/。';
document.write(str.replace(p, '<a href="$1">$1</a>'));

var p = /^[0-9]{1,}/g;
//var p = /^[0-9]{1,}/gm;
var str = '101隻狗。 \n7個小矮人';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

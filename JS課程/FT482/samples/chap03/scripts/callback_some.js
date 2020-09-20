var data = [4, 9, 16, 25];
var result = data.some(function(value, index, array) {
  return value % 3 === 0;
});

if (result) {
  console.log('發現3的倍數。');
} else {
  console.log('沒有發現3的倍數。');
}

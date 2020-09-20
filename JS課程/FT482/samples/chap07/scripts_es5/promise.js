'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('輸入值：' + value);
      } else {
        reject('錯誤：輸入為空。');
      }
    }, 500);
  });
}

asyncProcess('TOKUZIROU').then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});

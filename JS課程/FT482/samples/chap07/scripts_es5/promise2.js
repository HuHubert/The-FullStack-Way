'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('入力値： ' + value);
      } else {
        reject('輸入為空。');
      }
    }, 500);
  });
}

asyncProcess('TOKUZIROU').then(function (response) {
  console.log(response);
  return asyncProcess('NINNSABUROU');
}).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('錯誤: ' + error);
});

'use strict';

for (var key in Promise) {
  console.log(key);
}

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('輸入值： ' + value);
      } else {
        reject('輸入為空。');
      }
    }, 500);
  });
}

Promise.race([asyncProcess('TOKUZIROU'), asyncProcess('NINNSABUROU'), asyncProcess('RINNRINN')]).then(function (response) {
  console.log(response);
}, function (error) {
  console.log('錯誤： ' + error);
});

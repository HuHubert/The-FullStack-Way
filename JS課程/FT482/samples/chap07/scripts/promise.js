function asyncProcess(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`輸入值： ${value}`);
      } else {
        reject('輸入為空');
      }
    }, 500);
  });
}

asyncProcess('TOKUZIROU').then(
  response => {
    console.log(response);
  },
  error => {
    console.log(`錯誤： ${error}`);
  }
);
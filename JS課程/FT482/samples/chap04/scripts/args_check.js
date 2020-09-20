function showMessage(value) {
  if (arguments.length !== 1) {
    throw new Error('參數個數錯誤：' + arguments.length);
  }
  console.log(value);
}

try {
  showMessage(' 山田', ' 鈴木');
} catch(e) {
  window.alert(e.message);
}

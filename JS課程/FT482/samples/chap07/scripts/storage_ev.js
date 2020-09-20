window.addEventListener('storage', function (e) {
  console.log('變更的鍵ー：' + e.key);
  console.log('變更前的值：' + e.oldValue);
  console.log('變更後的值：' + e.newValue);
  console.log('發生之頁面：' + e.url);
}, false);   

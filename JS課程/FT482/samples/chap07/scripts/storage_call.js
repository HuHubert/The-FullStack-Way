var storage = new MyStorage('JSSample');
storage.setItem('hoge', '呆子');
console.log(storage.getItem('hoge'));
storage.save();
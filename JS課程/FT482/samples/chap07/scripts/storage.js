var storage = localStorage;
storage.setItem('fruit1', '蘋果');
storage.fruit2 = '橘子';
storage['fruit3'] = '葡萄';
console.log(storage.getItem('fruit1'));
console.log(storage.fruit2);
console.log(storage['fruit3']);

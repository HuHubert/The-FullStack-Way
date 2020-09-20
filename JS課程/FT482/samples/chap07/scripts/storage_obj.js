var storage = localStorage;
var apple = { name: '蘋果', price: 150, made: '青森' };
storage.setItem('apple', JSON.stringify(apple));
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);

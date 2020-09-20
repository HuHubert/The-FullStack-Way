let book = { title: 'Java口袋書', publish: '技術評論社', price: 2680 };
let { price, title, memo = 'none' } = book;

console.log(title);
console.log(price);
console.log(memo);
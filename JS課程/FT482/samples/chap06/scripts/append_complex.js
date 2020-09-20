document.addEventListener('DOMContentLoaded', function() {
  var books = [
    { title: '自學PHP 第3版', price: 3200 },
    { title: 'Java口袋書', price: 2680 },
    { title: '開發APP!Android入門', price: 2000 }
  ];

  var list = document.getElementById('list');

  for(var i = 0, len = books.length; i < len; i++) {
    var b = books[i]
    var li = document.createElement('li');
    var text = document.createTextNode(b.title + '：'+ b.price + '元');
    li.appendChild(text);
    list.appendChild(li);
  }
}, false);

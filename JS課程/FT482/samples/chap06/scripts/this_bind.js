document.addEventListener('DOMContentLoaded', function() {
  var data = {
    title: 'Java口袋書',
    price: 2680,
    show: function() {
      console.log(this.title + '／' + this.price + '元');
    }
  };

//  document.getElementById('btn').addEventListener(
//    'click', data.show, false);

document.getElementById('btn').addEventListener(
    'click', data.show.bind(data), false);
}, false);
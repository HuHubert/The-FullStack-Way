document.addEventListener('DOMContentLoaded', function() {
  var data = {
    title: 'Java口袋書',
    price: 2680,
    handleEvent: function() {
      console.log(this.title + '／' + this.price + '元');
    }
  };

  document.getElementById('btn').addEventListener(
    'click', data, false);
}, false);

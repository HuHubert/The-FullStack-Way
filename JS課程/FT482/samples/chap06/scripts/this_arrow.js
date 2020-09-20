document.addEventListener('DOMContentLoaded', function() {
  var Counter = function(elem) {
    this.count = 0;
    this.elem = elem;
  //  elem.addEventListener('click', function() {
  //    this.count++;
  //    this.show();
  //  }, false);

      elem.addEventListener('click', () => {
      this.count++;
      this.show();
      }, false);
  };

  Counter.prototype.show = function() {
    console.log(this.elem.id + '被點擊' + this.count + '次。');
  }

  var c = new Counter(document.getElementById('btn'));
}, false);

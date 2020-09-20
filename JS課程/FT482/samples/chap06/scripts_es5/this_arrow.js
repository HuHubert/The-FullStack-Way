'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var Counter = function Counter(elem) {
    var _this = this;

    this.count = 0;
    this.elem = elem;
    //  elem.addEventListener('click', function() {
    //    this.count++;
    //    this.show();
    //  }, false);

    elem.addEventListener('click', function () {
      _this.count++;
      _this.show();
    }, false);
  };

  Counter.prototype.show = function () {
    console.log(this.elem.id + '被點擊' + this.count + '次。');
  };

  var c = new Counter(document.getElementById('btn'));
}, false);

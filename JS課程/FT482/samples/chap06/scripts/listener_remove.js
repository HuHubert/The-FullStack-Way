document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btn');
  var listener = function() {
    window.alert('Hello, World！');
  };

  btn.addEventListener('click', listener, false);

  btn.removeEventListener('click', listener, false);
}, false);

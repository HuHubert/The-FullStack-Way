window.onload = function() {
  var btn = document.getElementById('btn');

  btn.onclick = function() {
    window.alert('Hello, World！');
  };

  btn.onclick = null;
};

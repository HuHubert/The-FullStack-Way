document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    var result = document.getElementById('result');
    result.innerHTML = 'Hello, ' + name.value + '先生!';
  }, false);
}, false);

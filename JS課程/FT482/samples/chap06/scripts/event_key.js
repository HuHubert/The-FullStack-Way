document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('key').addEventListener('keydown', function(e) {
    console.log('鍵盤Code：' + e.keyCode);
  }, false);
}, false);

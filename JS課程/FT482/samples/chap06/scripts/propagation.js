document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('觸發#inner監聽器。');
  }, false);

  document.getElementById('inner').addEventListener('click', function(e) {
    window.alert('觸發#inner監聽器2。');
  }, false);

  document.getElementById('outer').addEventListener('click', function(e) {
    window.alert('觸發#outer監聽器。');
  }, false);
}, false);

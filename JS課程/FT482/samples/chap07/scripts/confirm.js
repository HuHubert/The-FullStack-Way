document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fm').addEventListener('submit', function(e) {
    if (!window.confirm('確定送出頁面？')) {
      e.preventDefault();
    }
  }, false)
}, false);

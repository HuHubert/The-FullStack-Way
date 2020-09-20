document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result.textContent = xhr.responseText;
        } else {
          result.textContent = '伺服器發生錯誤。';
        }
      } else {
        result.textContent = '通訊中...';
      }
    };
    /*
    xhr.addEventListener('loadstart', function() {
      result.textContent = '通訊中...';
    }, false);

    xhr.addEventListener('load', function() {
      result.textContent = xhr.responseText;
    }, false);

    xhr.addEventListener('error', function() {
      result.textContent = '伺服器發生錯誤。';
    }, false);
    */
    xhr.open('GET', 'hello_ajax.php?name=' +
      encodeURIComponent(document.getElementById('name').value), true);
    xhr.send(null);
  }, false);
}, false);
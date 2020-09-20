window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("file").addEventListener('change', function(e) {
    var inputs = document.getElementById("file").files;
    for (var i = 0, len = inputs.length; i < len; i++) {
      var input = inputs[i];
      console.log('檔案名稱：' + input.name);
      console.log('種類：' + input.type);
      console.log('大小：' + input.size / 1024 + 'KB');
      console.log('最後更新日：' + input.lastModifiedDate);
    }
  }, true);
});

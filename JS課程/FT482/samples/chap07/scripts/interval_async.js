function hoge() {
  console.log('abcde');
  setTimeout(function() {
    console.log('fghij');
  }, 0);
  console.log('klmno');
}

hoge();
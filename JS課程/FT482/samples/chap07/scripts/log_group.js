console.group('父群組');
for (var i = 0; i < 3; i++) {
  console.group('子群組' + i);
  for (var j = 0; j < 3; j++) {
    console.log(i, j);
  }
  console.groupEnd();
}
console.groupEnd();
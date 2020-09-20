function* myGenerator() {
  yield 'abcde';
  yield 'fghij';
  yield 'klmno';
}

for(let t of myGenerator()) {
  console.log(t);
}

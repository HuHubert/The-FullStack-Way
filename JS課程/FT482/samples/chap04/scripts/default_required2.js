function required() {
  throw new Error('參數不足');
}

function hoge(value = required()) {
  return value;
}

hoge();

'use strict';

function required() {
  throw new Error('參數不足');
}

function hoge() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? required() : arguments[0];

  return value;
}

hoge();

'use strict';

var _member;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var i = 0;
var member = (_member = {
  name: '山田太郎',
  birth: new Date(1970, 5, 25)
}, _defineProperty(_member, 'memo' + ++i, '正規會員'), _defineProperty(_member, 'memo' + ++i, '分部會長'), _defineProperty(_member, 'memo' + ++i, '關東'), _member);

console.log(member);

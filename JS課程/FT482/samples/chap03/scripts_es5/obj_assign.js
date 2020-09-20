'use strict';

var pet = {
  type: '白雪公主倉鼠',
  name: '琪拉',
  description: {
    birth: '2014-02-15'
  }
};

var pet2 = {
  name: '山田琪拉',
  color: '白',
  description: {
    food: '向日葵籽'
  }
};

var pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

Object.assign(pet, pet2, pet3);
console.log(pet);

// let merged = Object.assign({}, pet, pet2, pet3);
// console.log(merged);

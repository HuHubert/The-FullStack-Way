'use strict';

var pet = { type: '雪白倉鼠', name: '奇拉' };

//Object.preventExtensions(pet);
//Object.seal(pet); 
//Object.freeze(pet);

pet.name = '山田奇拉';
delete pet.type;
pet.weight = 42;

console.log(pet);

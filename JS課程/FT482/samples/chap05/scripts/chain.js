var Animal = function() {};

Animal.prototype = {
  walk : function() {
    console.log('TocoToco…');
  }
};

var Dog = function() {
  Animal.call(this);
};
Dog.prototype = new Animal();
Dog.prototype.bark = function() {
  console.log('WanWan!');
}

var d = new Dog();
d.walk();
d.bark();

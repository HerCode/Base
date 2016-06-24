console.log('Hello World');

//TL Objects
var bananaSandwich = {Shape: 'round'};
var car = {
  type: 'first',
  model: '500',
  color: 'white'
//We can put any vaild data type inside the value of an object//

drive function() {
  console.log('Vroom, vroom!');
},
passengers: [{Name: 'Ryan'}, {Name: 'Joel'}];
steeringWheel: {Shape: 'round'};
};

car.steeringWheel = bananaSandwich;
//Accessor most commonly used//
console.log('car.type');

//Accessor sometime used to get at an object that's undetermined//
console.log(['car.type']);

var propertyName = 'model';
console.log(car(propertyName));

car.type = 'Honda';

console.log(car.type);

car.drive();

console.log(car.steeringWheel.shape);
console.log(car.passengers[1].name);

//Constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.firstName = last;
  this.Age = age;
  this.eyeColor = eye;
  this.shoeSize = 9;
  this.getDisplayName = function() {
    return this.firstName + '' + this.lastName;
  }
}

var Ryan: new Person(firstName:'Ryan', lastName:'Mulcahy', age: '25', eyeColor: 'Hazel', shoeSize: '9');
//Must use the new operator, this is what allows you to access "this" parameters//
//What is "this"? Where does this method live?
//It is the object where the method lives.

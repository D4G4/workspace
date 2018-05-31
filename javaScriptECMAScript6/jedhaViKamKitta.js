'use strict'


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }

  console.log(a);
}

function testLet(){
  let b = 30;
  if(true){
    let b = 50;
    console.log(b);
  }
  console.log(b);
}

testLet();

// for(let i=0; i < 10; i++){
//   console.log(i);
// }
//
// console.log(i);   //error
//

for( var i=0; i < 10; i++){
  console.log(i);
}
console.log(i);


const colors = [];


colors.push('red');
colors.push('blue');

console.log(colors);

// colors = 'green'; //error


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class User{

  constructor(username, email, password){
    console.log(new.target.name + ' Constructor method being invoked i.e. calss is instantiated ');
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers(){
    console.log('Static method  ' + 'There are 50 users');
  }

  register(){
    console.log(this.username + ' is not registered ');
  }
}

class Member extends User{
  constructor(username,email,password,memberPackage){
    super(username,email,password);
    this.memberPackage = memberPackage;
  }


  doStuff(){
    console.log('yay');
  }

  getPackage(){
    console.log(this.username + ' is subscribed to the ' + this.memberPackage + ' package');
  }

}


let bob = new User('Bob', 'bobg@email.com', 'pass@wOrd');

let mike = new Member('Mike', 'muikeG@email.com', '1231', 'Standard');

bob.register();
User.countUsers();

mike.doStuff();
mike.getPackage();
console.log(mike.username);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Templates literals or Strings

function makeUppercase(word){
  return word.toUpperCase();
}

let name = 'John';

let template = `<h1>${makeUppercase('Hello')} ${name}</h1>
<p>This is a simple template in JavaScript</p>`;

// document.getElementById('template').innerHTML = template;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let theString = `Hello, my name is Daksh and I've started having feelings for JS`;

//startsWith()
//endsWith()
//includes()

//document.getElementById('template').innerHTML = theString;

console.log(theString.startsWith('Hello'));
console.log(theString.startsWith('ello'));

console.log(theString.includes("'ve"));


//Hex
console.log(0xFF);

//Binary
console.log(0b101011);

//Octal
console.log(0o543);

console.log(Number.isFinite(3));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(3/0));

console.log(Number.isNaN(2));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Default parameters
// $ is not necessary
function greet($greeting = 'Hello world'){
  console.log($greeting);
}

greet('Hello');
greet();



let args1 = [1, 2, 3];
let args2 = [4,5,6];

function test(){
    console.log(args1+','+args2);
}

//test.apply(null,args);

test(...args1,...args2);



////////////////////////////////////////////////////////////////////////////////////////////////

//Function prototypes

const food = {

  init: function(type) {
    this.type = type;
  },

  eat: function(){
    console.log('You ate ' + this.type);
  }

}

/*
The Object.create does not create a copy of the food object.
but it creates a new empty object for waffle and carror and assigns food as a fallbak.

So,Object.create creates a new object and assigns 'food' as a prototype to the objectVariable.
Therefore waffle and carrot will only fall back to food if they lacks the property.
*/

/*
const waffle =  Object.create(food);
const carrot = Object.create(food);

food.eat = function(){
  console.log('You ate uppercased ' + this.type.toUpperCase());
}

waffle.init("Waffle");
waffle.eat();

carrot.init("Carrot");
carrot.eat();

*/


//---------------------X-----------------------X-------------------X-------------------

const waffle =  Object.create(food);
const carrot = Object.create(food);

/*
waffle.init("Waffle");
waffle.eat();
food.type = 'newType';
waffle.eat();
waffle.type = 'iajdlasjdlasdjlka';
waffle.eat();
*/


/*
//waffle.init("Waffle");
waffle.eat();                          //undefined
food.type = 'newType';
waffle.eat();                          //newType       (falling back to it's prototype)
waffle.type = 'iajdlasjdlasdjlka';
waffle.eat();                          //iajdlasjdlasdjlka
*/

waffle.init('waffle');
carrot.init('carror');

console.log("is waffle is a food?", food.isPrototypeOf(waffle));

console.log("is int is food? ", food.isPrototypeOf(12345));

console.log("is carrot is food?", food.isPrototypeOf(carrot));

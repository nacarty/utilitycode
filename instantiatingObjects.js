
function Person() {
    this.dob  = '1800-1-1';
    this._name = 'anybody';
}

function Adult1(){
    Person.call(this);  //a call on Person() but the 'this' upon that call refers to Adult2.this
    this.age = 16;
}

Adult1.prototype = Object.prototype;  //Person.prototype appears to be undefined. Therefore, Adult1.prototype is also undefined
                                                                          // or rather, it appears that the prototype for Person cannot be assigned to Adult1.prototype
                                                                          // The same thing can be said about Object.prototype . It's value is not assignable to Adult.1, it would appear

function Adult2(){
    Person.call(this);
    this.age = 16;
}
Adult2.prototype = Object.create(Person);   //OR Adult2.prototype = Person - The prototype of Adult2 is Person()



var Bob1 =  new Person();  //it does not matter whether the parenthesis is used after the constructor function's name, or not
var Bob2 =  new Person;  
var Angie = new Adult1();   //notice that the prototype for Angie and Adam are different
var Adam =  new Adult2();

console.log('The properties of Person: ', Object.keys(Person) );   //returns an empty array. Person() has no properties of its own
console.log('The properties of Bob1: ', Object.keys(Bob1) );  // returns [ 'dob', '_name']
console.log('The properties of Bob2: ', Object.keys(Bob2) );  // returns [ 'dob', '_name']
console.log('The properties of Angie: ', Object.keys(Angie) );  // returns [ 'dob', '_name', 'age']
console.log('The properties of Adam: ', Object.keys(Adam) ); // returns [ 'dob', '_name', 'age']
console.log('The protoype of Angie: ', Angie.prototype );  // returns undefined
console.log('The protoype of Adam: ', Adam.prototype);  //returns { 'constructor: function Person(), __proto__: Object}
console.log('Is Angie an instance of Person: ', Angie instanceof Person );
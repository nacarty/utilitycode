//This application is an exercise in closures, object instantiation, etc. Revealing exercise.

/*******************************************************************************************
 * Below, makeCounter is simply a function that returns an object with 3 functions. Equally, we could write 
 * function makeCounter(){ } which will be just as effective. In order for makeCounter to be an object instance 
 * initiator, it has to return an object. 
 * 
 * You would notice below that a new object can be created by (1) simply calling the function and assigning its
 * return value, an object, to a variable, counter1, for example; OR by (2) invoking the new operator.
 * **************************************************************************************** */

 var makeCounter = function() {     
  var privateCounter = 0;
   
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
};  
};

/*******************************************************************************************
 * Below, makesomething() is a function that makes objects with 3 object properties that are functions. Instead of 
 * returning an object with the preceding fields, the function creates fields in any object that will be instatntiated 
 * from it. A call such as - var obj1 = makeSomething(); - would return nothing so no object will be instantiated. 
 * Therefore, to instantiate an object, we MUST use - var  obj1 = new makeSomething() - with or without parenthesis.
 * **************************************************************************************** */

function makeSomething(){
    var privateCounter = 0;
    this.increment = function() {
      changeBy(1);
    };
   this.decrement =function() {
      changeBy(-1);
    };
   this.value = function() {
      return privateCounter;
};

/* Note: if the function returns an object as in {height: 5.6, weight:150.8} below, the object instantiated from it 
 * as in  - new makeSomething)()  - will get just the properties of the returned object. If the function does not
 * return an object, the object instantiated from it will get the properties of the function object itself. */
  
return{
    height: 5.6,
    weight: 150.8
};
}

//Note below: counter1, counter2 and counter0 are all objects built from makeCounter()

var counter1 = makeCounter();   //if counter1 is going to be an object, then makeCounter() with parenthesis is obligatory. 
                                                             //Else, counter1 will simply be a function
var counter2 = makeCounter();
var counter0 = new makeCounter;  //However, in this case, whilst using the new operator, makeCounter is called as a constructor function. 
                                                                  // Therefore, makeCounter call be invoked with or without the parenthesis and returns the same object as it did above

var ms = makeSomething();  //ms is undefined only if makeSomething returns nothing, even if MakeSomething() has properties
var mso = new makeSomething();  //mso is an object with the properties increment(), decrement() and value()

alert('Counter1.value: '+counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert('Counter1.value: '+counter1.value()); /* Alerts 2 */

alert('Counter2.value: '+counter2.value());  //0

counter0.increment();
counter0.increment();
counter0.increment();
alert('Counter0.value: '+ counter0.value());  //3

alert('Counter1 properties '+ Object.keys(counter1)); //[ increment, decrement, value]
alert('Counter2 properties '+ Object.keys(counter2)); // [ increment, decrement, value]
alert('Counter0 properties '+ Object.keys(counter0)); //[ increment, decrement, value]

alert('MS: '+ms);  //undefined  
alert('MSO keys: '+Object.keys(mso)); // [ increment, decrement, value]

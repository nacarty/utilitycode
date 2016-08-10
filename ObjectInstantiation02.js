/******************************************************************************************
 *  Note: We can build the object 'bob' by having the Person() function return an object that has properties in the
 *  form of functions. For example:
 *  function Person(){
 *                      var FName, LName;
 *                      return {
 *                              getFullName: function () {  },
 *                              getFirstName: function(){  },
 *                              etc
 *                              };
 *                          }
 *   
 * The returned value would be an object. Hence:
 *              var bob = Person(); 
 *   would make bob an object. However, bob would not be an instantiated object. It would not be an instance of
 *   Person.                                                                                                                                            
 *  */

function Person() {
var FName = 'Bob',
       LName = 'Ross';
       
    return{
            getFirstName: function(){
                return FName;
            },
            getLastName: function(){
                return LName;
            },
            getFullName:function(){
                return (''+this.getFirstName() + ' ' +this. getLastName());
            },
            setFirstName:function(first){
                FName = first;
            },
            setLastName:function(last){
                LName = last;
            },
            setFullName: function(firstAndLast){
                  var arr = firstAndLast.split(' ');
                  FName = arr[0];
                  LName = arr[1];
            }
        };
}

var bob = new Person();  //not necessary to invoke 'new'. The same result as var bob = Person()
bob.setFirstName('Tarren');
console.log('Bob\'s full name: ', bob.getFullName());
bob.setLastName('Tweedie');
console.log('Bob\'s full name: ', bob.getFullName());
bob.setFullName('Nigel Carty');
console.log('This is Bob: ', bob);
console.log('Bob\'s keys: ', Object.keys(bob));
console.log('Is Bob an instance of Person? ', bob instanceof Person);  //this will be false because bob is not an instantiation of Person()
console.log('Bob\'s first name: ', bob.getFirstName());
console.log('Bob\'s last name: ', bob.getLastName());
console.log('Bob\'s full name: ', bob.getFullName());

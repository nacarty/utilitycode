//To check to see whether an argument is a number in a strict sense, use 'typeof val;'
//If val is a number, 'number will be returned'. Else, something else (string, undefined, object, boolean, etc) will be returned.
//On the other hand, isNaN(val) will return 'true' only if val is a string that cannot be interpreted as a number, or val is undefined.
//For example, '123' '12.3' '12e2' etc will all be interpreted as numbers by isNaN() and will return false (that is, it is false that these
//values are not numbers.

function addTogether() {
   var arg1= arguments[0], arg2 = arguments[1];
    
    if ( typeof arg1 !== 'number' )
    {
        return undefined;
    }
    else if  ( arg2 !== undefined)
    {
        if ( typeof arg2 !== 'number' )
        {
              return undefined;
          }
         else
         {
             return arg1 + arg2;
         }
     }
     else // if (arg2 === undefined)         
        return function(){
                                            var arg2 = arguments[0];
                                            if ( typeof arg2 !== 'number')
                                            {
                                                return undefined;
                                            }
                                            else
                                            {
                                                return arg1 + arg2;            
                                            }
                                       } ;  
  
}

addTogether(2, 123);

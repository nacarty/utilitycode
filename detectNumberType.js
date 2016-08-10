//To check to see whether an argument is a number in a strict sense, use 'typeof val;'
//If val is a number, 'number will be returned'. Else, something else (string, undefined, object, boolean, etc) will be returned.
function addTogether() {
   var arg1= arguments[0], arg2 = arguments[1];
    
    if ( typeof arg1 !== 'number' )
    {
        console.log('The first argument is invalid or non-existent..');
        return undefined;
    }
    else if  ( arg2 !== undefined)
    {
        console.log('The second argument has been passed');
        if ( typeof arg2 !== 'number' )
        {
            console.log('but it is invalid');
              return undefined;
          }
         else
         {
             console.log('The sum is: ', arg1+arg2);
             return arg1 + arg2;
         }
     }
     else // if (arg2 === undefined)         
        return function(){
                                            var arg2 = arguments[0];
                                            console.log("I'm in the second function called..");
                                            if ( typeof arg2 !== 'number')
                                            {
                                                console.log('The second argument is invalid');
                                                return undefined;
                                            }
                                            else
                                            {
                                                console.log('The sum of the new arguments: ', arg1+arg2);
                                                return arg1 + arg2;            
                                            }
                                       } ;  
  
}

addTogether('2', 123);

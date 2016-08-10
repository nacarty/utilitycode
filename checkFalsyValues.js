//The Global function Boolean(x) returns false for any x that is a falsy value.
//Falsy values are 0, false, null, NaN, '', 0 and undefined. 

function truthCheck(collection, pre) {
  var len = collection.length;
  var i = 0;
  
  while (i < len)
  {
      if (Boolean(collection[i][pre]) === false)
          return false;
        console.log("The chosen field's value: ", collection[i][pre]);
        i++;
  }
  
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

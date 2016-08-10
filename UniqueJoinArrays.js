//This function assumes that ZERO or more arrays will be passed to it.

function uniteUnique(arr) {
    var jArr = arguments[0];      //first array in the arguments list
    var UN = [], len = arguments.length ;
    
    if (len >1)
    for ( var i = 0;  i < (len -1);  i++) //assume the arguments list is two or more arrays
    {
        jArr = jArr.concat(arguments[i+1]);
    }
    
    jArr.forEach(function(cur, i){
        if ( (UN.indexOf(cur)) < 0)             //if   the current value is not yet in UN array, push it in.
             UN.push(cur);       
    });
  console.log(UN);  
  return UN;
}

uniteUnique([1, 2, 3], [5, 2, 1]);

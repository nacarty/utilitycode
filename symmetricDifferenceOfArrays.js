function sym(args) {
  var newArr = arguments[0],
          arr1,
          arr2,
          len = arguments.length;
  
    console.log('the original arrays: ',arguments[0],'    ',arguments[1] );
    if (len <= 1)
        return arguments[0];  
    
  for (var i = 0; i <= len-2; i++)
  {    
        arr1 = newArr;
        newArr = [];
        arr2 = arguments[i+1];
        console.log('The first two arrays in FOR loop: ',arr1, '   ', arr2);

        arr1.forEach(function(curVal, i, arr1 ){
                    if   ( (  arr2.indexOf(curVal)  === -1  ) && (  newArr.indexOf(curVal)  === -1  ) )
                    {           newArr.push(curVal);  
                                console.log('Array 1 value ', curVal,' found in array 2? ', arr2.indexOf(curVal));
                    }
                                                 });  
       arr2.forEach(function(curVal, i, arr2 ){
                    if    ( ( arr1.indexOf( curVal)   ===   -1 ) && (  newArr.indexOf(curVal)  === -1  ) )
                    {
                              newArr.push(curVal);  
                              console.log('Array 2 value ', curVal,' found in array 1? ', arr1.indexOf(curVal) );
                   }
                                                 });   
                                                 
  }

  return newArr.sort(function(a, b){ 
                                                      return a - b;
                                                                   });
    
}

sym([1, 2, 3, 3], [5, 2, 1, 4], [7,8,9,3,6,11, 7, 7,11,6,6,6,6,9,9,9,9,8,8,8]);

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function diffArray(arr1, arr2) {
  var newArr = [];
  
  arr1.forEach(function(curVal, i, arr1 ){
                                                                 if  (  arr2.indexOf(curVal)  === -1  )
                                                                       newArr.push(curVal);  
  });
  
   arr2.forEach(function(curVal, i, arr2 ){
                                                                 if  (  arr1.indexOf( curVal)   ===   -1 )
                                                                       newArr.push(curVal);  
  }); 
  
  console.log('Here is the new array: ',newArr);
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/*******************************************************************************************
 * Note: Array.shift() removes an element from the front of an array; Array.pop() removes an element from the  *
 * back of an array; Array.unshift()  inserts an element at the front of an array, and Array.push() pushes an            *
 * element onto the back of an array.  The function can therefore be implemented using Array.shift() with             *
 * Array.push() or using Array.pop() with Array.unshift();                                                                                                          *
 * ******************************************************************************************/

var flatArr;
var count = 0;


function steamrollArray(arr) {
   var newArr;
   
    if (Array.isArray(arr))
  { 
      newArr = arr.shift();
          
      if (( newArr !== undefined)&&(newArr!==null))
      {             
          steamrollArray(newArr);
           steamrollArray(arr);
      }      
  }
  else
  {     
        flatArr[count]= arr; // flatArr.push(arr);;
        count++;
   }
  
   console.log(flatArr);
 return flatArr;
}
steamrollArray([1, {}, [3, [[4]]]]) ;
 
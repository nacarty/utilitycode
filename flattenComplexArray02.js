
var flatArr=[];

function SRA(arr){
    var newArr;
    
    //console.log('array in called function: ',arr);
    if (Array.isArray(arr))
  { 
      newArr = arr.shift();
          
      if (( newArr !== undefined)&&(newArr!==null))
      {             
          SRA(newArr);
          SRA(arr);
      }      
  }
  else
  {     
      if (Array.isArray(flatArr))
          flatArr.push(arr);
   }
  
 return flatArr;
    
}


function steamrollArray(arr) {
 var newArr = arr;
 
 console.log('original array before SRA call',arr);
 
 newArr = SRA(newArr);
 
  console.log('the new array after flattening',newArr);
 console.log('original array after SRA call ',arr);
 console.log('original array is an array??? ',Array.isArray(arr));
 


 newArr.forEach(function(cur, i){
     arr.push(cur);
 });
 
 console.log('original array after repletion',arr);
  return arr;
}

steamrollArray([1, [2], [3, [[5]]]]);


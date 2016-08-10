function steamrollArray(arr) 
{
    var len = arr.length;
    var item1, item2, count = 0;
           stack = [];
  
  for(var i = 0; i < len; i++)
    {
        item1 = arr.shift();     
        
        while ( (item1 !== undefined)  )
        {
                while ( Array.isArray(item1) )
                {
                       item2 = item1.shift();                   
                       if (item1.length > 0)
                            stack.push(item1);                   
                       item1 = item2;                               
                }//while        
                if  (item1 !==  undefined)
                    arr.push(item1);                        
                 
                if  (stack.length > 0)   
                     item1 = stack.pop();                     
                 else 
                     item1 = undefined;              
    } 
   } 

console.log('The flattened array just before RETURN: ', arr );
  return arr;
}


steamrollArray([1, [2],[3,[4,[5,6]]]]);

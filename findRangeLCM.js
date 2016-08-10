var primes =[];
/*************************************************************************************
 *  This function generates an array of prime numbers to be used to find the LCM of a range of numbers.  *
 *  It employs the Erathosenes algorithm.                                                                                                                          *
 *  ***********************************************************************************/
function genPrimes(num) {
 var count,
        arr = [0,0];  
  
 for (var x = 2; x <= num;  x++) 
     arr[x] = x; 
 
 console.log("The seuential array:", arr);
 
 for ( var i =2; i <= num/2; i++) 
 {     if (arr[i] !==0)
       {
            for ( var j = i*2; j <= num; j+=i )
           {
                arr[j] = 0;
           }         
      } 
}

for (count = 0, j = count+1; (count < num)&&(j<=num); )
{
      if (arr[j] !== 0)
        {
            arr[count]=arr[j];
            arr[j]=0;
            count+=1;          
        }          
            j++;        
}    
    
    console.log("The array before consolidation:", arr);
    return arr.slice(0, count+1);  
}

/*************************************************************************************
 *  This function generates the LCM of two given numbers. It is a recursive function.                                         *
 *  ***********************************************************************************/

function LCM(min, max, pos)
{
    var pf = primes[pos];
    
    if ( (min === 0)||(max ===0))
      return NaN;
 
   else if  ( (max%min) === 0)
        return max;
    
    else if ( (min%max) === 0)
        return min;
    
    else if ( ( (min%pf) === 0) || ( (max%pf) === 0)  ) 
    {
        if ((min%pf) === 0)
            min/=pf;
        if ((max%pf) === 0)
            max/=pf;
         return pf * LCM(min, max, pos);         
    }
    else 
    {
        return LCM(min, max, pos+1 );
    }      
}

/*************************************************************************************
 *  This function calls the prime number generating function and the LCM function.                                          *
 *  ***********************************************************************************/


function smallestCommons(arr) 
{
 var max = Math.max(arr[0], arr[1]),   //suppose the numbers are negative
        min = Math.min(arr[0], arr[1]),
        numArr = [],
        SCM = 1,
        len=0;
 primes =  genPrimes( Math.floor(max/2)*100 );         
 
 
 for (var i = 0; i <= (max - min); i++)
 {
   numArr[i] = min + i;     
 }
 
 console.log("The PRIME array: ", primes);
 console.log("The array of numbers min to max ", numArr );
 
 len = numArr.length;

  for (var i = 0; i < len; i++)
  {
      SCM = LCM(SCM, numArr[i], 0);
  }
  
  console.log("The SCM is: ", SCM );
  return SCM;
  
}


smallestCommons([23, 18]);

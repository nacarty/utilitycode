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

console.log("The array before consolidation:", arr);

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
    
    console.log("The array after consolidation:", arr);
    return arr.slice(0, count+1);  
}

/*************************************************************************************
 *  This function generates the LCM of two given numbers. It is a recursive function.                                         *
 *  ***********************************************************************************/

function LCM(arr, pos)  //suppose array has a zero element
{
    var pf = primes[pos];
    var done = true;
    var len = arr.length;
    var division = false;
    
    console.log("The array of numbers min to max ", arr );
    
    for (var i = 0; (i<len); i++)
    {
        if (arr[i] !== 1)
               done = false ;
    }    
    console.log("I am done: ", done );
    
    if (done)
        return 1;
    
  /*----------ELSE----------*/  
  
    for (var i = 0; i < len; i++)
    { 
        if (arr[i]%pf===0)
        {
            arr[i] = arr[i]/pf;  
            division = true;
        }
    }    
    if (division === true)
        return pf * LCM(arr, pos);         
    else 
          return LCM(arr, pos+1 );     
}

/*************************************************************************************
 *  This function calls the prime number generating function and the LCM function.                                          *
 *  ***********************************************************************************/


function smallestCommons(arr) 
{
 var max = Math.max(arr[0], arr[1]),   //suppose the numbers are negative
        min = Math.min(arr[0], arr[1]),
        numArr = [],
        len=0;
 primes =  genPrimes( max );         
 
 
 for (var i = 0; i <= (max - min); i++)
 {
     numArr[i] = min + i;     
 }
 
 console.log("The PRIME array: ", primes);
 console.log("The array of numbers min to max ", numArr );
 
  console.log("The SCM: ", LCM(numArr, 0));
  
}


smallestCommons([23, 18]);

function sumPrimes(num) {
 var sum =0;
       arr = [0,0];
  
  
 for (var x = 2; x <= num;  x++) 
     arr[x] = x;
 
 
 for ( var i =2; i <= num/2; i++) 
 {
     console.log("Multiples of ", i, ' are being removed..');
     
     if (arr[i] !==0)
       {
            for ( var j = i*2; j <= num; j+=i )
           {
                arr[j] = 0;
                
               console.log("Removed num: ", j);
           }         
    } 
}
 
 for (var y = 2; y <= num; y++ )
 {
     sum +=  arr[y] ;
          console.log("The addend :", arr[y]);
 } 
 
console.log("The full array :", arr);
console.log("The full sum :", sum);
      
               
 return sum;
 
 
 }

sumPrimes(50000);

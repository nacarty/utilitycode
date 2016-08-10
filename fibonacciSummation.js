/*
 * NOTE: Every 3rd Fibonacci Number is even. All others are odd. Therefore, exclude every 3rd Fibonacci Number 
 * from the sum.
 * Note 2: No need to do a recursive implementation of Fibonacci.
 */

function sumFibs(num) 
{
 var sum;
 var fib;
 var n1, n2;
 var count;
 var done = false;
 
 if (num <= 0)
     return 0;
 else if (num <= 2)
     return num;
 
 else 
 {     count = 2;
       sum =  2;
       n1 = 1, n2 = 1;
       fib = 2;
        while (fib <= num)
        { 
           fib = n1 + n2;
           n1 = n2;
           n2 = fib;
           count++;
           
            if  ( ((count%3))&&(fib <= num) )
           {
               sum += fib;
           }
           console.log("The fibonacci sum: ",sum, ' count mod 3', count%3);
       }
               
        return sum;
 }//else
 
 }

sumFibs(100.0e+100);

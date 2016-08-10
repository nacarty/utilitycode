/******************************************************************************************
 * The program below is intended to determine the number of permutations of a string that do not have two
 * or more of the same character repeated in a sequence. Admittedly, if the string contains an arbitrary number 
 * of characters repeated 3 or more times, the programme will not work properly unless the specific scenario fits 
 * one of the base cases. However, if the string contains no characters repeated 3 times or more, the program 
 * should yield the correct result.
 ******************************************************************************************/


/*******************************************************************************************
 * This function takes the string (str) passed to it and tabulates the number of instances of each character in the
 * string. It returns the tabulated array. For example, given an array [a, a, a, b, b, c, d, e], it returns the array
 *  [ [a,3], [b, 2], [c, 1], [d, 1], [e, 1] ]. This array is used to determined how many instances of each character is in 
 *  the string passed.
 *  **************************************************************************************** */
function repeaters(str){
    var arr =[],
            len = str.length,
            idx, i, j,
            found;
    
    for (i = 0; i < len; i++ )
    {
        found = false;    
        for ( j = 0; j < arr.length; j++) {            
                if ( arr[j][0] === str[i] ){
                   found = true;
                   break;   }
          }//for
        
        if (found)
            arr[j][1]++;
        else
             arr.push([str[i], 1]);
    }  //for    
    return arr;
}//repeaters

/*******************************************************************************************
 * This calculation of the number of permutations of a string not having two or more characters in sequence  
 * requires that we know how many double repeats and triple repeats of characters are in the string. Every 
 * character that is doubly repeated has one (1) combination of selecting the two (i.e 2-combination-2) characters,
 *  and  every character triply repeated has  three (3) combinations( 3-combination-2) of selecting any
 *  two. The sum of the 1's and  3's above, K, is determinant in the calculation of the overall permutation. The function 
 * below determines K
 *  **************************************************************************************** */
function calcK(arr){
    var k = 0;
    
    for (var i = 0; i < arr.length; i++)
            if (arr[i][1] >= 2)
                 k+= combination(arr[i][1], 2);
    return k;    
}

/*******************************************************************************************
 * The function below is used to determine what is the maximum (mx) number of repeats. If mx is 2, the problem 
 * is fairly simple. If mx is 3, the problem is more difficult especially if more than two characters are triply repeated.
 ********************************************************************************************/
function max(arr)
{
    var mx = 1;
    
    for (var i = 0; i < arr.length; i++)
            if (arr[i][1] > mx)
                mx = arr[i][1];
    return mx;
}

/*******************************************************************************************
 * The function below is used to determine how many characters in the array arr have been tabulated MX times.
 * In that way, it tells how many characters have been doubly repeated and how many have been triply repeated 
 ********************************************************************************************/
function howMany(arr, mx){
    var count = 0;
    
    for (var i = 0; i < arr.length; i++)
            if (arr[i][1]=== mx)
                count++;        
    return count;    
}

/*******************************************************************************************
 * The function below returns the factorial of a given integer n
 *******************************************************************************************/
function factorial(n){ 
    var ans = 1;     
    
    if (n < 2)
        return ans;    
    for (var i = 2; i <= n; i++ )
        ans *= i;

    return ans;    
}

/*******************************************************************************************
 * The function below returns the combination of two given integers, a and b, a >= b
 *******************************************************************************************/
function combination(a,b)
{
    return factorial(a)/(factorial(b)*factorial(a-b));
}

/*******************************************************************************************
 * The function below implements the formula for determining from mathematical principles the number of 
 * permutations of a string that do not have two or more of the same character repeated in a sequence. While the 
 * function, I believe, perfectly implements the mathematical formula for a string with any number of characters
 * doubly repeated, if there are two or more characters triply repeated, the formula is not guaranteed to return
 * the correct answer. In addition, the formula does not handle higher order repetitions (i.e 4 and above)
 *  The logic of this function can be illustrated through the use of Venn diagrams.
 *******************************************************************************************/
function formula(arr, n){
    var perms = 0;    
    var incr = 0;
    var h = howMany(arr, 3);
    var t = howMany(arr, 2);
    var k = h*3 + t;
   var m = h + t;
    
    console.log('This is the value of k in calcK(): ', k, 'and t is: ', t);
      console.log('And the length of the string used in formula is:', n);
    
    for (var i = 0; i <= (k - h*2) ; i++)  // i <= (k - h*2)
    {
             incr = Math.pow(-1, i)*factorial(n-i)*Math.pow(2,i)*combination(k,i);
             console.log('This is the incremental value: ', incr);
             perms += incr;
     }
     
     if (h === 1)
      for (var i = 1; i <= (k - t) ; i++)
    {
             incr = Math.pow(-1,i)*factorial(3)*factorial(i)*2;
             console.log('This is the incremental value: ', incr);
             perms += incr;
     }    
    
    return perms;
}

/*******************************************************************************************
 * The function below calls the function repeaters(str) and determines the number of permutations for some trivial 
 * or base cases but calls  the function formula(arr, len) to determine more difficult permutations.
 *******************************************************************************************/
function permAlone(str) {
    var arr = repeaters(str),
            lenS = str.length,
            lenA = arr.length,
            mx = max(arr),
            answer;
    
    if (lenS <= 1)  //no letter can possibly be repeated since only 1 letter in the string
        answer = 1;
    else if (lenA === 1)  //there are two or more characters in the string and they are all alike. See function repeaters(str) above
        answer = 0;
    else if  ( ( mx/lenS ) >= (0.5 + 1/(lenS+2) ) )  //the highest number of repitions for a single character is 50% + delta of the total number of items 
        answer = 0;

    else if (lenS === lenA)  //there are no repeats. Therefore, just return factorial(N) where N is length of the string
        answer = factorial(lenS);
    
    else 
    {      
        answer = formula(arr, lenS);
    }
    console.log('And the answer is ....', answer);    
    
    return answer;
}

permAlone('aabbccddeeffgg');

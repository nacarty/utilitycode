/* 
 In this function, V_ signifies V x 1000 ( or 5000). Likewise, M_ signifies Mx100 (or 1,000,000), and so on.
 */
var U = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var T  = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var H= ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
var TH = ['','M', 'MM', 'MMM', 'MV_', 'V_', 'V_M', 'V_MM', 'V_MMM', 'MX_'];
var TTH = ['','X_', 'X_X_', 'X_X_X_', 'X_L_', 'L_', 'L_X_', 'L_X_X_', 'L_X_X_X_', 'X_C_'];
var HTH = ['','C_', 'C_C_', 'C_C_C_', 'C_D_', 'D_', 'D_C_', 'D_C_C_', 'D_C_C_C_', 'C_M_'];
var M = ['M_'];



function convertToRoman(num) {
 
    var n = Math.floor(num),
        remainer,
        prefix = '';
        arr = [],
        roman='';
        
if (n === 0)        
    return 'ZER0';

if (n < 0)
{
    prefix = '-';
    n *= -1;
}
 
 while (n !==  0)
 {
     remainder = n % 10;
     arr.push(remainder);     
     n = Math.floor(n/10); 
 }  
 
 arr.forEach(function(cur, i){
     console.log('This is [i][cur]: ', i, '  ', cur);
     if (i===0)
         roman = U[arr[0]].concat(roman);
     else if (i===1)
         roman = T[arr[1]].concat(roman);
     else if (i===2)
         roman = H[arr[2]].concat(roman);
     else if (i===3)
         roman = TH[arr[3]].concat(roman);
     else if (i===4)
         roman = TTH[arr[4]].concat(roman);
     else if (i===5)
         roman = HTH[arr[5]].concat(roman);
     else // if (i >= 6)
     {                 
         if (arr[i]  > 0 )
         {  
             var tempArr =[];
             var Multiplier = Math.pow(10, i - 6);  
             
                for (var j = 0; j < (arr[i]*Multiplier ); j++ )
                {
                   tempArr.push(M[0]);
                }         
                 roman = tempArr.join('').concat(roman);
       }
     }   
                   
 });
 
 console.log('This is my array:' , roman);
 return prefix.concat(roman);
}

convertToRoman(26546336);

/* 
 This function takes into account that an overline Roman Numeral character means that the character 's value
 is multiplied by 1000. Eg. an V-overlined means 5x 1000. Likewise, D-overlined signifies 500x1000, and so on.
 */

var Ov = "\u0305"; //overline character modifier (UNICODE)
var A = [ ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                 ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                 ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                 ['','M', 'MM', 'MMM', 'MV'+Ov, 'V'+Ov, 'V'+Ov+'M', 'V'+Ov+'MM', 'V'+Ov+'MMM', 'MX'+Ov],
                 ['','X'+Ov,  'X'+Ov+'X'+Ov,      'X'+Ov+'X'+Ov+'X'+Ov,   'X'+Ov+'L'+Ov, 'L'+Ov, 'L'+Ov+'X'+Ov,  'L'+Ov+'X'+Ov+'X'+Ov, 'L'+Ov+'X'+Ov+'X'+Ov+'X'+Ov, 'X'+Ov+'C'+Ov],
                 ['','C'+Ov, 'C'+Ov+'C'+Ov, 'C'+Ov+'C'+Ov+'C'+Ov, 'C'+Ov+'D'+Ov, 'D'+Ov, 'D'+Ov+'C'+Ov, 'D'+Ov+'C'+Ov+'C'+Ov, 'D'+Ov+'C'+Ov+'C'+Ov+'C'+Ov, 'C'+Ov+'M'+Ov],
                 ['', 'M'+Ov ,'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov , 'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov+'M'+Ov ] ];


function convertToRoman(num) {
 
    var n = Math.floor(num),
        remainder,
        prefix = '',
        arr = [],
        roman='';
        
if (n === 0)        
    return 'ZER0';

if (n < 0)  //Is the number negative??
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
     if ( i  <  6 )
         roman = A[i][arr[i]].concat(roman);
     else // if (i >= 6)
     {                 
         if (arr[i]  > 0 )
         {  
             var tempArr = [];
             var Multiplier =  Math.pow(10, i - 6);
             
                for (var j = 0; j <  Multiplier;  j++ )
                {
                   tempArr.push(A[6][arr[i]]);
                }         
                 roman = tempArr.join('').concat(roman);
        }
     }   
                   
 });
 
 return prefix.concat(roman);
}

convertToRoman(-2016);

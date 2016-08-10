REGULAR EXPRESSIONS

/****************************************************************************************
* Here's the explanation for the Regular Expression (regExp) below:
 *    / bla bla /     Regular expressions are enclosed in / and /
 *    ^    Means the match must start from the very begining of the string. A match in thye center only is 
 *    unacceptable
 *    -{0,1}  Match a dash with 0 or 1 occurrence
 *    (x) is a memory device that returns the value of the specific match for that part of the RegExp that matches x
 *    (?:) turns of the memory device and uses the bracvket just as a grouping operator
 *   [1-9] Matches one occurrence of any digit from 1 to 9
 *   \d{0,19}  Matches 0 to 19 occurrences of a digit 0 to 9
 *   (a|b) Matches a or b where a and be are regExp subsets
 *   $  Nothing should follow for the match to be successful. Alternatively use (?!.), i.e not followed by any   *    usual character
 *   \d(?!.)    Match a digit but that digit must not be followed by any character
 *   
 *********************************************************************************************/

shortInt = /^(0|([1-9][\d]{0,9}))$/;                // validates an integer with 4 digits
decimal = /^-{0,1}(?:(?:[1-9]\d{0,19})(?!\d)|0)(?:.\d{1,16}){0,1}$/;  //validates a decimal number with at most 20 leading digits and at most 16 digits following the decimal point
        
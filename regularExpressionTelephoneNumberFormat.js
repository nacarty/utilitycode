/*
 * The function below validates a US-styled telephone number of the forms:
 * 1-xxx-xxx-xxxx OR 1 xxx xxx xxxx OR xxx-xxx-xxxx  OR 1xxxxxxxxxx OR 1(xxx)xxx-xxxx,etc, where x is a digit.
 * Generally, each triplet or quadruplet must not have any intra-group spaces or dashed but each group may be
 * separated by one space or one dash or no space or dash at all. 
 * 
 * Here's the explanation for the Regular Expression (regExp) below:
 *    / bla bla /     Regular expressions are enclosed in / and /
 *    ^    Means the match must start from the very begining of the string. A match in thye center only is unacceptable
 *    [- | \s]  Match a dash or a whitespace (\s)
 *   1 [- | \s]{0,1}   Match a 1 followed by 'a dash or a whitespace (\s) from 0 up to 1 occurrences'.
 *   ( 1[-|\s]{0,1} ){0,1}    Match the above result 0 up to 1 occurrences
 *   \d\d\d    match 3 digits [0-9] in a sequence
 *   \(\d\d\d\)     Match an opening parenthesis followed by 3 digits in sequence followed by a closing parenthesis
 *   ((\(\d\d\d\)) |  (\d\d\d))    Match \(\d\d\d\)  OR  \d\d\d 
 *   \d\d\d\d    Match 4 digits in a row
 *   \d(?!.)    Match a digit but that digit must not be followed by any character
 *   
 *      */
function telephoneCheck(str) {
  
  var regExp = /^(1[-|\s]{0,1}){0,1}((\(\d\d\d\))|(\d\d\d))[-|\s]{0,1}\d\d\d[-|\s]{0,1}\d\d\d\d(?!.)/; 
          
  //Note: Only one of the following four (4) are required.        
  var match1 = str.match(regExp);   //returns an array with the substrings that match; the index of the first match, and the original string OR NULL otherwise
  var search1 = str.search(regExp);  // returns the index of the matched substring OR  -1  if no match exists
  var match2 = regExp.exec(str);  // Match1 and Match2 are identical....
  var search2 = regExp.test(str);   //returns true if there is a match, false otherwise
  
  console.log("The match: ", match1, "\nthe search results: ", search1);
  console.log("The result of the regExp.exec()  and regexp.test(): ", match2, '\nThe test: ', search2);
  
  return (search === 0);
}

telephoneCheck("1-(065)-055-5616");



    /* NOTE: The top-level domain can be found via the following:
  var url = 'http://xxx.domain.com';
var regX = /[^.]+/
  console.log("The extracted domain: ", regX.exec(url)[0].substr(7));  
 */
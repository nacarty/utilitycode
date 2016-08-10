/* 
 * This function makes use of regular expressions whjich are powerful search tools. See the explanation below for
 * each regular expression used. See bookmark for references on Regular Expression. 
 * NOTE: The problem below could also be solved using a string.replace(replacee, replacer) where "replacee" is a
 * regular expression containing a memory device eg. /([A-Z])/g  where the bracket notation is the memory device.
 * In that case, use '$1' which is a reference to te first search result of the regular expression. However, this needs 
 * more research. 
 * Secondly, one can also use the regExp.exec() method to find the value and the index of the search match; then
 * use those to pieces of data to perform a str.replace(index, 0, str.charAt(index).toUpperCase());

 */
function spinalCase(str) {
    
  var regx1 = /[\s_-]{1,}/g,  //Regular Expression: find any whitespace or underscore or dash; at least once in succession. Search globally
         regx2 = /(?=[A-Z])/g,   //Regular Expression: find any null space that is followed by any character [A-Z]. Search globally
                                                  //When used tom split a string, no characters are comsumed in the splitting process.
         regx3 = /([A-Z])/g;
          
  str = str.replace(regx2, ' ').trim();
  
  str = str.replace(regx1, '-');
   
    arr = str.split('-');
  
  arr.forEach(function(cur, i){
      arr[i] = cur.toLowerCase();      
  });
  
   return arr.join('-');
    
  }

spinalCase('This Is   --------  ThisIsSoCoolSpinal  _ Tap');

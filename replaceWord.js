//This function replaces BEFORE with the word AFTER in a string STR. Furthermore, it maintains the case of the word being replaced.

function myReplace(str, before, after) {
    
  var re = new RegExp(before, 'igm');  //ignores case, searches globally and does multiline search if necessary
  var matchArr = str.match(re);
  var arr = [];
  
  for (var i = 0; i < matchArr.length; i++)
  {   
            if ( matchArr[i] === matchArr[i].toLowerCase() )  //is the match LowerCase?
                   str = str.replace(matchArr[i], after.toLowerCase());
               
             else if  ( matchArr[i] === matchArr[i].toUpperCase()  ) //is the match UpperCase?
             {   
                     str = str.replace( matchArr[i],  after.toUpperCase() );
              } 
              else if ( matchArr[i][0].toString()  === matchArr[i][0].toString().toUpperCase()  ) ////is the match SentenceCase? 
              {
                   arr = after.split('');
                   arr[0]= arr[0].toString().toUpperCase();
                   str = str.replace(matchArr[i], arr.join('') );
               }     
               
               else // Note: Unpredictable cases are ignored.Eg. camelCase
                   str = str.replace(matchArr[i],  after);
    }
    console.log('The string is this---->',str);
  return str;
}

myReplace("A quick brown fox jUmped over the lazy dog", "jumped", "leaped");

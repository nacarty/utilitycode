/* 
 * This function takes not only a single word but a string of any length even including whitespace characters 
 * other than the space character itself. However, I have not taken the time to deal with special characters like ?, etc.
 * In that case we may use RegExp(/^[^aeiouAEIOU0-9.&^%$#@!~+=\|\\\{\}\[\]'":;\/,'?]{1,}/, 'ig') where the special 
 * characters included. However, the preceding regExp will only deal with words that start with special characters.
 * It  will not deal with words that end in special characters. We need, form example, to remove the fullstop or
 * question mark at the end of a word/sentence; append '*ay' ; then append back the fullstop or
 * question mark.
 * 
 */

function translatePigLatin(str) {    
    var re = new RegExp(/^[^aeiouAEIOU]{1,}/, 'ig'); //starting for the beginning, select non-vowels, at least 1 time, ignore case, check globally 
    var s = new RegExp(/\s{1,}/, 'igm');  //alternatively, s = new RegExp(/\s*/, 'igm')   one or more space characters
    var matchArr = [];
    var wordArr = str.split(s);  //split the string according to one or more spaces
   
  for (var i = 0; i < wordArr.length; i++)
  {
        matchArr = wordArr[i].match(re) ;
        
        if ( matchArr === null)         
            wordArr[i] = wordArr[i].concat('way');
        else
            wordArr[i] = wordArr[i].slice( matchArr[0].length ).concat(matchArr[0]).concat('ay');
}//for

console.log(wordArr);

return wordArr.join(' ');
}

translatePigLatin('[God .is {good ?all \the :time ,and ;all |the /time "God is good.');

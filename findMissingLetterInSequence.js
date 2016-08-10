function fearNotLetter(str) {
  var i = 0, 
      missing = false; 
      len = str.length;
  
  if ( len <= 1 )
    return undefined;
  
  
  while ( (missing === false) && (i < (len - 1)) )
  {
      if ( (str.charCodeAt(i) + 1) !== str.charCodeAt(i+1) )
        return String.fromCharCode(str.charCodeAt(i) + 1); 
    
      else
        {
          i++;
        }
        
  }
  
  return undefined;  //only returned from here if hasnt returned above
}

fearNotLetter("abce");
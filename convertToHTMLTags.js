function convertHTML(str) {    
    
    var re;
   
    var matchArr = ['&','<', '>',  '"',"'",':'];
    var replaceArr = ['&amp;','&lt;','&gt;', '&quot;', '&apos;','&colon;'];

  matchArr.forEach(function(cur, i){
       re =  RegExp(cur, 'igm');
      str = str.replace(re, replaceArr[i]);
  });
  console.log('Heres the string:', str);
  return str;
}

convertHTML("Dolce & Gabbana <<<<< some < well : ' =  > >>>>>");

 function evenDate(d1, d2)
 {
     if (  (d2.getUTCFullYear() === d1.getUTCFullYear() ) &&  ( d2.getUTCMonth() === d1.getUTCMonth()  ) &&
                                                                                                                                       ( d2.getUTCDay() === d1.getUTCDay()  ) )
              return true;
      else
          return false;
  }
  
function sameMonth(d1, d2)
{
    if ( d1.getUTCMonth() === d2.getUTCMonth()  )
        return true;
    else
        return false;
}

function sameYear(d1, d2)
{
    if (d1.getUTCFullYear() === d2.getUTCFullYear() )
        return true;
    else
        return false;
}

function withinOneYear(d1, d2)
{ 
   if ( d1.getUTCFullYear() === d2.getUTCFullYear() )
       return true;
   
   else if ( (d2.getUTCFullYear() -  d1.getUTCFullYear() ) === 1)
   {
                if ( d2.getUTCMonth() < d1.getUTCMonth()  )
                {
                    return true;
                }
                else if ( d2.getUTCMonth() === d1.getUTCMonth()  )
                {
                         if ( d2.getUTCDate() < d1.getUTCDate()  )
                         {
                                  return true;
                         }
                         else
                         {
                             return false;
                         }
                 }
                 else
                     return false;       
   }   
   else
       return false;
}

function makeFriendlyDates(arr) 
{
  var Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  //0 - 11
  var DateOrd = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st']; //1 - 31
  
  var d1 = new Date(arr.shift()), //or  d1 = new Date(arr[0]);
         d2 = new Date(arr.shift()),
         curDate = new Date(),
         dStr1 = '',
         dStr2 = '';
  
  dStr1 = Month[d1.getUTCMonth()] + ' ' + d1.getUTCDate() + DateOrd[d1.getUTCDate() -1];
  if  (!withinOneYear(d1, d2) || ( d1.getUTCFullYear() !== curDate.getUTCFullYear() ) )
      dStr1 += ', '+ d1.getUTCFullYear();
  
  if ( evenDate(d1, d2)  )
  {
      dStr2 = null;
  }
  
  else
  {
        dStr2 = ''+d2.getUTCDate() + DateOrd[d2.getUTCDate() -1];
        if ( !sameMonth(d1, d2) || !sameYear(d1, d2) )
            dStr2 = Month[d2.getUTCMonth()] + ' ' + dStr2;
        if (!withinOneYear(d1, d2))
            dStr2 += ', '+ d2.getUTCFullYear();
  }
  
  arr.push(dStr1);  //array is now empty after shift operations above
  if (dStr2 !== null)
      arr.push(dStr2);
  console.log("This is the first date: ", d1, '       ',dStr1);
  console.log("This is another date: ", d2,'       ', dStr2);
  console.log("This is array of dates to be returned: ", arr);
  return arr;
}

makeFriendlyDates(["2001-09-11", "2002-09-10"]);

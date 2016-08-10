//This function returns a bolean indicating whether strings s1 > s2 and thus s2 should precede s1 in an ordered list.
//Created by Nigel Carty: July 15, 2016

function swapS(s1, s2)
{
    var arr1 = s1.trim().toLocaleLowerCase().split(/\s{1,10}/);
    var arr2 = s2.trim().toLocaleLowerCase().split(/\s{1,10}/ );
    var a = arr1.join('');
    var b = arr2.join('');
    
    var min = Math.min(a.length, b.length);
    var done = false;
    var swap = false;
    var count = 0;
    
    while ( ( done === false ) &&(count < min) )
    {
        if (  a.charCodeAt(count) === b.charCodeAt(count)  )
        {
            done = false;
            count++;
        }
        else
        {
            done = true;
            
                if (  a.charCodeAt(count)  >  b.charCodeAt(count)  )
                 {
                    swap = true;
                 
                  }
                  else
                 {
                    swap = false;
                    
                  }
              }
    
    }   //while
    
    return swap;
}

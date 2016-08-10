
function checkCashRegister(price, cash, cid) {
  var denominations = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100],
         changeArr = [], 
         balance = change = cash - price,
         cashTotal = 0,
         numNotes = 0,
         notesVal = 0.00,
         len = cid.length;
       
 for (var i = 0; i < len; i++)
     cashTotal += cid[i][1];
  
 
 if (balance > cashTotal)
     return "Insufficient Funds";
 
 else if (balance === cashTotal)
     return "Closed";
 
  else
            for ( var i = len - 1; i >= 0; i--)
            { 
                if ( (cid[i][1] > 0) && ( balance >= denominations[i] ) )
                {
                    numNotes = Math.floor(balance/denominations[i]);
                    notesVal = numNotes * denominations[i].toFixed(2);
                    
                    if (notesVal > cid[i][1])                   
                        notesVal = cid[i][1];
                    
                    balance = (balance - notesVal).toFixed(2);
                     
                     changeArr.push([cid[i][0], Number(notesVal.toFixed(2)) ]);
                  }
             }
         
  var changeMade = 0,
          L = changeArr.length;
  
   for (var j = 0; j < L ; j++)
 {
     changeMade += changeArr[j][1];
 }
 
if (changeMade < change)
  return "Insufficient Funds"; 
else if (changeMade === cashTotal) 
  return "Closed";
else 
      return changeArr;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.49, 20.00, [["PENNY", 0.01], ["NICKEL", 0.15], ["DIME", 0.40], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


// Example cash-in-drawer array, CID:
//[["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

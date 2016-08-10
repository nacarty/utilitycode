/*******************************************************************************************
 *  This function calculates the orbital period for an object rotating around the Earth. As can be seen from the
 *  implementation of the formula, the period of time T = 2xPIxSQRT(A-cubed / GM) where A is the distance of 
 *  the object from the center of the earth and GM is the standard gravitational parameter (or gravitational 
 *  constant, G, times mass of the earth, M.
 *******************************************************************************************/

function orbitalPeriod(arr) {
  var GM = 398600.4418,   //in KM_cubed over second_squared
         earthRadius = 6367.4447,  //in KM
         a = 0,
         len = arr.length,
         orbitalPeriod = 0 ;
 
 for (var i = 0; i < len; i++)
 {
    a = arr[i].avgAlt + earthRadius;   
   arr[i].orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(a, 3)/GM));  //calculate the orbital period and assign its value to a new property of arr[i]
   delete arr[i].avgAlt;
 }
 console.log('The array is: ', arr);  
  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

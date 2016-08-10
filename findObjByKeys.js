//This function returns an array with all objects in COLLECTION which has matching properties
//with SOURCE.

function findObjectByKeys(collection, source) {
 
  var arr = [],
         match,
         sourceKeys = Object.keys(source);   // or sourcekeys = Object.getOwnPropertyNames(source);
   
  collection.forEach(function(curC, i){
      match = true;
      sourceKeys.forEach(  function(curS, j )
        {   
           if ( curC[curS] !== source[ curS]  )
               match = false;                          
          });
          
       if (match === true)
           arr.push(curC);
  });
 
  console.log('This is the object array here ok!...', arr);
  
  return arr;
}

findObjectByKeys([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet", first:"Tybalt" });

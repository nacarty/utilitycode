function dropElements(arr, func) {
  // Drop them elements.
  while ( !func(arr[0]) ){
      console.log("The first element:", arr[0]);
      arr.shift();
  }
  console.log("The full array:", arr);
  return arr;
}

dropElements([4,3,4,3,1, 2, 3], function(n) {return n < 3; });

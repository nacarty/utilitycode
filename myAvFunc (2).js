function avg() 
{
  var sum = 0;

  for (var i = 0, j = arguments.length; i < j; i++) 
  {
    sum += arguments[i];
  }
  
  return sum / arguments.length;

}

avg(2, 3, 4, 5); 
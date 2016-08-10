function IsNativeBoolean(bool) {
  
  if (true === bool)
    return true;
  else if (false === bool)
    return true;
  else
    return false;
    
}

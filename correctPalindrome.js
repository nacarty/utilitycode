//=======================================================================================//
function extractCommas(currVal, i, arr)
{
  if (currVal === ',')
  return false;
   else
  return true;
} //=======================================================================================//

function extractSomeCharacters(aStr)
{
  console.log(' Character-extracting function entered...');
  var newArr = [
  ];
  var newSize = 0;
  var tempStr;
  for (var i = 0; i < aStr.length; i++)
  {
    tempStr = '' + aStr[i] + '';
    if (tempStr.match(/[a-zA-Z0-9]/gi) !== null) //if the character is not alphabetic
    {
      newArr[newSize] = aStr[i];
      console.log('\nCharacter ' + i + ': ' + aStr[i] + ' transferred to new string in position ' + newSize);
      newSize++;
    } 
    else
    {
      console.log('\nCharacter ' + i + ': ' + aStr[i] + ' is not transferrable to the new string.');
    }
  } //for

  console.log('Array with characters extracted from string...: ' + newArr);
  console.log('Character-extracting function ended...')
  return newArr;
} //=======================================================================================//

function compareStrings(s1, s2)
{
  console.log(' Compare Array function entered...');
  console.log('This is what the two arrays to be compared look like: "' + s1 + '" AND "' + s2 + '"');
  var isPal = true;
  for (var i = 0; i < s1.length; i++)
  {
    console.log('Characters \'' + s1[i] + '\' and "' + s2[i] + '" about to be compared..');
    if (s1[i] !== s2[i])
    {
      console.log('After this character comparison failed, this is not a palindrome...');
      isPal = false;
      return isPal;
    } 
    else
    {
      console.log('Successful comparison. ' + s1 + ' still on course to be a palindrome..');
    }
  }
  console.log(' Compare Strings function ended with a palindrome...');
  return isPal;
} //=======================================================================================//

function copyArray(currVal, curArrIndex, arr)
{
  return currVal;
} //=======================================================================================//
//============================= THIS IS THE MAIN FUNCTION  ==============================//
//=======================================================================================//

function palindrome(str)
{
  var myStr = str.trim().toLowerCase(); //convert to lowercase and trim
  var arr1,
  arr2,
  arr3;
  console.log(' Call the extract function...');
  arr1 = extractSomeCharacters(myStr);
  arr2 = arr1.map(copyArray);
  arr3 = arr1.reverse();
  var response = compareStrings(arr2, arr3);
  console.log('The response function has returned "' + response + '\'');
} //=======================================================================================//

palindrome('NOT A PALINDROME');

Minimum: 
function min(a, b) {
  if (a > b)
    return b;
  else
    return a;
}

Recursion /*(Couldn't figure the last part out)*/:

function isEven(num) {
  if (num % 2 == 0)
    return "Even";
  else if (num % 2 === 1)
    return "Odd";
  else if (num < 0)
    return "Negative" ;
  }
 
  Bean Counting: // This one I had to look up
  function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

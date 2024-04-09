function isPalindrome(word) {
  

const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
return cleanWord === cleanWord.split('').reverse().join('');
}

/* 
  Function isPalindrome takes the parameter word input.
  The word is cleaned: remove non-alphanumeric characters from the inputand convert it to lowercase.
  Then compare the cleaned word with the reversed version.
  If the cleaned word is equal to to the reversed version: return true.
  otherwise the function returns false.
*/


if (require.main === module) {
  // add your own custom tests in here
  console.log("Test Case: 'racecar'");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Test Case: 'robot'");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

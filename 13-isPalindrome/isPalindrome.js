function isPalindrome(word) {
  var flip = word.toLowerCase().split('').reverse().join('');

  return word === flip;
}

// Do not edit this line;
module.exports = isPalindrome;
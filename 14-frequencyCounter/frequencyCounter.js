function frequencyCounter(word) {
  var count = {};
  word.split('').forEach(function(i) {
    if(count[i]) count[i]++ 
    else count[i] = 1;
  });
  return count;
}

// Do not edit this line;
module.exports = frequencyCounter;
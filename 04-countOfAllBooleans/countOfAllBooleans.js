function countOfAllBooleans(arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] === true){
      count++;
    }
    if (arr[i] === false){
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
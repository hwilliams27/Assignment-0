function setUnionOfAnyAmountOfSets(...args) {
  var s = new Set();
  
  for (let arg of args) {
    for (let x of arg)
      s.add(x);
  }

  return s;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
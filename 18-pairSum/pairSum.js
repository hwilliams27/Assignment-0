function pairSum(nums, target) {
  if (nums.length > 1){
    for (let f in nums){
      for (let s in nums){
        if (nums[f] + nums[s] === target) return true;
      }
    }
    return false;
  }
  else{
    throw new Error('Array is less than 2!');
  }
}

// Do not edit this line;
module.exports = pairSum;
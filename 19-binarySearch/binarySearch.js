class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    var middle = Math.floor(nums.length / 2);

    if(nums.length === 1 && nums[0] != target){
      return false;
    }
    if (target === nums[middle]){
      return true;
    }else if (target < nums[middle]){
      return this.binarySearch(nums.slice(0, middle), target);
    }else if (target > nums[middle]){
      return this.binarySearch(nums.slice(middle), target);
    }

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
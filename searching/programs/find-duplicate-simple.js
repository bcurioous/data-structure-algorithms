// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (nums.length == 1) {
    return false;
  }
  const duplicates = new Set();
  for (let i = 0, j = nums.length - 1; i <= (nums.length-1) / 2; i++, j--) {
    console.group("each :: ", i, j);
    console.log("duplicates", [...duplicates]);
    if (duplicates.has(nums[i])) {
      console.groupEnd();
      return true;
    } else {
      duplicates.add(nums[i]);
    }
    if(i==j){
      return false;
    }
    if (duplicates.has(nums[j])) {
      console.groupEnd();

      return true;
    } else {
      duplicates.add(nums[j]);
    }

    console.groupEnd();
  }
  return false;
};

const inputs = [
  [1, 5, -2, -4, 0],
  [1, 2, 3, 1],
  [1, 2, 3, 4],
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

inputs.forEach((input) => {
  console.log("\n\n-----------");
  const output = containsDuplicate(input);
  console.log("input :: ", input, " :: output :: ", output);
});

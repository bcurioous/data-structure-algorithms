/**
 * Link : https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Subarray : A subarray is a contiguous part of an array.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 *
 * Follow up: If you have figured out the O(n) solution,
 * try coding another solution using the divide and conquer approach, which is more subtle.
 *
 *
 * Dynamic Programming : Recursive function
 * Divide & Conquer method: doing nlogn (like quick sort and binary search)
 **/

// function count(list, low, high, x){ }

let log = false;

var maxSubArray_O_of_n = function (nums) {
  let currSum = 0,
    maxSum = -Math.pow(10,4);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    currSum += num;

    log && console.group("each :: ", i, " :: num ::", num);

    log && console.log("before :: currSum :: ", currSum);
    log && console.log("before :: maxSum :: ", maxSum);

    if (currSum > maxSum) {
      maxSum = currSum;
      log && console.log("maxSum changed :: ", currSum);
    }
    if (currSum < 0) {
      log && console.log("currSum reassigned :: ");
      currSum = 0;
    }

    log && console.log("after :: currSum :: ", currSum);
    log && console.log("after :: maxSum :: ", maxSum);
    log && console.groupEnd();
  }

  return maxSum;
};


const inputs = [
  {
    nums: [-2, -2, 2, -3, 6, -1, 2, -3, 1, -2, 4, -3],
    result: 7,
  },
  {
    nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    result: 6,
  },
  {
    nums: [1],
    result: 1,
  },
  {
    nums: [-1],
    result: -1,
  },
  {
    nums: [-2,-1],
    result: -1,
  },
  {
    nums: [5, 4, -1, 7, 8],
    result: 23,
  },
];

var maxSubArray = maxSubArray_O_of_n;
// var maxSubArray = maxSubArray_recursive;

inputs.forEach((input) => {
  const result = maxSubArray(input.nums);
  console.log(
    "input :: ",
    input,
    " :: output :: ",
    result,
    " :: passed :: ",
    input.result === result
  );
});

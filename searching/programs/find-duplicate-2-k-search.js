// https://leetcode.com/problems/contains-duplicate-ii/
// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

function containsNearbyDuplicate(nums, k) {
  const c = new Map();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (c.has(value) && Math.abs(c.get(value) - i) <= k) {
      return true;
    } else {
      c.set(value, i);
    }
  }
  return false;
}

let nums = [1, 2, 3, 1],
  k = 3;
containsNearbyDuplicate(nums, k); // true

(nums = [1, 0, 1, 1]), (k = 1);
containsNearbyDuplicate(nums, k); // true

(nums = [1, 2, 3, 1, 2, 3]), (k = 2);
containsNearbyDuplicate(nums, k); //false

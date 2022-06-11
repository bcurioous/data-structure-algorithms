// https://leetcode.com/problems/contains-duplicate-iii/

// 220. Contains Duplicate III
// Medium
// Given an integer array nums and two integers k and t,
// return true if there are two distinct indices i and j in the array
// such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true

// Example 3:
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false

// Constraints:
// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 104
// 0 <= t <= 231 - 1

function containsNearbyDuplicate(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
}

containsNearbyDuplicate([1, 2, 3, 1], 3, 0);

containsNearbyDuplicate([1, 0, 1, 1], 1, 2);

containsNearbyDuplicate([1, 5, 9, 1, 5, 9], 2, 3);

// containsNearbyDuplicate([], 3 , 0);

// containsNearbyDuplicate([], 3 , 0);

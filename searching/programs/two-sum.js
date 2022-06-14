// https://leetcode.com/problems/two-sum/submissions/
// Two Sum (Easy)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

var twoSum = function (nums, target) {
  const map = new Map();

  nums.forEach((x, i) => {
    if (map.has(x)) {
      map.set(x, [...map.get(x), i]);
    } else {
      map.set(x, [i]);
    }
  });

  console.log("map ::", map);
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];

    // if (num1 > target) {
    //   continue;
    // }

    const num2 = target - num1;

    console.log("num1 ::", num1);
    console.log("num2 ::", num2);

    if (num1 === num2 && map.has(num1) && map.get(num1).length < 2) {
      continue;
    }

    if (!map.has(num2)) {
      continue;
    }

    if (num1 === num2 && map.has(num1) && map.get(num1).length >= 2) {
      const [num1Position, num2Position] = map.get(num1);
      return [num1Position, num2Position];
    }

    const num1Position = map.get(num1);
    const num2Position = map.get(num2);
    return [...num1Position, ...num2Position];
  }
};

twoSum([3, 2, 3], 6);
twoSum([2, 7, 11, 15], 9);

twoSum([2, 5, 5, 11], 10);

twoSum([-1, -2, -3, -4, -5], -8);

/**
 * Turing JS Challenge
 * 
 * Equal Group Of Cards 
 * 
 * Given a set of cards `cards` and an integer `k`,
 * we need to group every 2 cards such that the sum of the group
 * is equal to `k`.
 * You cannot use the same card in multiple groups.
 * 
 * Return the maximum number of equal groups that you can
 * create from `cards`.
 * 
 * Example:
 * Input : [3,1,3,4,3,2], k =6
 * Output : 2
 * Explanation: You can create two groups of cards with a sum of 6:
 * - Group 1 = [3,3] 
 * - Group 2 = [4,2]
 * 
 */

LOGS = false;

var twoSum = function (cards, k) {
  const nums = cards.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  const set = new Set();
  let count = 0;
  let i = 0,
    j = cards.length - 1;

  let front = nums[i],
    back = nums[j];

  console.log("nums :: ", nums);

  while (i < j) {
    front = nums[i];
    back = nums[j];

    if (front + back === k && !set.has(front) && !set.has(back)) {
      i++;
      j--;
      count++;
      set.add(front);
      set.add(back);
    }

    // moving pointer logic
    // choose whether to move front or back

    if (front + back > k) {
      j--;
    }
    if (front + back < k) {
      i++;
    }
  }

  return count;
};

const predicates = [
  {
    input: { nums: [3, 3], target: 6 },
    output: 1,
  },
  {
    input: { nums: [0, 3, 3], target: 3 },
    output: 1,
  },
  {
    input: { nums: [3, 1, 3, 4, 3, 2], target: 6 },
    output: 2,
  },
  {
    input: { nums: [6, 3, 1, 2, 3, 4, 5], target: 6 },
    output: 3,
  },
  {
    input: { nums: [5, 4, 3, 2, 0, 3], target: 6 },
    output: 2,
  },
];

predicates.forEach((predicate) => {
  const output = twoSum(predicate.input.nums, predicate.input.target);
  console.log(
    "input :: ",
    predicate.input,
    " :: output :: ",
    output,

    " :: expected :: ",
    predicate.output,

    " :: passed :: ",
    predicate.output === output
  );
});

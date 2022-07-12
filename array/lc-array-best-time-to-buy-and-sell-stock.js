/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed
 * because you must buy before you sell.
 *
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * Constraints:
 * 1 <= prices.length <= 105
 * 0 <= prices[i] <= 104
 *
 *
 * TOPICS: Array, Dynamic Programming
 */

// Example : 1

//  7   1   5   3   6   4
//  0   1   2   3   4   5

//  1   3   4   5   6   7
//  1   3   5   2   4   0

// Descending order
//  7   6   5   4   3   1
//  0   4   2   5   3   1

// Example : 2
//   7   5   3   5   4   6   4   2  = maxProfit = 3 (buy @ 3 and sell @ 6)
//   0   1   2   3   4   5   6   7

//   2   3   4   4   5   5   6   7
//   7   2   4   6   1   3   5   0

// descending order
//   7   6   5   5   4   4   3   2
//   0   5   3   1   6   4   2   7

const LOGS = process.argv[2] && process.argv[2] === "true";

var maxProfit = function (prices) {
	let max = Number.MIN_VALUE;
	let maxSP = [];
	for (let i = prices.length - 1; i >= 0; i--) {
		if (prices[i] > max) {
			max = prices[i];
			maxSP[i] = Number.MIN_VALUE;
		} else {
			maxSP[i] = max;
		}
	}

	LOGS && console.log("maxSP :: ", maxSP);
	LOGS && console.log("max :: ", max);

	let count = 0;

	for (let i = 0; i < prices.length; i++) {
		if (maxSP[i] !== Number.MIN_VALUE) {
			count = Math.max(count, maxSP[i] - prices[i]);
		}
	}

	return count;
};

//  7   1   5   3   6   4
var maxProfit2 = function (prices) {
	let max = Number.MIN_VALUE;

	let count = 0;

	for (let i = prices.length - 1; i >= 0; i--) {
		const price = prices[i];

		if (price > max) {
			max = price;
		} else {
			count = Math.max(count, max - price);
		}
	}

	return count;
};

const predicates = [
	{
		input: [3, 3, 5, 0, 0, 3, 1, 4],
		output: 4,
	},
	{
		input: [2, 1, 2, 1, 0, 1, 2],
		output: 2,
	},
	{
		input: [3, 2, 6, 5, 0, 3],
		output: 4,
	},
	{
		input: [2, 1, 2, 0, 1],
		output: 1,
	},
	{
		input: [3, 3],
		output: 0,
	},
	{
		input: [2, 1, 4],
		output: 3,
	},
	{
		input: [1, 4, 2],
		output: 3,
	},
	{
		input: [7, 1, 5, 3, 6, 4],
		output: 5,
	},
	{
		input: [7, 5, 3, 5, 4, 6, 4, 2], // buy at 3 sell it at 6 = 3 profit
		output: 3,
	},
	{
		input: [7, 6, 4, 3, 1],
		output: 0,
	},
];

predicates.forEach((predicate) => {
	const output = maxProfit2(predicate.input);

	if (predicate.output !== output) {
		console.log(
			predicate.output === output,
			" :: input :: ",
			predicate.input,
			" :: output :: ",
			output,
			" :: exepcted :: ",
			predicate.output,
			" :: passed :: ",
			predicate.output === output
		);
	}
});

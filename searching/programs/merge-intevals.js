// https://leetcode.com/problems/merge-intervals/
/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * Example 1:
 *   Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 *   Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Example 2:
 *   Input: intervals = [[1,4],[4,5]]
 *   Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Constraints:
 *     1 <= intervals.length <= 104
 *     intervals[i].length == 2
 *     0 <= starti <= endi <= 104
 */

 function mergeIntervals(intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  console.log("sorted ::", sorted);

  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const [currentStart, currentEnd] = sorted[i];

    const [lastStart, lastEnd] = merged[merged.length - 1];

    console.group("i--- :: ", i);

    console.log("current ::", [currentStart, currentEnd]);
    console.log("stack-last ::", [lastStart, lastEnd]);

    if (
      currentStart >= lastStart &&
      currentStart <= lastEnd &&
      currentEnd >= lastStart &&
      currentEnd <= lastEnd
    ) {
      console.log("skip and continuing ---");
      console.groupEnd();
      continue;
    }

    if (
      currentStart >= lastStart &&
      currentStart <= lastEnd &&
      currentEnd >= lastStart &&
      currentEnd > lastEnd
    ) {
      merged[merged.length - 1] = [lastStart, currentEnd];
      console.log("merging end -- ", [lastStart, currentEnd]);
      console.groupEnd();
      continue;
    }

    if (
      currentStart < lastStart &&
      currentStart <= lastEnd &&
      currentEnd >= lastStart &&
      currentEnd <= lastEnd
    ) {
      merged[merged.length - 1] = [currentStart, lastEnd];
      console.log("merging start -- ", [currentStart, lastEnd]);
      console.groupEnd();
      continue;
    }
    if (
      currentStart < lastStart &&
      currentStart <= lastEnd &&
      currentEnd >= lastStart &&
      currentEnd > lastEnd
    ) {
      merged[merged.length - 1] = [currentStart, currentEnd];
      console.log("merging both -- ", [currentStart, currentEnd]);
      console.groupEnd();
      continue;
    }

    console.log("pushing :: ", [currentStart, currentEnd]);
    merged.push([currentStart, currentEnd]);

    console.groupEnd();
  }

  return merged;
}

// var intervals = [
//   [1, 4],
//   [2, 3],
//   [1, 2],
//   [1, 5],
//   [0, 2],
//   [2, 5],
//   [4, 7],
// ];

// var intervals = [
//   [1, 4],
//   [1, 5]
// ];
// var intervals = [
//   [1, 6],
//   [1, 5]
// ];

// var intervals = [
//   [1, 4]
// ];
// var intervals = [
//   [1, 4],
//   [0, 4]
// ];
// var intervals = [
//   [1, 4],
//   [5, 6],
// ];

// var intervals = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [8, 10],
//   [10, 13],
//   [12, 18],
//   [19, 20],
// ];
// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [10, 13],
//   [12, 18],
//   [19, 20],
// ];

const output = mergeIntervals(intervals);

console.log("merge intervals :: output ::", output);

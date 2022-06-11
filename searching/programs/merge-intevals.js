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
  let merged = intervals.length > 1 ? [] : intervals;

  let mergeStartMark = 0,
    mergeEndMark = -1;
  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i - 1];
    const [nextStart, nextEnd] = intervals[i];
    console.group("i :: ", i);
    console.log("mergeStartMark ::", mergeStartMark);
    console.log("mergeEndMark   ::", mergeEndMark);
    console.log("currentEnd     ::", currentEnd);
    console.log("nextStart      ::", nextStart);
    console.groupEnd();

    if (currentEnd >= nextStart) {
      mergeEndMark = i;
      if (i !== intervals.length - 1) {
        continue;
      } else {
        // if the last element
        if(nextStart < currentStart){
          merged.push([nextStart, intervals[mergeEndMark][1]]);
        }else{
          merged.push([intervals[mergeStartMark][0], intervals[mergeEndMark][1]]);
        }
      }
    } else {
      // do merge
      console.log("merging");
      if(mergeEndMark!=-1){
        merged.push([intervals[mergeStartMark][0], intervals[mergeEndMark][1]]);
      }else{
        merged.push([currentStart, currentEnd]);
      }
      mergeStartMark = mergeEndMark = i;
      if (mergeEndMark === intervals.length - 1 && i === intervals.length - 1) {
        merged.push([intervals[mergeStartMark][0], intervals[mergeEndMark][1]]);
      }
    }
  }

  return merged;
}

// const intervals = [
//   [1, 4]
// ];
// const intervals = [
//   [1, 4],
//   [0, 4]
// ];
// const intervals = [
//   [1, 4],
//   [5, 6],
// ];

const intervals = [
  [1, 2],
  [3, 4],
  [5,6],
  [8, 10],
  [10, 13],
  [12, 18],
  [19, 20],
];
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

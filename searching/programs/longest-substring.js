// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters
// Medium

// 24784

// 1086

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
// Accepted
// 3,393,472
// Submissions
// 10,196,201


/// origianl solution from James
// var lengthOfLongestSubstring = function(s) {
//     let longestLength = 0;
//      let sub = new Map();
//      let marker = 0;
//      for (let i = 0; i < s.length; i++, marker++) {
//        const ch = s.charAt(i);
//        if (sub.has(ch)) {
//          const substring = [...sub.keys()].join("").slice(sub.get(ch) + 1);
//          marker = substring ? substring.length : 0;
//          sub = new Map([
//            ...substring.split("").map((v, idx) => [v, idx]),
//            [ch, marker],
//          ]);
//        } else {
//          sub.set(ch, marker);
//        }
//        if (sub.size > longestLength) {
//          longestLength = sub.size;
//        }
//      }
//      return longestLength;
//    };

// Solution with logs
function lengthOfLongestSubstring(s) {
  let longestLength = 0;
  let sub = new Map();
  let marker = 0;
  for (let i = 0; i < s.length; i++, marker++) {
    const ch = s.charAt(i);

    console.group("each ::  ", i);
    console.log("marker ::  ", marker);

    console.log("sub ::", [...sub]);
    console.log("sub.has(ch) ::", ch, sub.has(ch));
    console.log("sub.size :: ", sub.size);
    console.log("longestLength :: ", longestLength);

    console.groupEnd();

    if (sub.has(ch)) {
      console.group("sliding.......for :: ", i);
      console.log("longestLength :: ", longestLength);
      console.log("ch :: ", ch);
      console.log("sub :: ", ...sub);
      console.log("sub ch key :: ", sub.get(ch));
      console.log("new start offset :: ", sub.get(ch) + 1);

      const substring = [...sub.keys()].join("").slice(sub.get(ch) + 1);

      marker = substring ? substring.length : 0;
      sub = new Map([
        ...substring.split("").map((v, idx) => [v, idx]),
        [ch, marker],
      ]);
      console.log("substring ::", substring);
      console.log("new sub ::", ...sub);
      console.groupEnd();
    } else {
      sub.set(ch, marker);
    }

    if (sub.size > longestLength) {
      longestLength = sub.size;
    }
  }

  console.log("return :: sub ::", ...sub);
  return longestLength;
}

// lengthOfLongestSubstring('eeydgwdykpv')
// lengthOfLongestSubstring("qrsvbspk");
// lengthOfLongestSubstring('gaaqfeqlqky')
// lengthOfLongestSubstring("hkcpmprxxxqw")

const inputWithExpectedResults = [
  { input: " ", output: 1 },
  { input: "aab", output: 2 },
  { input: "abcabcbb", output: 3 },
  { input: "bbbbb", output: 1 },
  { input: "pwwkew", output: 3 },
  { input: "jbpnbwwd", output: 4 },
  { input: "bbtablud", output: 6 },
  { input: "dvdf", output: 3 },
  { input: "abccbapqr", output: 6 },
  { input: "eeydgwdykpv", output: 7 },
  { input: "qrsvbspk", output: 5 },
  { input: "gaaqfeqlqky", output: 4 },
  { input: "hkcpmprxxxqw", output: 5 },
];

inputWithExpectedResults.forEach((test) => {
  const result = lengthOfLongestSubstring(test.input);

  if (result !== test.output) {
    console.error(
      "input :: failed :: ",
      test.input,
      " :: result :: ",
      result,
      " :: Expected :: ",
      test.output
    );
  } else {
    console.log(
      "input :: success :: ",
      test.input,
      " :: result :: ",
      result,
      " :: Expected :: ",
      test.output
    );
  }
});

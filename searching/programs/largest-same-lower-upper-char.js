// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

// Given a string of English letters s,
// return the greatest English letter which occurs as both a lowercase and uppercase letter in s.
// The returned letter should be in uppercase. If no such letter exists, return an empty string.
// An English letter b is greater than another letter a if b appears after a in the English alphabet.

// Example 1:
// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.

// Example 2:
// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

// Example 3:
// Input: s = "AbCdEfGhIjK"
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.

// Constraints:

//     1 <= s.length <= 1000
//     s consists of lowercase and uppercase English letters.

/**
 * @param {string} s
 * @return {string}
 */

function isUpperCase(char) {
  // const rearCharIsUpper = rearChar >= 97 && rearChar <= 122;
  return char >= 65 && char <= 90;
}

function invertCase(char) {
  return isUpperCase(char) ? char + 32 : char - 32;
}

function isAlphabet(char) {
  return (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
}

var greatestLetter = function (s) {
  // C + 65 = c
  // Z = 90, z = 90-32 lower case z

  s = s.length % 2 !== 0 ? s + "0" : s;

  const set = new Set();
  let largest = 0;

  console.log("input :: ", s);

  for (let i = 0, j = s.length - 1; i < (s.length - 1) / 2; i++, j--) {
    const frontChar = s.charCodeAt(i);
    const rearChar = s.charCodeAt(j);

    const frontCharIsUpper = isUpperCase(frontChar);
    const rearCharIsUpper = isUpperCase(rearChar);

    const inverseFrontChar = invertCase(frontChar);
    const inverseRearChar = invertCase(rearChar);

    console.group("each :: ", i, j);
    console.log("frontChar ::", s[i], frontChar);
    console.log("rearChar ::", s[j], rearChar);
    console.log("frontCharIsUpper ::", frontCharIsUpper);
    console.log("rearCharIsUpper ::", rearCharIsUpper);
    console.log(
      "inverseFrontChar ::",
      String.fromCharCode(inverseFrontChar),
      inverseFrontChar
    );
    console.log(
      "inverseRearChar ::",
      String.fromCharCode(inverseRearChar),
      inverseRearChar
    );

    if (isAlphabet(frontChar) && !set.has(frontChar)) {
      set.add(frontChar);
    }

    if (isAlphabet(rearChar) && !set.has(rearChar)) {
      set.add(rearChar);
    }

    console.log("after set ::", [...set.keys()]);

    console.log("before largest ::", largest);

    if (set.has(frontChar) && set.has(inverseFrontChar)) {
      // if map has lower & upper case of same alphabet
      const temp = frontCharIsUpper ? frontChar : inverseFrontChar;
      if (largest < temp) {
        largest = temp;
      }
    }

    if (set.has(rearChar) && set.has(inverseRearChar)) {
      // if map has lower & upper case of same alphabet
      const temp = rearCharIsUpper ? rearChar : inverseRearChar;
      if (largest < temp) {
        largest = temp;
      }
    }

    console.log("after map :: ", [...set.keys()]);
    console.log("largest :: ", largest, String.fromCharCode(largest));
    console.groupEnd();
  }
  return largest !== 0 ? String.fromCharCode(largest) : "";
};

const cases = ["lEeTc0dE", "arRAzFif", "AbCdEfGhIjK"].forEach((str) => {
  console.log("input :: ", str, " :: output :: ", greatestLetter(str));
});

// node largest-same-lower-upper-char.js

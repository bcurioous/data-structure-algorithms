/**
 * https://leetcode.com/problems/
 * 
 * 
 * 
 * 
 * 
 * 
 * TOPICS: Array, Dynamic Programming
 */


LOGS = true;

var someFunctionName = function (input) {
  return input[0];
};

const predicates = [
  {
    input: [1, 2, 3],
    output: 1,
  },
];

predicates.forEach((predicate) => {
  const output = someFunctionName(predicate.input);
  console.log(
    "input :: ",
    predicate.input,
    " :: output :: ",
    output,
    " :: passed :: ",
    predicate.output === output
  );
});

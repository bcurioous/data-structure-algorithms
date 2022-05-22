
/**
 * Modified version of binary search
 * Math.floor(6.5) = 6
 */
function find_first(items, key) {
  let start = 0,
    end = items.length - 1,
    mid = (start + end) / 2;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    console.log(start, " :: ", mid, " :: ", end);

    if (key === items[start]) {
      return start;
    }
    if (key === items[mid]) {
      return mid;
    }
    if (key > items[mid]) {
      start = mid+1;
    }
    if (key < items[mid]) {
      end = mid;
    }
  }
  return -1;
}

let input = [200, 200, 200, 300, 500, 500, 700,700,900, 1200, 1200];

let key = 1200;

let result = binarySearch(input, key);
console.log("input ::", input," :: size :: ", input.length);
console.log("key ::", key);
console.log("result ::", result);

// find_first(input, 200) # => 0
// find_first(input, 500) # => 4
// find_first(input, 100) # => -1

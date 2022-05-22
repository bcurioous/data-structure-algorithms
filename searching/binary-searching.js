function binarySearch(items, key) {
  let start = 0,
    end = items.length - 1;

  while (start !== end) {
    const mid = Math.round((start + end) / 2);
    console.log(start, " :: ", mid, " :: ", end);

    if (key === items[start]) {
      return start;
    }
    if (key === items[mid]) {
      return mid;
    }
    if (key === items[end]) {
      return end;
    }

    if (key > items[mid]) {
      start = mid;
    }
    if (key < items[mid]) {
      end = mid;
    }
  }

  return -1;
}

// let list = [1, 3, 5, 7, 9, 10, 14, 19];
// let key = 14;

let list = [1, 2, 3, 5, 6, 7];
let key = 3;

let result = binarySearch(list, key);

console.log("result :: ", result);

//   [1,2,3]  , key=1

//   1. start = 0 , end = 2, mid = 0+2/2  = 1,
//      key > items[mid] = 1 > 2 , no
//      key < items[mid] = 1 < 2 , yes
//        end = 1

//   2. start = 0 , end = 1, mid = 0+1/2 = 1

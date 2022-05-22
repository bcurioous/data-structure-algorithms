// O(n log n), where n = arr1 and m = arr2

function findDuplicates(arr1, arr2) {
  let source;
  let target;

  // picking the source & target
  // source = the list who is searching its elements on the target
  // target = the list on which the source is being searching
  if (arr1.length > arr2.length) {
    source = arr2; // [3,6,7,8,20]
    target = arr1; // [1,2,3,5,6,7]
  }

  console.log("source :: ", source);
  console.log("target :: ", target);
  // 1. pick one by one element from souce and compare it to all the target elements

  const targetMinElement = target[0];
  const targetMaxElement = target[target.length - 1];

  console.log("targetMinElement :: ", targetMinElement);
  console.log("targetMaxElement :: ", targetMaxElement);

  let duplicateList = [];
  source.forEach((key) => {
    console.log("key :: ", key);
    if (key >= targetMinElement && key <= targetMaxElement) {
      const targetPosition = binarySearch(target, key);
      console.log("targetPosition :: ", targetPosition);
      if (targetPosition !== -1) {
        duplicateList.push(key);
      }
    }
  });

  console.log("duplicateList", duplicateList);

  return duplicateList;
}

function binarySearch(items, key) {
  console.log("search", items, key);
  let start = 0,
    end = items.length - 1;

  while (start <= end) {
    mid = Math.round((start + end) / 2);
    console.log("loop :: -- ", start, " :: ", mid, " :: ", end);
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

const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [3, 6, 7, 8, 20];

const result = findDuplicates(arr1, arr2);

console.log("result ::", result);

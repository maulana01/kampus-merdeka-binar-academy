/** @format */

function merge(left, right) {
  var result = [],
    lLen = left.length,
    rLen = right.length,
    l = 0,
    r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  // remaining part needs to be added to the result
  console.log('array-result', result);
  console.log('left slice', result.concat(left.slice(l)));
  console.log('right slice', result.concat(right.slice(r)));
  return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 2, 1, 3, 5]));

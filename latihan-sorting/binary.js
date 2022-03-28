/** @format */

function binarySearch(arr, arrFix, key) {
  let len = arr.length;
  let low = 0;
  let high = arr.length - 1;
  let mid = (len - 1) / 2;
  if (len < 2) {
    let result = arr[len - 1];
    console.log('result : ', result, ' key : ', key);
    console.log(key == result);

    if (key == result) {
      return `found in index ${arrFix.indexOf(key)}`;
    } else {
      return 'not found';
    }
  }
  let midValue = arr[mid];

  if (key < midValue) {
    let arr1 = arr.slice(0, mid);
    return binarySearch(arr1, arrFix, key);
  } else if (key > midValue) {
    let arr1 = arr.slice(mid + 1, high + 1);
    return binarySearch(arr1, arrFix, key);
  }
}
let arr = [1, 2, 3, 4, 6, 7, 8];
let key = 6;
console.log(binarySearch(arr, arr, key));

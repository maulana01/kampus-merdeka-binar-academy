/** @format */

function binarySearch(arr, key) {
  let len = arr.length;
  let low = 0;
  let high = arr.length - 1;
  let mid = (len - 1) / 2;
  let found = false;
  if (len < 2) {
    let result = arr[len - 1];
    console.log('result : ', result, 'key : ', key);
    if (key === result) {
      // return 'not found';
      found = true;
    } else {
      console.log('gagal');
    }
    return result;
  }
  let lowValue = arr[low];
  let highValue = arr[high];
  let midValue = arr[mid];

  // console.log(lowValue, midValue, highValue, key);
  if (key < midValue) {
    let arr1 = arr.slice(0, mid);
    // console.log(arr1);
    binarySearch(arr1, key);
  } else if (key > midValue) {
    let arr1 = arr.slice(mid + 1, high + 1);
    // console.log(arr1);
    binarySearch(arr1, key);
  }
  return found;
}

let arr = [1, 2, 3, 4, 5, 7, 8];
console.log(binarySearch(arr, 6));

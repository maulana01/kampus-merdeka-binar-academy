/** @format */

function binarySearch(arr, key) {
  var len = arr.length,
    low = 0,
    high = len - 1;

  if (len < 1) {
    return 'Array is empty';
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(`low: ${low}, high: ${high}, mid: ${mid}`);
    if (key < arr[mid]) {
      high = mid - 1;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else {
      return 'Found at index: ' + mid;
    }
  }
  return 'Not found';
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 9));

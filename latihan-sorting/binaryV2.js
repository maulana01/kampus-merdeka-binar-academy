/** @format */

function binary(arr, key) {
  let mid = (arr.length - 1) / 2;
  midValue = arr[mid];
  if (arr.length < 2) {
    let result = midValue;
    if (result == key) {
      return 'found';
    } else {
      return 'not found';
    }
  }

  console.log(mid, midValue);
}

let arr = [1, 2, 3, 4, 6, 7, 8];
let key = 3;
console.log(binary(arr, key));

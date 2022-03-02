/** @format */

function bubblesort(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        // let temp = arr[j - 1];
        // arr[j - 1] = arr[j];
        // arr[j] = temp;

        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

console.log(bubblesort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

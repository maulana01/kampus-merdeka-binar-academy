/** @format */

function quickSort(arr, left, right) {
  // console.log('arr : ', arr, 'left : ', left, 'right : ', right);
  let len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    console.log('partitionIndex : ', partitionIndex);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, pivot, left, right) {
  console.log('arr : ', arr, 'pivot : ', pivot, 'left : ', left, 'right : ', right);
  let pivotValue = arr[pivot],
    partitionIndex = left;
  console.log('pivotValue : ', pivotValue);
  for (let i = left; i < right; i++) {
    // console.log()
    if (arr[i] < pivotValue) {
      console.log(arr[i], '<', pivotValue);
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  console.log('new array : ', arr);
  arr[j] = temp;
  console.log('new array again : ', arr);
}

// const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
const array = [4, 5, 2, 1, 8];
console.log(quickSort(array, 0, array.length - 1));

function mergeSortedArrays(arr1, arr2) {
  let newArr = [];
  while(arr1.length&&arr2.length){
    if(arr1[0]<arr2[0]){
      newArr.push(arr1.shift());
    }else{
      newArr.push(arr2.shift());
    }
  }
  return newArr.concat(arr1.slice().concat(arr2.slice()));
}

console.log(mergeSortedArrays([1,5,8,10,13], [2,3,4,6,9,11]))

function mergeSort(arr) {
  if(arr.length<2){
    return arr
  }
  
  const m=Math.floor(arr.length/2)
  const left=arr.slice(0,m)
  const right=arr.slice(m)
  return mergeSortedArrays(mergeSort(left),mergeSort(right))
}

console.log(mergeSort([88, 22, 44, 12, 99, 111, 9, 15, 49]))

// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, l, m, r)

// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]   [99, 111, 9, 15, 49]
// [88, 22] [44, 12]
// [88] [22] [44] [12]
// [88] [22] [44] [12]
//
// [22, 88] [12, 44]
// [12, 22, 44, 88]
// function mergeSort(arr) {
//   // return arrays of single values
//   if (arr.length < 2) {
//       return arr;
//   }

//   // get the middle index, floor it to prevent floats
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   // mergeSortedArray called on the result of mergeSort left and right
//   //                    // [22, 88]         [44, 12]
//   return mergeSortedArrays(mergeSort(left), mergeSort(right));
// }


// return a new sorted array with all of the values of arr1 and arr2
// function mergeSortedArrays(arr1, arr2) {
//   let sort = [];

//   while (arr1.length && arr2.length) {
//       if (arr1[0] < arr2[0]) {
//           // shift pops from the front, not ideal.
//           sort.push(arr1.shift());
//       } else {
//           sort.push(arr2.shift());
//       }
//   }

//   // takes remainders and squashes them together in cases where one array
//   return sort.concat(arr1.slice().concat(arr2.slice()));
// }

// console.log(mergeSort([88, 22, 44, 12, 99, 111, 9, 15, 49]))

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);

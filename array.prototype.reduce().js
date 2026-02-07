Array.prototype.myReduce = function (callbackFn, initialValue) {
  const arr = this;
  //If the arr is empty and initialValue is not provided, throw an error
  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let hasInitial = initialValue !== undefined; //True, if initialValue exists, otherwise false
  let accumulator = hasInitial ? initialValue : arr[0]; /// If initialValue exists, set accumulator to initialValue, otherwise set it to the first element of the array
  let startIndex = hasInitial ? 0 : 1; //If initialValue exists, start from 0 index of arr, otherwise start from 1 index of arr

  for (let i = startIndex; i < arr.length; i++) {
    //if [1,2,,4], arr[2] is empty, but we need to skip it and continue to the next iteration
    // index in array checks if that index exists in the array
    if (!(i in arr)) continue;
    //(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U}
    accumulator = callbackFn(accumulator, arr[i], i, arr);
  }
  return accumulator;
};

// //Example of objects: { a:2, b:1 }
// ["a", "b", "a", "c"].myReduce((p, c) => {
//   p[c] = (p[c] || 0) + 1;
//   return p;
// }, {});

[1, 2, , 4].myReduce((prev, curr) => prev + curr, 0);

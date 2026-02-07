/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let arr = this;
  //If the arr is empty and initialValue is not provided, throw an error
  //   if (arr.length === 0 && initialValue === undefined) {
  //     throw new TypeError("Reduce of empty array with  no initial value");
  //   }

  //InitialValue is existed true, otherwise false
  let hasInitial = initialValue !== undefined;
  let acc = hasInitial ? initialValue : arr[0]; //If initialValue exists, set acc to initialValue, otherwise set the arr[0]
  //If initialValue exists, start from 0 index of arr, otherwise start 1 index of arr
  let startIndex = hasInitial ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    if (!(i in arr)) continue; //If the index in array doesn't exist, skip it and continue to the next iteration.
    acc = callbackFn(acc, arr[i], i, arr);
  }
  return acc;
};

[1, 2].myReduce((acc, cur) => acc + cur, NaN); //NaN
[1, 2].myReduce((acc, cur) => acc + cur, null); //3
[1, 2].myReduce((acc, cur) => acc + cur, ""); //"12"
[1, 2].myReduce((acc, cur) => acc + cur, undefined); //3
[].myReduce((acc, cur) => acc + cur); //TypeError: Reduce of empty array with no initial value

/**
 *
 * @param {*} iterable : An iterable of promises.
 * @returns A single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.
 */

/**
 * **Steps to implement
 * 1. Return promise: Promises' resolved value & input which isnt't a promise
 * 2. Reject: If any of the input promise rejects & throw error
 */

export default function promiseAll(iterable) {
  const results = []; //To store the resolved values of the each promise
  let count = 0; //To keep track of how many promises have resolved
  if (iterable.length === 0) {
    return Promise.resolve(results);
  }
  return new Promise((resolve, reject) => {
    iterable.forEach((e, i) => {
      Promise.resolve(e)
        .then((res) => {
          results[i] = res;
          //Store the resolve value of each promise in the results array at the same index as the input promise
          count += 1;
          //If the count of resolved promise is same with the length of iterable
          //then all promises have resolved
          //So resolve the results array and return it
          if (count === iterable.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

//Test Cases
//Test Case 1: All promises resolve successfully
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
promiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log("Test Case 1 - Resolved values:", results); // Expected: [1, 2, 3]
  })
  .catch((error) => {
    console.error("Test Case 1 - Error:", error);
  });

//Test Case 2: One of the promises rejects
const promise4 = Promise.reject(new Error("Promise 4 failed"));
promiseAll([promise1, promise4, promise3])
  .then((results) => {
    console.log("Test Case 2 - Resolved values:", results); // This should not be called
  })
  .catch((error) => {
    console.error("Test Case 2 - Error:", error.message); // Expected: "Promise 4 failed"
  });

//Test Case 3: Empty iterable
promiseAll([])
  .then((results) => {
    console.log("Test Case 3 - Resolved values:", results); // Expected: []
  })
  .catch((error) => {
    console.error("Test Case 3 - Error:", error);
  });

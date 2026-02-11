export default function flatten(value, depth = 0) {
  let result = [];
  console.log(`Enter depth: ${depth}`);
  //Iterate over all elements in a value
  value.forEach((e) => {
    //- If the element is an array, recursively call flatten again
    if (Array.isArray(e)) {
      //At the deepest recursive call, result array is returned.
      //So destructure the returned array using spread operator
      //and push its elements into the result array.
      result.push(...flatten(e, depth + 1));
      return;
    } else {
      //- If the element is not an array, push it into result
      result.push(e);
      return;
    }
  });
  console.log(`Exit depth: ${depth}`);
  return result;
}
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

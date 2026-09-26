Function.prototype.myCall = function (thisArg, ...argArr) {
  //Nullish coalescing: If thisArg is null or undefined, set newThis to globalThis
  let newThis = thisArg ?? globalThis;
  newThis = Object(newThis);
  const key = Symbol("fn"); //Create a unique symbol to avoid property name collision

  //Set the thisArg to the this
  newThis[key] = this; //Add new property to the thisArg, which is function that copy from myCall's this
  const result = newThis[key](...argArr); //Pass the argArr to the function as arguments
  //Pass the argArr to the function as arguments
  delete newThis[key]; //Delete the function property from the thisArg object to avoid polluting it
  return result; //Pass the argArr to the function as arguments
};

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = { age: 21 };
const john = { age: 42 };

console.log(multiplyAge.myCall(mary, 2)); // 42
console.log(multiplyAge.myCall(null));
//console.log(multiplyAge.myCall(5));
// multiplyAge.myCall(undefined);
//console.log(multiplyAge.call(undefined, 3));
console.log(multiplyAge.myCall(null, 5));

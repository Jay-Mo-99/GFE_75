Function.prototype.myCall = function (thisArg, ...argArray) {
  thisArg = thisArg || globalThis; //If thisArg is null or undefined, default to globalThis
  thisArg.func = this; //In myCall, this is the function that we want to call.
  //But we want to call it with a thisArg, so we assign it as a property of thisArg.
  const result = thisArg.func(...argArray); //Call the function with the provided arguments
  //Store the reesult of that function call
  return result;
};

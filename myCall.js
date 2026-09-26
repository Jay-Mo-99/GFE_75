/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
//fn can call myCall as a method

//Second argument be pass to fn as arguments
Function.prototype.myCall = function (thisArg, ...argArray) {
  let newThis = thisArg ?? globalThis; //nullish coalescing: If thisArg is null or undefined, set newThis to globalThis

  //First argument be a fn's this
  newThis.newFn = this; //Set the thisArg's this to the function that called myCall
  const result = newThis.newFn(...argArray);
  delete newThis.newFn; //Delete the newFn property from the thisArg object to avoid polluting it
  return result;
};

let john = {
  name: "John",
  greet: function (greeting, age) {
    console.log(
      `${greeting}, my name is ${this.name} and I am ${age} years old.`,
    );
  },
};

let mary = {
  name: "Mary",
};

john.greet.myCall(mary, "Hi", 25); // "Hi, my name is Mary and I am 25 years old."
john.greet.myCall(john, "Hello", 30); // "Hello, my name is John and I am 30 years old."
john.greet.myCall(null, "Hi", 25); // TypeError: Cannot set properties of null (setting 'this')

// this
//binding
//1. Implicit binding a.b()
//2. Explicit binding, call, apply, bind

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

//undefined
//null

let b = null;
let a = 100;

//call (newThis, arg1, arg2...)
john.greet("Hi", 25);
// "Hi, my name is John and I am 25 years old."
john.greet.call(mary, "Hi", 11);
// "Hi, my name is Mary and I am 11 years old."

function debounce(func, wait) {
  let timer = null;
  /**Actual Function*/
  return function (...args) {
    console.log("args:", args);
    //Collect the arguments passed to the debounced function
    const ctx = this;
    clearTimeout(timer); //Clear the previous timer if it exists
    timer = setTimeout(() => {
      console.log("args in execution:", args);
      timer = null; //Clear the timer after the function is executed
      func.apply(ctx, args); //Call the function with the correct context and arguments
    }, wait);
  };
}

function debugFunc(...xs) {
  console.log("🔥 debugFunc called with:", xs);
}

const debouncedTest = debounce(debugFunc, 5000);
debouncedTest("A");
debouncedTest("B", 2);
debouncedTest("C", 3);
debouncedTest("D", 5, "I am D");

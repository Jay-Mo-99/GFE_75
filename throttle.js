export default function throttle(func, wait) {
  //External Environment
  let timer = null;

  //Closure
  return function (...args) {
    //If the t() is not first call(so timer has a value)
    //And wait
    if (timer) return;

    func.apply(this, args);
    //preserve the original 'this' contex of the caller

    timer = setTimeout(() => {
      timer = null;
    }, wait);
  };
}

let i = 0;
function increment() {
  i++;
}

const t = throttle(increment, 100);
t();
//0ms
//Schedules a timer to reset 'timer' after 100ms.
setTimeout(() => t(), 50);
//50ms
//'timer' still exists -> invocation is ignored.
//100ms
//The scheduled timeout callback runs -> timer = null
setTimeout(() => t(), 120);
//120ms:
//'timer' is null
//Schedules a timer to reset 'timer' after 100ms.

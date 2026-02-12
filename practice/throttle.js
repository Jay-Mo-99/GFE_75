export default function throttle(func, wait) {
  let timer = null;
  //Closure
  return function (...args) {
    if (timer) return;
    func.apply(this, args); //
    timer = setTimeout(() => {
      timer = null;
    }, wait);
  };
}

function greatSum(name, a, b, c, d) {
  let result = a + b + c + d;
  console.log(`Hi, I am ` + name);
  console.log(`Result: ` + result);
}

const t = throttle(greatSum, 50);
t("Adam", 1, 2, 3, 4);
setTimeout(() => t("Betty", 5, 6, 7, 8), 30);
setTimeout(() => t("Cindy", 100, 200, 300, 400), 55);

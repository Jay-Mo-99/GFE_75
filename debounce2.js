export default function debounce(fn, wait) {
  let timeoutId;
  return function (...args) {
    //timeoutId에 값이 있다면
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

debouncedTest("A", "B");

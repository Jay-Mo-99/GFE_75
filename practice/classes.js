/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const classes = [];
  args.forEach((arg) => {
    let argType = typeof arg;
    //Ignore the falsy value
    //false, NaN, undefined, 0,""(empty string),null
    if (!arg) {
      return;
    }
    //Handle string and numbers
    if (argType === "string" || argType === "number") {
      classes.push(arg);
      return;
    }
    //Handle array
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }
    //Handle Objects
    if (argType === "object") {
      for (const key in arg) {
        //Object.hasOwn(object, key) : object가 key를 가지고 있다면 true, 아니면 false
        //arg[key]: 그 arg[key]가 true인가?
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
      return;
    }
  });

  return classes.join(" ");
}
classNames("a", ["b", { c: true, d: false }]); // 'a b c'
classNames(null, false, "bar", undefined, { baz: null }, ""); // 'bar'

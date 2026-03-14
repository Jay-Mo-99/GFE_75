export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

/*: Return true 
if value is an object 
(e.g. arrays, functions, etc, but not including null and undefined),
 false otherwise.
 */
export function isObject(value) {
  return (
    (typeof value === "object" || typeof value === "function") && value !== null
  );
}

/**
 *
 * A plain object,
 * or what is commonly known as a Plain Old JavaScript Object
 * (POJO)
 * is any object whose prototype is Object.prototype
 * or an object created via Object.create(null).
 */

export function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function test(name, expected, actual) {
  const pass = Object.is(expected, actual);
  console.log(`${pass ? "✅" : "❌"} ${name}`);

  if (!pass) {
    console.log(" expected:", expected);
    console.log(" actual:", actual);
  }
}

console.log("---- isArray ----");
test("array", true, isArray([1, 2]));
test("object", false, isArray({}));
test("null", false, isArray(null));

console.log("---- isFunction ----");
test(
  "function",
  true,
  isFunction(function () {}),
);
test(
  "arrow function",
  true,
  isFunction(() => {}),
);
test("object", false, isFunction({}));

console.log("---- isObject ----");
test("object literal", true, isObject({}));
test("array", true, isObject([]));
test(
  "function",
  true,
  isObject(function () {}),
);
test("null", false, isObject(null));
test("number", false, isObject(123));

console.log("---- isPlainObject ----");
test("{}", true, isPlainObject({}));
test("new Object()", true, isPlainObject(new Object()));
test("Object.create(null)", true, isPlainObject(Object.create(null)));
test("array", false, isPlainObject([]));
test("date", false, isPlainObject(new Date()));
test(
  "function",
  false,
  isPlainObject(function () {}),
);
test("null", false, isPlainObject(null));

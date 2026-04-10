//Recurision Ver.
/**
 *
 * @param {*} param:  JSON-serializable values (null, boolean, number, string, Array, Object)
 * @return: Return same data or object with param
 */

//{ foo: [{ bar: 'baz' }] };
export default function deepClone(param) {
  //Base Case
  if (typeof param !== "object" || param === null) {
    return param;
  }

  //Array
  if (Array.isArray(param)) {
    return param.map((item) => deepClone(item));
  }
  //Object
  //Convert the object into array
  //Iterate each elements and call deepClone for "value" recrusively
  //Convert the array into object

  return Object.fromEntries(
    Object.entries(param).map(([key, value]) => [key, deepClone(value)]),
  );
}
const obj2 = { a: { b: { c: "hello" } } };
const clonedObj2 = deepClone(obj2);
//param: { a: { b: { c: 'hello' } } }
//Object.entries -> [[a, { b: { c: 'hello' } }]]
//key:a, value: { b: { c: 'hello' } }
//param: { b: { c: 'hello' } }
//key:b, value: { c: 'hello' }
//param: { c: 'hello' }
//key:c , value: 'hello'  ------> Base Case
//Return 'hello'
//Return {c:"hello"}
//Return {b: { c: 'hello' }}
//Return {a: { b: { c: 'hello' } }}

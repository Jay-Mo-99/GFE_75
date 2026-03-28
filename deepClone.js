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
const obj2 = { foo: [{ bar: "baz" }] };
const clonedObj2 = deepClone(obj2);
//param: { foo: [{ bar: "baz" }] }
//Object.entries: [ ["foo", [{ bar: "baz" }]] ]
//key: "foo", value: [{ bar: "baz" }]
//param:[{ bar: "baz" }], item: { bar: "baz" }
//param: { bar: "baz" }
//key:"bar", value:"baz"  ----> Base Case
//Return "baz"
//{bar:"baz"}
//[{bar:"baz"}]
//[["foo", [{ bar: "baz" }]]]
//Object.fromEntries: { foo: [{ bar: "baz" }] }

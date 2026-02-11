type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  const res = [];
  const copy = value.slice(); //Shallow Copy

  while (copy.length) {
    const item = copy.shift(); //Extract the first element of copy and send to the item.
    if (Array.isArray(item)) {
      copy.unshift(...item); //Add parameter infront of the copy
    } else {
      res.push(item);
    }
  }

  return res;
}

flatten([1, [2, [3]]]);
// res=[], copy=[1,[2,[3]]]

// Iteration 1
// item=1
// res=[1], copy=[[2,[3]]]

// Iteration 2
// item=[2,[3]]
// copy=[]
// copy.unshift(2,[3])
// res=[1], copy=[2,[3]]

// Iteration 3
// item=2
// res=[1,2], copy=[[3]]

// Iteration 4
// item=[3]
// copy=[]
// copy.unshift(3)
// res=[1,2], copy=[3]

// Iteration 5
// item=3
// res=[1,2,3], copy=[]

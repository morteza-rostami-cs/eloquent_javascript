// chapter 4, exercises

// the sum of a range

// write a range() func,
// takes two args, start and end
//return: an array containing all the numbers from start to end (including the end)

function range(start, end, step = 1) {
  const values = [];

  // whether we are counting up or down,
  // start should not pass end, cause that is not a fucking range

  // if start == end => return 1 element
  if (start === end) return [start];

  // step = -1, and start is 1, counting down goes to, 0, -1, -2...
  if (step < 0) {
    if (start < end) {
      return null;
    }
  }

  if (step > 0) {
    if (start > end) return null;
  }

  for (let count = start; ; count += step) {
    // if, counting up, 1 to 10 => stop when count is greater than end
    if (step > 0) {
      if (count > end) break;
    }

    // if, counting down, 5 to 1 => stop when count is less than start
    if (step < 0) {
      if (count < end) break;
    }

    values.push(count);
  }

  //   for (let i = start; i <= end; i += step) {
  //     values.push(i);
  //   }

  return values;
}

// console.log(range(1, 10));

function sum(values) {
  // just a check, in case range(), returns null
  if (!values) return null;

  let sum = 0;
  for (const v of values) {
    sum += v;
  }

  return sum;
}

const r = range(1, 10);
console.log(r);
console.log(sum(r));

const vals = range(5, 2, -1);
console.log(vals);
console.log(sum(vals));

// write a sum() func,
// takes an array of numbers,
// returns: sum of these numbers

// test both funcs, by adding up from 1 to 10 = 55

// modify range() func, to take an (optional) third arg (step)
// step, should count and populate the array, in steps of x
// eg: [1, 5, 10, 15]
// with no step given, elements should go up by step = 1

// test
// range(1, 10, 2) => [1, 3, 5, 7, 9]

// also: get range() to work with negative steps
// range(5, 2, -1) => [5, 4, 3, 2]

// ====================

// reversing an array

// reverseArray()
// take an array
// return: a new array, with same elements in reverse order
// eg: [1, 2, 3] => [3, 2, 1]
// eg: [1, 2, 3, 4] => [4, 3, 2, 1]

const values = [1, 2, 3, 4];

function reverseArray(array) {
  // arrays are passed by reference
  //   values[0] = 99;
  const c = [...array];
  // we do a shallow copy
  const size = c.length;

  // handle zero and 1 element
  if (size <= 1) return c; // return a copy

  // use 2 pointers to reverse the array
  let l = 0; // on beginning of array
  let r = size - 1; // on last element

  while (l < r) {
    // swap left and right elements
    // using array destructuring
    [c[l], c[r]] = [c[r], c[l]];

    // move pointers towards center (each other)
    l++;
    r--;
  }
  return c;
}

const res = reverseArray(values);
// it does not change the original array
console.log(values, res);

// reverseArrayInPlace()
// modify the passed in array in place

function reverseArrayInPlace(array) {
  const size = array.length;

  if (size <= 1) return array;

  let l = 0;
  let r = size - 1;

  // check if l has not passed r
  while (l < r) {
    // swap
    [array[l], array[r]] = [array[r], array[l]];

    // move pointers
    l++;
    r--;
  }
}

const scores = [1, 2, 3, 4, 5];

reverseArrayInPlace(scores);
console.log(scores);

// a list

// const list = {
//   value: 0,
//   rest: {
//     value: 1,
//     rest: null,
//   },
// };

// write a function, arrayToList(),
// when given, an array [1, 2, 3]
// returns a list

// empty chain = null
// list containing one element, {value: 0, rest: null}
console.log("==========");
function arrayToList(array) {
  const size = array.length;
  let list = null;

  //return an empty list
  if (size === 0) return list;

  // latest object in the chain
  // this works, because:: we reference the last object in the list, so, current or list[last_elements] are the same
  let current = list; // null or object
  for (let i = 0; i < array.length; i++) {
    // rest = null
    // unless we do another loop, which means we attach a new item to our chain
    const l = { value: array[i], rest: null };
    // init value for the list
    if (i === 0) {
      // put in the first object
      list = l;
      current = list; // list is one obj at this point
      continue; // just init and move on
    }

    // assign to, latestObj.rest
    current.rest = l;

    // update the current object
    current = l;
  }
  return list;
}

let list = arrayToList([1, 2, 3]);

function listToArray(list) {
  const arr = [];
  let current = list;

  //   if (!list) return [];

  // go as long as, node is not null
  // if, list = null , loop never runs => so we return empty arr
  while (current) {
    // get the node.value
    arr.push(current.value);

    // next node
    current = current.rest;
  }
  return arr;
}

console.log(listToArray(list));
console.log("==shit");

// write a function called prepend(),
// take a list, and an element, add the element to front of that list

// js, passed by value => even if the value is a reference => reassigning local parameter, does not changes the outside variable.
function prepend(list, element) {
  //  list.value = 88;
  //   console.log(list);
  // create a new object
  // keep the old head as the child
  const l = { value: element, rest: list };

  // new node, becomes the head

  // Notice:: re-assigning the function parameter, does not change the outside variable
  list = l;
  return list;
}

// add a new element
list = prepend(list, 99);
console.log(list);

// write a func nth(),
// take a list and a number and
// returns, an element at that given position
// with zero referring to the first element
// returns, undefined => when index not found

function nth(list, target) {
  if (!list) return undefined; // empty list

  // we assume index starts from zero, reject negative, out of bound
  if (target < 0) return undefined;

  // list head
  if (!list.rest && target === 0) return list.value;

  let index = 0;
  let current = list;

  // we either hit null or we find the target
  while (current) {
    // go over list, until next node is null

    if (index === target) return current.value;

    // else: keep looking
    current = current.rest;

    index++; // keep the index of our nodes
  }

  // we have to go to the end of list, to know, how many items are in the list
  // so we can only say out of bound => if we go to the end
  // if we get here:: if means that index was out of bound, negative or more than length
  return undefined;
}

console.log("**");
// console.log(list);
console.log(nth(list, 2));

{
  console.log("============");
  const list = arrayToList([2, 3, 4, 5]);
  // recursively print every node.value
  function printNth(list) {
    // if (!list.rest) return list

    // baseCase:: lastNode.rest = null
    if (!list) return list; // return null
    console.log(list.value);
    // return from every frame
    return printNth(list.rest);
  }

  console.log(printNth(list));

  console.log("==");
  function nth(list, target, index = 0) {
    //  console.log(list, index);
    //  book, wants me to return undefined, if we get to the end and index not found (out of bound)
    if (!list) return undefined; // hit last node, found nothing!

    // if does not find the target, goes until the end and returns null, so this covers out of bound target
    if (target === index) return list.value;

    return nth(list.rest, target, (index += 1));
  }

  console.log(nth(list, 1));

  // write a recursive version of nth()
}

// deep comparison

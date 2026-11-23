// functions

// different ways to define a function in js

// basically, js reads and define all function definitions, before execution!!
foo(4); // foo 4

//  function declaration, also: function statement or definition
// it must have a name
// it is hoisted, we can call it before defining it!
function foo(x) {
  console.log(`foo ${x}`);
}

// not hoisted
// square(2); // Error

// function expression
// not hoisted!
// its a value stored in variable, it is anonymous here.
// the exact behavior when you call it, depends on, const, let or var
const square = function (x) {
  return x ** 2;
};

console.log(typeof square); // function

// we can also have a named, function expression
const fa = function func() {
  console.log("func or fa");
};

console.log(fa.name); // func
// can not use the name to call though
// this is just function internal name, shows up when debugging and so on
// func(); Error

fa();

// arrow functions are also function expression
const add = (a, b) => a + b;
console.log(add(2, 3));

// IIFE
// an immediately invoked function expression
(() => {
  console.log("run and done");
})();

//scope

// global scope
// outside of blocks or functions
const global = "global";

// a block
{
  const l = "local to a block";
  console.log(l);
}

// not define
// console.log(l);

// local to a function
function goo(global) {
  // local global shadows the outside global
  console.log(global);
}

goo(4);

// lexical scope
// func1() => has access to it's surrounding func() that defines it and this access goes all the way up to the global scope

// closure

function fc() {
  const value = 2;

  return function fb(x) {
    return value + x;
  };
}

const fb = fc();

console.log(fb); // [Function: fb]

// so, value from fc() scope, is still alive, even after we called fc() and pop ed it off stack!!
console.log(fb(5)); // 7
console.log(fb(10)); // 12

// call stack
// any function call, pushes an (execution context) on top of the stack. (last in first out)

// stack overflow => happens when we push too many frames on into the stack, without popping things off, so computer runs out of memory.
// so, we get errors like: "too much recursion" or "out of stack space"

// in js, omit func params, => and they are undefined
function fd(x, y) {
  // default values, if null or undefined
  //   x = x ?? 0;
  //   y = y ?? 0;

  // better to check fo undefined, if parameter is omitted
  if (x === undefined) x = 0;
  if (typeof y === "undefined") y = 0;

  return x + y;
}

// without, default value or a check
// const res = fd(4);
// console.log(res);// NaN

console.log(4); // 4

// console.log(typeof null);// object

const emp = null;
if (emp === null) {
  console.log("this value is null");
}

// also, null and undefined are loosely equal
if (undefined == null) {
  console.log("null == undefined"); // runs
}

const un = undefined;
console.log(un === undefined); //true
console.log(typeof un === "undefined"); // true

// Closure: The ability of a function to reference a specific instance of a local binding from an enclosing lexical scope, even after that enclosing function has finished executing.

// function generator pattern with closure

// the factor becomes fixed, eg: multi by 1 or 2
// number can change
function multiplier(factor) {
  return (number) => number * factor;
}

const mByTwo = multiplier(2);
// mByTwo() remembers factor, local to multiplier
console.log(mByTwo(1)); //2
console.log(mByTwo(2)); // 4
console.log(mByTwo(3)); // 6

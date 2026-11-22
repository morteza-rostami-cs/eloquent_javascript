// unary operator:: operator that take only one value

// typeof

const user = {
  username: "ali",
};
console.log(typeof user); // object

// type of operator => produces a string
const typeUser = typeof user;
// "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

if (typeof user == "object") {
  console.log(`typeof User is ${typeUser}`);
}

const empty = null;

// typeof null = object
const tEmpty = typeof empty;
console.log(tEmpty); // object

if (!empty) {
  console.log("null evaluates to false");
} else {
  console.log("this is null");
}

// unary minus
// negate the result of expression
console.log(-(10 - 2)); // -8

// comparison operators => evaluate to boolean
console.log(3 < 4); // true

// so, strings comparison
// the are compared alphabetically, by their unicode chars/code point, from left to right

// a b c d e f g h i j k l m n o p q r s t u v w x y z
console.log("t" < "a");
false;
console.log("ali" < "zoroaster"); // true
console.log("ali" < "al"); // false
console.log("ali" === "ali"); // true
// so it goes char by char
// first 2 chars are the same: al
// h comes before i
console.log("ali" < "alh"); // false
// j comes after i
console.log("ali" < "alj"); // true
// upperCase chars are less than lowerCase chars
// i > I
console.log("ali" < "alI"); // false

// string equality, by value
if ("ali" === "ali") console.log("ali is a fuck head");

// compares, utf-16 units => (raw bytes 16-bit values)
// this is what it compares:
// 0061 006C 0069 D83D DE0A vs 0061 006C 0069 D83D DE0A
if ("ali😊" === "ali😊") console.log("😊");

// the only js value that is not Equal to itself
if (NaN === NaN) console.log("NaN is equal to NaN");
else console.log("NaN is not equal to NaN"); // this runs

if (true && true) console.log("run");
if (true || false) console.log("run2");
if (!false) console.log("run3");

//
function foo() {
  console.log("this is foo");
  return true;
}

// are we going to call the second condition? if the first one is true? => answer is = yes
if (true && foo()) {
  console.log("are we going to call foo?");
}

/*
Operator Precedence Rules
From lowest to highest precedence among the operators covered so far:

||
&&
Comparison operators (>, <, ==, !=, etc.)
Arithmetic operators and the rest
*/

// conditional ternary operator
const isPlaying = true;
console.log(isPlaying ? "she is playing" : "nope!");

// empty values in JS

// undefined and null

// undefined: is usually set by js itself
// for example, if you do not assign a value to a variable
let gaming;
console.log(typeof gaming); // undefined

// null is set by a programmer
let person = null;
if (!person) console.log("person object is empty.");

// assign empty value

// first two => they assign only if person = null or undefined

// logical nullish assignment
// person = person ??= { username: "al" };

// nullish coalescing
// person = person ?? { username: "ali" };

// logical or
// this replaces, any falsy value on the left => 0, "", false NaN ...
person = person || { username: "sara" };

console.log(person);

// js converts false to zero, when doing math
console.log(false + 1); // 0 + 1 = 1

// use strict equality
console.log(null == undefined); // true
console.log(null === undefined); // false

// strict equality
console.log("" === false); // false

const car = "";
// empty string is falsy
if (!car) console.log("empty String is Falsy");

// short circuiting and non boolean logic

// falsy values
// 0, NaN, "", null, undefined and false
// all other values are truthy

// the idea is that || or && => they can return a value, not just boolean

// if left is true = return the right value
// else: left is false = return left value
console.log(true && "ali"); // ali

let myUser = {};
// if left is false = return the right,
// else: if it is true = return left value
const authUser = Object.keys(myUser).length || { username: "she" };
console.log(authUser);

// the nullish coalescing operator ??

// some time we want to consider 0 and "" and so on as valid values => and only check for null and undefined

// falls back to right value if left is => null or undefined
myUser = null;
const myUser2 = myUser ?? "fucker";
console.log(myUser2); // fucker

// ==============

function goo() {
  return "goo";
}

// it evaluates goo(), only if left is true
console.log(true && goo()); // goo

// evaluates goo(), only if left is false
console.log(false || goo());

//============

const isFighting = () => true;
const isWining = () => {
  console.log("from isWining()");
  return false;
};

// true && right_side runs => returns false
// so the whole thing is false
// but: isWining() func runs!!
// if: left = false => it returns left, which is false
if (isFighting() && isWining()) console.log("both true");

//============

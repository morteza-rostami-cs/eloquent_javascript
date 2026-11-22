"use strict";

// import readline from "node:readline";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// expression: is what produces a value. so: any piece of code that returns a value to the left.
// so, if you can put it in the right side of = , then: it is an expression.

console.log("==========\n");

const fruit = "apple";
// we can also have values and operators
const result = 2 + 9;

// statement: does not return a value, and For the most part, creates some kinda of side effect!
if (fruit === "apple") {
  // print to console is a side effect
  console.log(`our fruit of choice is: ${fruit}`);
}

// variables are also: called: bindings

let google = "search engine";
console.log(google);

// primitive types:
// number, string, boolean, null, undefined, symbols, bigints
// they are passed by value
// there is not such thing as => 2 references to the same primitive value, you always get a new copy
const x = 12;

// new copy is created
let x1 = x;
x1 = 13;
console.log(x, x1); // 12 13

// break point for vscode or whatever debugger
// debugger;

console.log(console.table({ username: "sa" }));

// ===========================
// node js - user input
const scanner = readline.createInterface({
  input,
  output,
});

async function getInput() {
  console.log("stdin is TTY: ", process.stdin.isTTY);
  const input = await scanner.question("Enter something: ");

  if (input) {
    console.log(input);
  } else {
    console.log("input is empty", input);
  }

  // clean up
  scanner.close();
}

// await getInput();

// ==============

// check for a number value
if (Number.isNaN(NaN)) {
  console.log("this is a not a number value");
}

const myScore = 18;

if (myScore < 5) {
  console.log("you are fucked");
} else if (myScore >= 5 && myScore <= 10) {
  console.log("not bad you fuck");
} else {
  console.log("you are unstoppable!");
}

console.log("\n==========");

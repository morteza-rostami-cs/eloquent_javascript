// console.log("d");

// chapter 3 exercises

// Minimum:
// a function that takes, a and b => returns: min value

function min(a, b) {
  //take 2 values and return the smaller value
  if (a < b) return a;
  else if (b < a) return b;

  // their equal => so return any of them as min value
  return a;
}

// console.log(min(2, 3));
// console.log(min(5, 3));
// console.log(min(2, 2));

// recursion:

// define a recursive function
// take a single positive int parameter (whole number), return a bool

// repeatedly subtract 2 until we reach 0 or 1
// 0 is even
// 1 is odd
// 8, 6, 4, 2, 0

// subtracting event number from another even number, does not change it's even ness.

function isEven(value) {
  if (value === 0) return true; // even
  if (value === 1) return false; // odd

  // normalize:: so we also handle negative numbers
  // -1 = 1
  value = Math.abs(value);

  // if value is always positive, subtracting 2 , always moves us towards 0 or 1
  // special case:: i used Math.abs again, because: 1 - 2 = -1
  return isEven(Math.abs(value - 2));
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(1)); // false
console.log(isEven(-1));
console.log(isEven(-4));
console.log(isEven(-75));

//Bean counting

// write a function,called: countBs(), that takes a string, as only arg
// returns: count of uppercase 'B' chars inside str

// write a func, called: countChar(),
// it works like the previous func
// except, takes a second arg, that is the char to be counted

function countBs(str) {
  const target = "B";

  return countChar(str, target);
}

console.log(countBs("Babayaga in Boobs")); //2
console.log(countBs("baba")); //0

function countChar(str, target) {
  let count = 0;
  for (const ch of str) {
    if (ch === target) count++;
  }
  return count;
}

console.log(countChar("going to google", "g")); //4
console.log(countChar("baba is gone", "x")); //0

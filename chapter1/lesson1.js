console.log("lesson 1");

// values, types, and operators

/*

# computer memory:

# memory has bits.
# one bit is => either 0 or 1

# =====================
Learn binary number system: (Later)

#======================

# 1 byte = 8 bits

# javascript chunks bits => into coherent units called values => number, string, function

# garbage collection::
   - you write a variable, value is allocated in memory.
   - once there is no reference to that value in your code => js auto reclaims its memory.

#======================

#======================
#======================
#======================
#======================
#======================
#======================
#======================
#======================
#======================
#======================
#======================
*/

// number
// both int and fractional (float)
// number takes fixed 64 bits => 8 bytes
// max safe integer stored is => 9 * 10^15
// with fractional (float) => the result might be always approximation => cause: of the limitation of storing decimals as binary (base-2) in memory.

const score = 20;
const money = 24.5;
console.log(score / 3); // 6.66666
console.log(money); // 24.5

console.log(score / 3.0); // 6.66666

// arithmetic operators

console.log(2 + 2);
console.log(3 - 2);
console.log(2 * 2);
console.log(5 / 2); // 2.5
console.log(4 / 2); // 2
console.log(4 % 2); // 0
console.log(4 ** 2); // 16

// order of operations
console.log(2 * 2 + 3); // 7
// multi and division has precedence over addition and subtraction
console.log(2 * (2 + 3)); // 10

// same precedence => evaluate left to right
// console.log((2 + 3) - 1) // 4

// js special numeric values

console.log(Infinity);
console.log(-Infinity);

// anything is smaller than +Infinity
if (50000 < Infinity) {
  console.log("5 is smaller that + infinity");
}

console.log(5 - Infinity); // -Infinity
console.log(Infinity - 199); // Infinity

// NaN
// not a number
// the type is number
console.log(typeof NaN); // number

// when a nonsensical math operation happens (undefined)
console.log(0 / 0); // NaN
// divide by a text string
console.log(10 / "g"); // NaN

// divide by numeric str => auto converts
console.log(10 / "2"); // number 5

// ==============
// strings

const name = "ali";
const name1 = "ali";
// template literal
// you can interpolate expressions
const name2 = `ali ${2 + 2}`;
console.log(name, name1, name2);

const email = "ali@gmail.com";
console.log(email[0]); // a

// we can loop and get each str char
for (let i = 0; i < email.length; i++) {
  process.stdout.write(email[i] + "-");
}
console.log("");

// type of chars are string
// there is not separate idea of char or rune
if (email[0] == "a") {
  console.log(typeof email[0]); // string
}

// escape characters
console.log("\t == a tab and a line break == \n");

// js allocates 16 bits => per string element.
// maps each char into => unicode point code

const str = "ali😊";

for (let char of str) {
  process.stdout.write(char);
}
console.log("");

// some chars like emoji => take more that 1 bytes
// so: in a normal for loop, you can not print the char
for (let i = 0; i < str.length; i++) {
  process.stdout.write(str[i]); //ali��
}
console.log("");

// this break for an emoji
// a normal for loop => loops utf-16 code points
for (let i = 0; i < str.length; i++) {
  const char = str[i];
  // utf-16 code
  console.log(char, "-> U+", char.codePointAt(0).toString(16).toUpperCase());
}

/*
output:

a -> U+ 61
l -> U+ 6C
i -> U+ 69
# emoji takes to code or (more than 1 byte)
� -> U+ D83D
� -> U+ DE0A
*/

// getting the raw utf-8 bits
const bytes = Buffer.from(str, "utf-8");
console.log(bytes);
//                  4 bytes for emoji
// <Buffer 61 6c 69 f0 9f 98 8a>

// array of raw bytes
console.log([...bytes]);
//                #emoji starts
// [97, 108, 105, 240, 159, 152, 138]

for (const byte of bytes) {
  console.log(byte.toString(16).padStart(2, "0"));
}

// so for loop, loops over an array of bytes (utf-8)
// convert to an array of code points (unicode) first
const chars = [...str];
for (let i = 0; i < chars.length; i++) {
  const ch = chars[i];
  //   process.stdout.write(ch);
  // now we see chars
  //   console.log(ch); // ali😊

  console.log(ch, ch.codePointAt(0));
}
`
# now we, get the unicode code point, for the emoji, it grabs it from the starting byte.
a 97
l 108
i 105
😊 128522
`;

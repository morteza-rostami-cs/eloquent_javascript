// chapter 2, exercises:

// looping a triangle

// write a loop that makes seven calls to console.log to output the following triangle

function drawTriangle() {
  const char = "#";

  for (let i = 1; i <= 7; i++) {
    const line = char.repeat(i);
    process.stdout.write(line);
    console.log("");
  }
}

// drawTriangle();

// solution::
// in each outer i loop, set j = 0
// in inner loop, increment j, to j < i
// and, i goes 1, 2, 3, 4
// and j goes,
// 0
// 0, 1
// 0, 1, 2
function drawTriangle2() {
  const str = "#";

  // row
  for (let i = 1; i <= 7; i++) {
    // col
    let j = 0;

    while (j < i) {
      process.stdout.write(str);

      // increment j => to get to i
      j++;
    }
    console.log("");
  }
}

// drawTriangle2();

// =======================

// fizzBuzz

// print all the numbers from 1 to 100, with 2 exceptions.
// for divisible by 3, print Fizz
// for divisible by 5 => print Buzz
// for numbers divisible with both 3 and 5 => print FizzBuzz

function fizzBuzz(min = 1, max = 100) {
  for (let i = min; i <= max; i++) {
    // divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }

    // divisible by 3
    // 3, 9, 12, 15
    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    // 5, 10, 15, 20...
    else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      // values not divisible by any of 3 or 5
      console.log(i); // we just print the value
    }
  }
}

// fizzBuzz();

// =======================

// chessBoard

// a string that represents an 8 * 8 grid
// use new line chars to separate lines
// each cell of the grid, is either a space or a # character
// we want to draw a chessBoard
// our func should work with any width and height input

`
@ = white
# = black

@ # @ # @ # @ #
# @ # @ # @ # @

`;

function drawChessBoard(w = 8, h = 8) {
  // even = white
  const white = " ";
  // odd = black
  const black = "#";

  for (let row = 0; row < h; row++) {
    let color = "";
    if (row % 2 === 0) {
      // even
      color = white;
    } else {
      color = black;
    }
    for (let col = 0; col < w; col++) {
      // print initial row color
      process.stdout.write(color);

      // if: white, set to black
      // if: black, set to white
      if (color === " ") {
        color = black;
      } else if (color === "#") {
        color = white;
      }
    }
    console.log("");
  }
}

drawChessBoard(10, 10);

// =======================
// =======================

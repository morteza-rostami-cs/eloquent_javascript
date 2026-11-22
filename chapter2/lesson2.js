// omitting the middle (condition) => infinite loop, with break statement

for (let counter = 1; ; counter++) {
  console.log(counter);
  // 7 % 7 = 0
  // 7 is prime, 1 * 7 = 7
  // also: 0 % 7 = 0
  // if, start from 1, it stops at 7
  if (counter % 7 == 0) {
    process.stdout.write(`stop at ${counter}`);
    break;
  }
}
console.log("");

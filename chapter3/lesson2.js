// recursion, refactor and purity

// basic recursion

function rec(i = 0) {
  //base case, one last return OR think of it as first stack popping off
  if (i === 5) return;

  //   console.log(i); // do before return
  const res = rec(i + 1);
  //   console.log(typeof res == "undefined");

  // do after return
  console.log(i); // 4, 3, 2, 1, 0
}

// rec();

// go to max and return it
function goToMax(min = 0, max = 5) {
  // base case
  // we produce the return value, all the way to the end, and return it
  if (min === max) return min;

  //   console.log(min); // 0, 1, 2...
  return goToMax(min + 1, max);

  //un reachable
  //   console.log(min);
}

// const r = goToMax();
// console.log(r); // 5

// console.log(goToMax(0, 10));

// print all multiples of 3, up to 9, using recursion, also add them
function multi3(factor = 3, number = 1, sum = 0) {
  // calc multiple
  const res = number * factor;
  sum = sum + res;

  console.log(res); // print each multiple
  // accumulate and return sum of multiples at the end
  if (number >= 9) return sum;

  return multi3(3, number + 1, sum);
}

// const r2 = multi3();
// console.log(r2);

// find target

// can we find a sequence of additions and multiplication that produces x ????
function findSolution(target) {
  function find(current, history) {
    console.log(current, history);
    // if: find current
    if (current === target) {
      // return the string
      return history;
    } else if (current > target) {
      // if: current passes target and we do not find (target), return null
      console.log("passed target");
      console.log(current, target);
      return null;
    } else {
      // remember: each frame has to run top-to-bottom, so even when we call find(current * 3 ...), the find(current + 5 ...) will gets called first
      return (
        // go in here, util returns null
        find(current + 5, `(${history} + 5)`) ??
        // null => so go in here
        find(current * 3, `(${history} * 3)`)
      );
    }
  }

  return find(1, "1");
}

// console.log(findSolution(13));

//We want a program that prints counts of farm animals, padded with leading zeros so the numbers are always 3 digits long (e.g., 007 Cows, 011 Chickens).

// always 3 digits
// cows = 1
// then: i need 00 + 1
// cows = 10
// then:: 0 + 10
// cows = 100 => add no padding

function printFarmInventory(cows) {
  let cowsLenStr = String(cows);

  if (cowsLenStr.length < 0) {
    console.log("animal count can not be negative");
    return;
  }

  // keep adding zeros to the left, until the length is 3
  while (cowsLenStr.length < 3) {
    cowsLenStr = "0" + cowsLenStr;
  }

  console.log(cowsLenStr);
}

// printFarmInventory(1);

// now: what if we need to add more animals??
// so: we refactor

{
  function printZeroPaddingWithLabel(number, label = "animal") {
    let padNumber = String(number);

    while (padNumber.length < 3) {
      padNumber = "0" + padNumber;
    }
    console.log(`${padNumber} ${label}`);
  }

  // now, we do not repeat the same logic for each animal
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddingWithLabel(cows, "Cows");
    printZeroPaddingWithLabel(chickens, "Chickens");
    printZeroPaddingWithLabel(pigs, "Pigs");
  }

  //   printFarmInventory(7, 11, 3);
}

// now: we refactor again, cause: printZeroPaddingWithLabel , is doing to much, including to print to the console and so on

{
  function padZero(animalCount, width = 3) {
    let paddedStr = String(animalCount);

    while (paddedStr.length < width) {
      paddedStr = "0" + paddedStr;
    }

    return paddedStr;
  }

  function printFarmInventory(cows, chickens, pigs) {
    const paddedCows = padZero(cows, 3);
    const paddedChickens = padZero(chickens, 3);
    const paddedPigs = padZero(pigs, 3);

    console.log(`${paddedCows} Cows`);
    console.log(`${paddedChickens} Chicken`);
    console.log(`${paddedPigs} Pigs`);
  }

  printFarmInventory(7, 16, 3);
}

// A pure function is a special kind of value-producing function:

// No Side Effects: It doesn’t modify any outside state, write to disk, log to console, or mutate its inputs.
// Deterministic: Given the same arguments, it always produces the exact same return value.
// No External Dependencies: It does not read mutable global variables that could change between calls.

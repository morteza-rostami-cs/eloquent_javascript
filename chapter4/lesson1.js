// chapter 4:: data structures

// js arrays

const values = [1, 2, 3, 4, 5];

for (const v of values) {
  process.stdout.write(" " + v.toString());
}
console.log("");

console.log(values.length);

// push into array
const items = [];

items.push("shoe");
items.push("hat");
items.push("cloth");
console.log(items);
// remove from end
console.log(items.pop()); //cloth

// objects

const user = {
  username: "mor",
};

console.log(user.username);
user["username"] = "sara";
console.log(user.username); // sara

{
  const user = {
    username: "ali",
    password: "1234",
  };

  // delete object prop.
  delete user.password;
  console.log(user);

  // check if an object has a property
  if ("username" in user) {
    console.log(user.username);
  }

  // get object keys and values
  user.email = "ali@gmail.com";
  console.log(Object.keys(user)); // array of key strings
  console.log(Object.values(user)); // ["ali", "ali@gmail.com"]

  // returns an 2d array
  console.log(Object.entries(user));
  // [ [ 'username', 'ali' ], [ 'email', 'ali@gmail.com' ] ]

  const [k, v] = Object.entries(user)[0];
  console.log(k, v); // username ali

  // use array destructuring => entries returns array
  //   [ 'username', 'ali' ]
  for (const [k, v] of Object.entries(user)) {
    console.log(`${k} : ${v}`);
  }

  // shallow copy of object props
  const authUser = {};
  Object.assign(authUser, user);
  authUser.username = "sara";
  // copy object does not change
  console.log(authUser.username, user.username); //sara ali

  // also modern spread operator
  const copy = { ...user };
  copy.username = "al";
  console.log(copy.username, user.username); // al ali
}

// type of arrays is also object, under the hood
const enemies = ["goblin", "dragon", "evil"];
console.log(typeof enemies); // object

// primitives and string are (immutable)
const flower = "rose";
// flower[0] = "$";// Error: str is immutable
console.log(flower);

const bear = { name: "bear" };
const bear2 = { name: "bear" };
const lion = { name: "lion" };
const lionCopy = lion;

// reference equality
if (bear !== lion) console.log(lion.name); //runs

// not equal => even with the same content
if (bear === bear2) console.log("same bear");
else console.log("not same bear"); // runs

// same reference when we copy
if (lionCopy === lion) console.log("same lion"); //runs

{
  // the guy journal
  // events of each day and did he become an squirrel or not?
  const journal = [
    {
      events: ["work", "touched tree", "pizza"],
      squirrel: false,
    },
    {
      events: [
        "work",
        "ice cream",
        "cauliflower",
        "lasagna",
        "touched tree",
        "brushed teeth",
      ],
      squirrel: false,
    },
    {
      events: ["weekend", "cycling", "break", "peanuts", "bear"],
      squirrel: true,
    },
  ];
}

{
  const journal = [];

  // add new entries
  function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
  }

  // add a few entry
  addEntry(["work", "touched tree", "pizza", "running", "television"], false);
  addEntry(
    [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    false,
  );
  addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

  // console.log(journal[0].events);

  // add peanut teeth event, if: entry does have peanuts and not brush teeth
  // so, we correlate, eating peanut and not brushing with turning into squirrel
  for (let entry of journal) {
    if (
      entry.events.includes("peanuts") &&
      !entry.events.includes("brushed teeth")
    ) {
      entry.events.push("peanut teeth");
    }
  }

  // create table = [00, 01, 10, 11], from journal data
  // frequency table
  function tableFor(event, journal) {
    /*
    00 01 10 11

    0  1  2  3

    index = 0
    // if: find squirrel, index + 2
    // takes us to, 2 

    //if: find event, index + 1
    // that takes us to: 1 or 3
    // meaning: if we are on 0 -> it goes to 1
    // if we are at 2, takes us to 3 , so you get: 11
    */
    const table = [0, 0, 0, 0];

    // loop the journal
    for (let i = 0; i < journal.length; i++) {
      const entry = journal[i]; // object: events, squirrel
      // table index[x], 0 => 00, and so on
      let index = 0;

      if (entry.events.includes(event)) {
        index += 1;
      }
      if (entry.squirrel) {
        index += 2;
      }

      // increment the table index, for correct binary
      // index[0] = 00, means: no squirrel, no_event
      table[index] += 1;
    }

    return table;
  }

  // computing correlation:
  function phi(table) {
    return (
      (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt(
        (table[2] + table[3]) *
          (table[0] + table[1]) *
          (table[1] + table[3]) *
          (table[0] + table[2]),
      )
    );
  }

  // make table from journal
  // console.log(tableFor("work", journal));

  // get the events out
  function journalEvents(journal) {
    const events = [];

    for (let entry of journal) {
      for (let e of entry.events) {
        // if we have not pushed it already!
        if (!events.includes(e)) {
          events.push(e);
        }
      }
    }
    return events;
  }

  // console.log(journalEvents(journal));

  // calc phi which is strength of correlation for between squirrel and each event in the journal
  for (let e of journalEvents(journal)) {
    // make the frequency table
    const t = tableFor(e, journal);
    const correlation = phi(t);

    // only print correlations, that are close to -1 or +1, weak or strong
    // ignore the onces close to zero
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(e + ": " + correlation);
    }
  }
}

{
  //            00  01  10 11
  const table = [76, 9, 4, 1];
  `
  phi = 
  n11 * n00 - n10 * n01 
  / 
  squareRoot(n1. * n0. * n.1 * n.0)
  `;

  function phi(table) {
    const n00 = table[0]; // 0
    const n01 = table[1]; // 1
    const n10 = table[2]; // binary 2
    const n11 = table[3]; // binary

    return (
      (n11 * n00 - n10 * n01) /
      Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
    );
  }

  console.log(phi(table));
}

/*
# THE book's solution:

# we have 2 boolean variables:
squirrel = 0 or 1
event = 0 or 1

# so: 1 0 => means: squirrel_yes, event_no

# and, the book maps the binary numbers to decimal values:

0 => 00 __ then total_count can be assigned to this index
1 => 01
2 => 10
3 => 11

so, we can say: index[0] means: 00 means: no_squirrel, no_event = total of 76
meaning: 76 combinations: no_s, no_e happened
for example:
he did not turn to squirrel AND did not eat pizza

# then we can use these totals, in our phi formula::
table = [76, 9, 4, 1]

# flat array in the book, holds the total counts, for different combinations, eg: 10 => squirrel, no_event = 4

arr index   binary    squirrel    event   count

  0           00        no          no      76
  1           01        no          yes     9

============ how binary works ==============

# 10 based: each place_value goes up by multi by 10,

-      -    -
100*  10*  1*

so:
  1
once

1     1
tens  ones

so: place value goes up like this:
start with 1 => multi by 10
ones:: 1 => holds 0 to 9
tens:: 1 * 10 = 10
hundreds:: 10 * 10 = 100

=== now in binary

place value goes up like this
start with 1 => multi by 2
1
1 * 2 = 2
2 * 2 = 4

0     1     0
-     -     - 
4     2     1

so: 1 0 = 2

cause:
0 * 1 = 0
1 * 2 = 2

11 = 3
1 * 2 = 2
1 * 1 = 1
and:: 1 + 2 = 3

##==========
so,
array index, is related to binary value, and binary value represents the boolean values

index[3] = 11 = squirrel_yes, event_yes = stores total

#==========

        00  01  10  11
table = [76, 9, 4, 1]

from above array we can also get the total margins.

# n1. = squirrel happened, regardless of event:: 4 + 1 = 5
# n0. = no squirrel = 76 + 9 = 85
# n.1 = yes event = 9 + 1 = 10
# n.0 = no event = 76 + 4 = 80


*/

// #=====================
// #=====================
// #=====================

// correlation and phi coefficient:
// which daily event has a positive correlation with => transforming into a squirrel!!

// more "work" => leads to => more "squirrel"
// correlation is a relation between two => boolean variables
// eg: eat pizza: 0 or 1
// see squirrel: 0 or 1
// -1 means => negative correlation, means: more pizza, leads to, less squirrel
// 0 means => no correlation
// +1 means => perfect positive correlation
// as pizza goes up => squirrel goes up
// correlation, does not mean causation!!
// eg: more ice cream => more getting sick from hotness
// there could be a third factor, increasing both, like hot whether!!

// formula
`
  phi = 
  n11 * n00 - n10 * n01 
  / 
  squareRoot(n1. * n0. * n.1 * n.0)
  `;
/*
  table notation
              squirrel =1   squirrel=0    total
  pizza =1          1             9         10
  pizza =0          4             76        80
  total             5             85        90

  // values in denominator => get you the margin values of the table
  n1. = sum of all days he became a squirrel, 1 + 4 = 5
  */

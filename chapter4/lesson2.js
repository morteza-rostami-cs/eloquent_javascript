// object spread and duplicate props

const coordinates = { x: 10, y: 0 };

// get the original obj, but also override some values
console.log({ ...coordinates, y: 5, z: 1 });
console.log(coordinates);

// shallow copy
const user = {
  username: "ali",
  // inner object is copied be reference
  car: {
    name: "BMW",
  },
};

const user2 = { ...user };
user2.username = "sara";
user2.car.name = "Toyota";

// name of car changes in both
console.log(user, user2);
// { username: 'ali', car: { name: 'Toyota' } } { username: 'sara', car: { name: 'Toyota' } }

// deep copy
function copyObj(obj) {
  const newObj = {};
  newObj.username = obj.username;

  // copy the keys and values
  //   newObj.car = {};
  //   for (let [k, v] of Object.entries(obj.car)) {
  //     newObj.car[k] = v;
  //   }

  //   same thing, copies: key:value
  newObj.car = { ...obj.car };

  return newObj;
}

// now user3.car => is a new obj, and not a reference
const user3 = copyObj(user);
user3.car.name = "Ferrari";
console.log(user, user3);

// Math object
console.log(Math.max(2, 10, 3)); //10
console.log(Math.min(2, 10, 3)); //2
console.log(Math.sqrt(20)); // 4.4721

console.log("========");
const degreesToRadians = (deg) => deg * (Math.PI / 180);
const radiansToDegrees = (rad) => rad * (180 / Math.PI);

const sin = Math.sin(degreesToRadians(45)); // 0.7071
const cos = Math.cos(degreesToRadians(45)); // 0.7071
const tan = Math.tan(degreesToRadians(45)); // 1
console.log(sin, cos, tan);
// takes sin ratio, gives you back the angle
console.log(radiansToDegrees(Math.asin(sin))); // 45
// takes cos ration, gives you back the angle
console.log(radiansToDegrees(Math.acos(cos))); // 45
// takes tan slope, gives you the angle
console.log(radiansToDegrees(Math.atan(tan))); // 45

// =============

// return a random point on a circle
function randomPointOnCircle(radius) {
  // get a random value, within the range of, 0 to 360
  // or, 0 to 2*pi (full circle)
  // Math.random => returns, a range of 0 to 1, 0.1 (10%) of circle, 1 = 100% of circle
  // multi 6.28 by, 0 to 1 => gives you a range between:: 0 to 6.28
  // Math.random => 0 to 1, 1 is exclusive, so, it gets close to 6.28
  const angle = Math.random() * (Math.PI * 2); //radians

  // get x, y , for this angle
  // this is x, y for radius = 1 , unit circle
  let x = Math.cos(angle);
  let y = Math.sin(angle);

  // scale the x,y with radius
  x = radius * x;
  y = radius * y;

  return { x, y };
}

console.log(randomPointOnCircle(100));

//================

const names = ["sara", "samira", "mahta"];

// destructure array inside function parameter
function printNames([sara, samira, mahta]) {
  // just use them as local variables
  console.log(sara, samira, mahta);
}
printNames(names);

{
  // object destructuring
  const animal = {
    name: "chicken",
    eatable: true,
  };

  // we can set aliases
  const { name: animalName, eatable } = animal;
  console.log(animalName, eatable);

  // optional property access
  // optional chaining
  console.log(typeof animal?.power); // undefined

  // optional chaining with function calls
  // so, if method does not exists, you get an undefined, instead of error
  console.log(typeof animal.attack?.());

  // optional chaining with arrays
  const arr = [1, 2, 3];

  // out of range , gives undefined
  console.log(typeof arr[3]); // undefined

  // accessing, object.array.[index]
  console.log(typeof { name: "ali" }.arrayProp?.[0]);
}

// json
const player = {
  name: "ali",
  score: 23,
  isPlaying: true,
  gun: {
    power: 10,
  },
  inventory: ["sward", "woden stick"],
  // function can not be serialized to json
  attack() {
    console.log(`player ${this.name} attacks.`);
  },
};

// serialize js to json
const json = JSON.stringify(player);
//{"name":"ali","score":23,"isPlaying":true,"gun":{"power":10},"inventory":["sward","woden stick"]}

console.log(json);

const playerOut = JSON.parse(json);

console.log(playerOut.inventory[0]); // sward

// this is also a way of coping objects
{
  const user = {
    username: "sara",
    cloth: { name: "underwear" },
  };

  // deep copy
  const user2 = JSON.parse(JSON.stringify(user));

  user2.cloth.name = "bra";
  console.log(user.cloth.name, user2.cloth.name); //underwear, bra
}

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

console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));
console.log(Math.asin(0));
console.log(Math.acos(0));
console.log(Math.atan(0));

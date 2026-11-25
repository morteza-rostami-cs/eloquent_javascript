// trig in js:

/*

# trig, is all about, relation between angles and side length of triangles.

# 1 radian
- start from 0 degree on a unit circle
- rotate counter clockWise
- fit 1 radius in circle arc, meaning: circle arc = 1 radius
- stop there
- angle theta is = 1 radian

//now, if we keep rotation left, and fit more radius into arc,
// at 180degree or 1PI = we can fit 3.14 radians into our half circle

//2PI at 360 degree => full circle
// 3.14 * 2

*/

// pi
// 3 and .14 radians, as we rotate counterClockWise on a circle
console.log(Math.PI / 2); // 1.57 90degree
console.log(Math.PI); // 3.14 - half circle
// 270 or 3pi/2
console.log(Math.PI * 1.5); // 4.71 50% more
// 360
console.log(Math.PI * 2); // 6.28 full circle

// convert degree to radian
function degreesToRadians(degrees) {
  // if: 180degree is 1pi
  // then: 1pi/180 = x radian per 1 degree
  // then: 90 degrees * radian per 1 degree = x radian
  return degrees * (Math.PI / 180);
}

console.log(degreesToRadians(90)); // 1.57
console.log(degreesToRadians(180)); // 3.14
console.log(degreesToRadians(270)); // 4.71

// radians to degrees
function radiansToDegrees(radians) {
  // think of a half circle, 180degree or 1pi
  // now, 3.14 is really 3 and .14 radians
  // if 3 radians is 180 degree,
  // divide 180 by 3rad and you get degree for 1radians
  // 1 radians = 57.29 degree
  return radians * (180 / Math.PI);
}

console.log(radiansToDegrees(3)); //171.88

console.log("=====");

// trig functions
const opposite = 3;
const adjacent = 4;
const hypotenuse = 5;

// sin()
// a ratio between -1 0 +1 (in unit circle)
// is a ratio between: opposite side and hypotenuse
// sin(theta) = opposite/hypo
// also:
// distance in y / hypo
// sin(theta) = y/hypo

const sin = opposite / hypotenuse;
console.log(sin); // 0.6

// cos()
// a ratio between: -1 0 +1
// cos(theta) = adjacent / hypo
// distance in x-axis
// cos(theta) = x / hypo

const cos = adjacent / hypotenuse;
console.log(cos); // 0.8

// tan()
// tan(theta) = opposite / adjacent
// or:
// tan(theta) = y / x
// it is: rise/run OR slope
// value is not between -1 0 +1, and has approaching infinity and so on
// also:
// tan(theta) = sin(t) / cos(t), t= angle theta
const tan = opposite / adjacent;
console.log(tan); // 0.75

// angle in degree, given: x, y
console.log(radiansToDegrees(Math.atan2(sin, cos)));

// js Math functions, calculate these ratios by => angle theta, so give them any angle (angle in radians)

//unit circle
// radius = 1
// start from (1, 0)
// and rotate, counter clock wise

// sin of 45 degree => sin and cos of 45 degree are the same
console.log(Math.sin(degreesToRadians(45))); // 0.70
console.log(Math.cos(degreesToRadians(45))); // 0.70

// in unit circle
// use t as theta
// radius/hypotenuse = 1
// cos(t) = x/1 = x => so, cos is same as x
// sin(t) = y/1 = y => so, sin is same as y
// sin = y-component
// cos = x-component

// so, if we have the angle, we can calc, x and y distance
// cos(45deg) = x = 0.7
// sin(45deg) = y = 0.7

// and if we have the x, y distance => use atan2() to calc the angle of rotation

// 180 / 4 = 45
// 3.14 / 4 = radians for 45
// const angle = Math.PI / 4; // radian

{
  const degrees = 45;
  const radians = degreesToRadians(degrees);

  // pass radians to, js Math trig functions (not degree)
  const x = Math.cos(radians);
  const y = Math.sin(radians);
  console.log("===");
  console.log(x, y); // 0.70, 0.70
}

// sin and cos , can also be negative, due to x and y being negative on the left quadrants of coordinate, system

function getPoint(angleDegrees) {
  const radians = degreesToRadians(angleDegrees);

  const x = Math.cos(radians);
  const y = Math.sin(radians);

  return { x, y };
}
console.log("=====");
console.log(getPoint(45));
console.log(getPoint(90));
// this is precision error!!!
// x here is: x = 0.00000000000000006123...
// so: technically works as same as 0!! no worries!!
// { x: 6.123233995736766e-17, y: 1 }

console.log(getPoint(180));
console.log(getPoint(270));

// ============
// ============
// ============

// sin()

// full circle rotation
function fullCircleSin() {
  // from 0 to 360, 45 at a time
  // here, oscillation happens, between: -1 0 +1
  for (let angle = 0; angle <= 360; angle += 45) {
    //convert to radians
    const radians = degreesToRadians(angle);
    // calc, sin or change in y, as we rotate
    const y = Math.sin(radians);

    console.log(y);
  }
}
fullCircleSin();

/*
vertical coordinate:
- At 0°, the point starts at the center height: y = 0.
- At 90°, it reaches the top: y = 1.
- At 180°, it returns to the center height: y = 0.
- At 270°, it reaches the bottom: y = -1.
- At 360°, it returns to its starting position: y = 0.
*/

// so, using sin, we can trap an increasing value, like: time inside a cycle => -1 0 +1
// why, because, what we put in is an angle, and even if we start from 0rad, and increase and pass 2pi rad (360), we keep going around the unit circle and visit the same angles.

{
  let time = 0;

  //   (t) = the current angle (in radians).
  // (sin(t)) = the vertical position.
  // (y) = a value between -1 and 1.
  function update() {
    // input an increasing value like time
    // and we oscillate between: -1 0 +1
    // const y = Math.sin(time)

    // we can add an (amplitude), a factor to make our wave, bigger or smaller
    // now: -100 0 +100
    //  y = A*sin(t)
    const amplitude = 100;
    const y = Math.sin(time) * amplitude; //consider time as radians

    console.log(y);

    time += 0.1;
  }

  //   setInterval(update, 100);
}

console.log("===");
{
  // .cos() :: horizontal movement && circular motion
  // if we have the angle theta, we can calc x, y
  // [cos(theta), sin(theta)]
  //===============
  //===============
  // formula for non unit circles
  // use this to calc the x, y of a point that is rotating around the circle arc line
  // cx = circle center x
  // cy = circle center y
  // r = radius
  // now, x,y for a point on the circle
  // x = cx + r*cos(t)
  // y = cy + r*sin(t)
  // r * cos(t) => multi by radius, scale the circle => cause: unit circle cos , gives you cos for radius = 1
  // and add cx and cy => to count for the circle center position => for unit circle is (0,0) => and cos(t) assumes unit circle
  // now: we can calc, x, y of a point rotating around a circle that is positioned anywhere on the coordinate system, not just (0, 0)

  function getPointOnCircle(angleDegrees, centerX, centerY, radius) {
    // convert degree to radians
    const radians = degreesToRadians(angleDegrees);

    // formula
    // x = cx + r*cos(angle)
    // y = cy + r*sin(angle)
    const x = centerX + radius * Math.cos(radians);
    const y = centerY + radius * Math.sin(radians);

    return { x, y };
  }

  console.log(getPointOnCircle(0, 300, 200, 100));
  console.log(getPointOnCircle(90, 300, 200, 100));
  console.log(getPointOnCircle(180, 300, 200, 100));
  console.log(getPointOnCircle(270, 300, 200, 100));
}

console.log('Hello from JavaScript');

//cylinder - radius 5in, length 9in
//what is the volume in cubic inches?

var radius = 5;
var height = 9;
var circleArea = Math.PI * (radius * radius);
var volume = circleArea * height;
console.log("My cylinder is " + volume + " square inches");

//you are floor painter. You have a huge bucket of paint. 
//You can paint 29,572 sq ft of surface before running out.
//Every house you paint has 3 rooms. The dimensions are:
//3 x 5
//7 x 9
//6 x 2
//How many full houses can you paint before runing out?

var house = 3*5 + 7*9 + 6*2;
var paintAmt = 29572;
var totalHouses = Math.floor(paintAmt/house);

console.log("I can paint " + totalHouses + "  houses before refilling my bucket");

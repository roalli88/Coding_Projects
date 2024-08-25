// Using the var, let and const variable declarations.
// And using arrays of numbers and mixed data types
var val = 20;
let greaterVal = 30;
const nums = [2,3,4,5,6]
const bag = ["clothing", 1.44, "Coffee"]

console.log("Printing contents of bag array");
for (let index = 0; index < bag.length; index++) {
    console.log(bag[index]);
}
console.log("Printing contents of nums array");
for (let index = 0; index < nums.length; index++) {
    console.log(nums[index]);
}


//Named function
function getVal(){
    console.log(`From the named function : val = ${val}`);
}
getVal();

//Anonymous function
let anonymousVal = function () {
    console.log(`From the anonymous function : greaterVal = ${greaterVal}`);
}

anonymousVal();

//Use of builtin function (sqrt)
let myRoot = Math.sqrt(val);
console.log(`The square root of ${val} is ${myRoot}`);

//Using conditional if-else statements
if (greaterVal > val) {
    console.log(`${greaterVal} is greater than ${val}`);
} else {
    console.log(`${greaterVal} is less than ${val}`);
}

//Creating an object
let Car = {
    numOfWheels: 4,
    wheels: function(){
        return this.numOfWheels;
    }
}
console.log(`A car has ${Car.wheels()} wheels.`);

const wheels = Car.wheels()
// Using conditonal switch statement
switch (wheels) {
    case 4:
        console.log("This is a car");
        break;

    default:
        console.log("This is not a car");
        break;
}


//Declare an array of five decimal numbers
const samples = [1.99329, 0.98993, 2.34435, 1.33425, 1.87688];

//Function that calculates the mean of the given array.
function mean(arr){
    let total = 0;
    for (const val of arr) {
        total += val;
    }
    let meanValue = total / arr.length;
    return meanValue;
}
//The calculated mean of the array.
let arrMean = mean(samples);
//Round to two decimal places
let roundedMean = Math.round(arrMean * 100) / 100
console.log("The mean of the given sample is " + roundedMean + " to the nearest integer.");
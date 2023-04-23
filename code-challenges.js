// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// // --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// // Pseudo code:
// // comment out the const temperatures and creat 3 different variables for temperature 1, 2, 3 and set them according to their respective temperatures
// // create a function called boilingPoint
// // create an argument and call it temp
// // this is conditional statement, write else if with returns for each condition. If the temp is less than < 212, the returning output will be below boiling point.  If the temp is strictly at 212 the returning output is at boiling point, and else if any number above 212 output is returned above boiling point.
// // // console log the boilingPoint and use the variables to see if numbers are below, at, or above boilingpoint
// var temperature1 = 42
// var temperature2 = 350
// var temperature3 = 212

// const boilingPoint = (temp) => {
//     if (temp < 212) {
//       return "Below boiling point";
//     } else if (temp === 212) {
//       return "At boiling point";
//     } else {
//       return "Above boiling point";
//     }
//   }

// // const temperature1 = 42
// // // Expected output: "42 is below boiling point"
// console.log(boilingPoint(temperature1));
// // // output is below boiling point
// // const temperature2 = 350
// // // Expected output: "350 is above boiling point"
// console.log(boilingPoint(temperature2));
// // // output is above boiling point
// // const temperature3 = 212
// // // Expected output: "212 is at boiling point"
// console.log(boilingPoint(temperature3));
// // output is at boiling point


// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// // Pseudo code:
// // Need to joing both arrays using the built in method .concat
// // create a variable called MLB to make action permenant
// // use MLB.length in console.log 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns));  
// // the output is 2,5,2,2,4,6,3,5,3 however the above is only a temporary change.  To make this action a permenant one a variable needs to be created. create a variable and name it MLB and store the concated arrays in the variable, then console.log

// var MLB = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

// // console.log(MLB);

// //output is ,5,2,2,4,6,3,5,3

// console.log(MLB.length);

// output is 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
// const currentCohort = "Charlie 2023
// Pseudo code:
// console.log(currentCohort.reverse());--> wasnt that simple, should have known better

// Thinking for some reason about creating a function, however I feel that is not needed and just a bunch of extra steps.  I thibk it could be done, but need to keep the code simple. 
// .reverse is the way to go for sure. 
// my variable contains the string, I can call my variable in console.log then split, reverse, join if I want this action to be temporary.  I will make it permenant by creating a variable called backwards and storing currentCohort split, reverse, join, then console.log

const currentCohort = "Charlie 2023"

const backwards = currentCohort.split("").reverse().join("")

console.log(backwards)
// Expected output: "3202 eilrahC"
// // output is 3202 eilrahC



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// I know I need to find the index of the last 42,
// i had to google research this.  the url is https://www.google.com/search?q=what+built+in+method+in+javascript+will+give+you+the+last+index+of+an+array&oq=what+built+in+method+in+javascript+will+give+you+the+last+index+of+an+array&aqs=chrome..69i57.16836j0j15&sourceid=chrome&ie=UTF-8  
// I have an array, and a variable.  I will create a variable to be called on that will store the last indexed array and the givenValue1
// the answer variable will call the array with the lastIndexOf built in method and pass in the arguement of givenValue1
//                            0   1   2  3  4  5   6   7   8
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42

const answer1 = numberOfConnections.lastIndexOf(givenValue1)
console.log(answer1);
// output is 7
// // Expected output: 7

// repeated the same as above

const givenValue2 = 10
const answer2 = numberOfConnections.lastIndexOf(givenValue2)
console.log(answer2);
//output is 8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

const answer3 = (sanDiegoSummerTemperatures) => {
   return sanDiegoSummerTemperatures.map((value) => {
    return value[0] + value.substring(1)
   })
}
console.log(answer3(sanDiegoSummerTemperatures));

// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

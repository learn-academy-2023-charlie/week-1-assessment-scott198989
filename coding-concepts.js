// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: will return the amount of indexes in the string LEARN 2023
// b) Verify and explain: the output is 10 because the .length built in method counts the elements in the string at their indexs starting with 0 going from left to right also including a space.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: the output will be 'o' in Hello
// b) Verify and explain: when calling upon the variable greeting and assessing the string "Hello World!" we are looking for what is indexed at 4 in the entire string. Since I know the variable greeting contains just the string "Hello World!" and nothing else, when I see the [4] at the end of greeting when it is console.log I know the action to be performed is simply counting the indexes in the string greeting represents.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: the output will be "Ruby"
// b) Verify and explain: just like strings arrays have indexes and are indexed starting at 0, and because this is an array and not a string we count each individual element "JavaScript", "Ruby", "Pythonm", "C++" as its own index. JavaScript would start at the index of 0, Ruby is 1, python 2, C++ 3.  Since what is being called on is the first index, the output is Ruby,

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: the output will capitalize both of the first elements at both indexes resulting in "Saturday", "Sunday"
// b) Verify and explain: I was wrong.  The output turned out to be an error messege because .toUpperCase is not a function.  When using console.log you are calling on an action to be performed; .toUpperCase in this scenario was trying to uppercase the variable "weekendDays".  Variables can not be uppercased like strings; however, you could turn the array into a string and then use the .toUpperCase if the programmer wanted to upper case saturday and sunday in this scensrio.  

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: the output will be number
// b) Verify and explain: the output was number because when typeof is used it is looking for strings of a certain data type.  the .length would return a numerical datatype, so essential the console.log is asking what sort of datatype are you looking for? the built in method which would be executable command looking for a number s number datatype so that is why the output is number

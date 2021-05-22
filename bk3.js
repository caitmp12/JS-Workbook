//Conceptual//
// 1. How do we assign a value to a variable? - which line(s) is/are valid?

let a = 0
const b = 1
// 9 = a
// b = b + 5

// console.log(a)

//2. How do we change the value of a variable?
// 3. How do we assign an existing variable to a new variable?

a = b

// console.log(a)

// Strings //
//Switcharoo
//1. Create a variable called firstVariable //2. assign it the value of a string //3. change the value of this variable to a number //4. store the value of firstVariable into a new variable called secondVariable //5. change the value of secondVariable to a string //6. What is the value of firstVariable?

let firstVariable = "hello world"

firstVariable = 2

let secondVariable = firstVariable 

secondVariable = "holaaaaa"

// console.log(firstVariable)
// console.log(secondVariable)

// Strings - Combine It
// 1. Create a variable called yourName and set it equal to your name as a string. // Write an expression that takes the string "Hello, my name is" and the variable yourName so that it returns a new string with them concatenated. 

let yourName = "Caitlin"
console.log("Hello, my name is " + yourName)
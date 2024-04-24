"use strict";
//          100 days of coding challenge ( DAY 36 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01
// --Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2019)); // Outputs: false
console.log(isLeapYear(2024)); // Outputs: true
// Question 02
// --Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisbleByTwoAndThree(number) {
    // --Uses the modulo operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisbleByTwoAndThree(12)); //Outputs: true
console.log(isDivisbleByTwoAndThree(14)); // Outputs: false
// Question 03 
// --This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false

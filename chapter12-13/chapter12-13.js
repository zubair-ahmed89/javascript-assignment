// ==========================================
// Assignment #12-13
// If...Else & Else If
// ==========================================


// Q1
var character = prompt("Enter a character:");

var ascii = character.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("The input is a number");
}
else if (ascii >= 65 && ascii <= 90) {
    alert("The input is an uppercase letter");
}
else if (ascii >= 97 && ascii <= 122) {
    alert("The input is a lowercase letter");
}
else {
    alert("The input is neither a number nor a letter");
}


// Q2
var num1 = Number(prompt("Enter first integer:"));
var num2 = Number(prompt("Enter second integer:"));

if (num1 > num2) {
    alert(num1 + " is larger");
}
else if (num2 > num1) {
    alert(num2 + " is larger");
}
else {
    alert("Both integers are equal");
}


// Q3
var number = Number(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive");
}
else if (number < 0) {
    alert("The number is negative");
}
else {
    alert("The number is zero");
}


// Q4
var letter = prompt("Enter a character:");

if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
) {
    alert("true");
}
else {
    alert("false");
}


// Q5
var correctPassword = "abc123";

var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}


// Q6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

alert(greeting);


// Q7
var time = Number(prompt("Enter time in 24-hour format, e.g. 1900:"));

if (time >= 0 && time < 1200) {
    alert("Good morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}
else {
    alert("Invalid time");
}
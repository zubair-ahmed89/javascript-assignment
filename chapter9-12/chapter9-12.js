// Assignment # 9-10
// User Input & Conditional Statement


// Q1
var city = prompt("Enter your city:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


// Q2
var gender = prompt("Enter your gender:");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}


// Q3
var signal = prompt("Enter traffic signal color:");

if (signal.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (signal.toLowerCase() === "yellow") {
    alert("Ready to move");
}
else if (signal.toLowerCase() === "green") {
    alert("Move now");
}


// Q4
var fuel = +prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// Q5-A
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


// Q5-B
var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}


// Q5-C
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}


// Q5-D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


// Q5-E
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}


// Q5-F
if ("car" < "cat") {
    alert("car is smaller than cat");
}


// Q6
var marks1 = +prompt("Enter marks obtained in first subject:");
var marks2 = +prompt("Enter marks obtained in second subject:");
var marks3 = +prompt("Enter marks obtained in third subject:");

var totalMarks = +prompt("Enter total marks:");

var marksObtained = marks1 + marks2 + marks3;
var percentage = (marksObtained / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Very Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "Good";
}
else if (percentage >= 50) {
    grade = "C";
    remarks = "You need to improve";
}
else {
    grade = "F";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");


// Q7
var secretNumber = 7;

var guess = +prompt("Guess the secret number between 1 and 10:");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}


// Q8
var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert(number + " is divisible by 3");
}


// Q9
var number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert(number + " is an even number");
}
else {
    alert(number + " is an odd number");
}


// Q10
var temperature = +prompt("Enter temperature:");

if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today's Weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
}


// Q11
var firstNumber = +prompt("Enter first number:");
var secondNumber = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
}
else if (operation === "-") {
    result = firstNumber - secondNumber;
}
else if (operation === "*") {
    result = firstNumber * secondNumber;
}
else if (operation === "/") {
    result = firstNumber / secondNumber;
}
else if (operation === "%") {
    result = firstNumber % secondNumber;
}
else {
    result = "Invalid operation";
}

alert("Result: " + result);
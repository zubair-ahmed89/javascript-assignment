// Assignment # 17-20
// JAVASCRIPT - ARRAYS AND LOOPS


// Q1
// Declare and initialize an empty multidimensional array

var multiArray = [[], [], []];


// Q2
// Multidimensional array representing matrix

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

document.write("<h2>Matrix</h2>");

for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}


// Q3
// Numeric counting from 1 to 10

document.write("<h2>Counting 1 to 10</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}


// Q4
// Multiplication table

var tableNumber = +prompt("Enter table number:");
var tableLength = +prompt("Enter table length:");

document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");

for (var i = 1; i <= tableLength; i++) {
    document.write(
        tableNumber + " x " + i +
        " = " + (tableNumber * i) +
        "<br>"
    );
}


// Q5
// Print fruits using for loop

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h2>Fruits</h2>");

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}


// Q6-A
// Counting 1 to 15

document.write("<h2>Counting</h2>");

for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br><br>");


// Q6-B
// Reverse counting 10 to 1

document.write("<h2>Reverse Counting</h2>");

for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<br><br>");


// Q6-C
// Even numbers 0 to 20

document.write("<h2>Even Numbers</h2>");

for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

document.write("<br><br>");


// Q6-D
// Odd numbers 1 to 19

document.write("<h2>Odd Numbers</h2>");

for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

document.write("<br><br>");


// Q6-E
// Series 2k to 20k

document.write("<h2>Series</h2>");

for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

document.write("<br><br>");


// Q7
// Search item in array

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Welcome to ABC Bakery. What do you want to order?");

var found = false;

for (var i = 0; i < A.length; i++) {

    if (A[i].toLowerCase() === searchItem.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    document.write(
        "<h2>" + searchItem + " is available at index " + i + " in our bakery."
    );
} else {
    document.write(
        "<h2>We are sorry. " + searchItem + " is not available in our bakery."
    );
}


// Q8
// Find largest number

var numbers = [24, 53, 78, 91, 12];

var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

document.write("<h2>Largest Number</h2>");
document.write("The largest number is: " + largest + "<br><br>");


// Q9
// Find smallest number

var numbers = [24, 53, 78, 91, 12];

var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

document.write("<h2>Smallest Number</h2>");
document.write("The smallest number is: " + smallest + "<br><br>");


// Q10
// Multiples of 5 from 1 to 100

document.write("<h2>Multiples of 5</h2>");

for (var i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}
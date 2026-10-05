// Assignment # 13-15
// JAVASCRIPT - ARRAYS


// Q1
var studentNames = [];


// Q2
var studentNames2 = new Array();


// Q3
var stringsArray = ["Apple", "Banana", "Mango"];


// Q4
var numbersArray = [10, 20, 30, 40, 50];


// Q5
var booleanArray = [true, false, true, false];


// Q6
var mixedArray = ["Zubair", 25, true, null];


// Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("<h2>Educational Qualifications</h2>");
document.write("<ol>");

for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ol>");


// Q8
var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

document.write("<h2>Student Scores & Percentages</h2>");

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;

    document.write(
        "Score of " + studentNames[i] +
        " is " + studentScores[i] +
        ". Percentage: " + percentage + "%<br>"
    );
}


// Q9
var colors = ["Red", "Green", "Blue"];

document.write("<h2>Colors</h2>");
document.write(colors + "<br><br>");


// a. Add color to beginning
var colorBeginning = prompt("Enter a color to add at the beginning:");
colors.unshift(colorBeginning);

document.write("After adding color at beginning: " + colors + "<br><br>");


// b. Add color to end
var colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);

document.write("After adding color at end: " + colors + "<br><br>");


// c. Add two colors to beginning
colors.unshift("Yellow", "Orange");

document.write("After adding two colors at beginning: " + colors + "<br><br>");


// d. Delete first color
colors.shift();

document.write("After deleting first color: " + colors + "<br><br>");


// e. Delete last color
colors.pop();

document.write("After deleting last color: " + colors + "<br><br>");


// f. Add color at user-defined index
var addIndex = +prompt("At which index do you want to add a color?");
var addColor = prompt("Enter color name:");

colors.splice(addIndex, 0, addColor);

document.write("After adding color at index " + addIndex + ": " + colors + "<br><br>");


// g. Delete colors from user-defined index
var deleteIndex = +prompt("At which index do you want to delete color(s)?");
var deleteCount = +prompt("How many colors do you want to delete?");

colors.splice(deleteIndex, deleteCount);

document.write("After deleting colors: " + colors + "<br><br>");


// Q10
var studentScores = [320, 230, 480, 120];

studentScores.sort(function(a, b) {
    return a - b;
});

document.write("<h2>Sorted Student Scores</h2>");
document.write(studentScores + "<br><br>");


// Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var selectedCities = cities.slice(2, 5);

document.write("<h2>Selected Cities</h2>");
document.write(selectedCities + "<br><br>");


// Q12
var arr = ["This ", "is ", "my ", "cat"];

var singleString = arr.join("");

document.write("<h2>Single String</h2>");
document.write(singleString + "<br><br>");


// Q13 - FIFO
var fifoArray = [];

fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

document.write("<h2>FIFO</h2>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br><br>");


// Q14 - LIFO
var lifoArray = [];

lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");

document.write("<h2>LIFO</h2>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br><br>");


// Q15
var manufacturers = [
    "Apple",
    "Samsung",
    "Motorola",
    "Nokia",
    "Sony",
    "Haier"
];

document.write("<h2>Phone Manufacturers</h2>");

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");
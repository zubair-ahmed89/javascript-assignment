// ==========================================
// Assignment #5 - Math Expressions
// ==========================================


// Q1
var num1 = 10;
var num2 = 5;
var addition = num1 + num2;

document.write("<h2>Q1 - Addition</h2>");
document.write("Sum of " + num1 + " + " + num2 + " = " + addition + "<br><br>");


// Q2 - Subtraction, Multiplication, Division & Modulus

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("<h2>Q2 - Basic Math Operations</h2>");
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br><br>");


// Q3
var value;

document.write("<h2>Q3 - Variable Operations</h2>");
document.write("Value after variable declaration is: " + value + "<br>");

value = 5;

document.write("Initial value: " + value + "<br>");

value++;

document.write("Value after increment is: " + value + "<br>");

value = value + 7;

document.write("Value after addition is: " + value + "<br>");

value--;

document.write("Value after decrement is: " + value + "<br>");

var remainder = value % 3;

document.write("The remainder is: " + remainder + "<br><br>");


// Q4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("<h2>Q4 - Movie Tickets</h2>");
document.write("Cost of one movie ticket is " + ticketPrice + " PKR<br>");
document.write("Cost of " + numberOfTickets + " tickets is " + totalCost + " PKR<br><br>");


// Q5
var tableNumber = 5;

document.write("<h2>Q5 - Multiplication Table</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

document.write("<br>");


// Q6 - Temperature Converter

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write("<h2>Q6 - Temperature Converter</h2>");
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br><br>");


// Q7 - Shopping Cart

var priceItem1 = 1000;
var priceItem2 = 500;

var quantityItem1 = 2;
var quantityItem2 = 3;

var shippingCharges = 200;

var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;

var totalCartCost = totalItem1 + totalItem2 + shippingCharges;

document.write("<h2>Q7 - Shopping Cart</h2>");
document.write("Price of item 1: " + priceItem1 + "<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Price of item 2: " + priceItem2 + "<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br>");
document.write("Total Cost: " + totalCartCost + "<br><br>");


// Q8 - Percentage

var totalMarks = 500;
var marksObtained = 425;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Q8 - Student Percentage</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");


// Q9 - Currency Conversion

var usDollars = 10;
var saudiRiyals = 25;

var totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);

document.write("<h2>Q9 - Currency Conversion</h2>");
document.write("Total currency in Pakistani Rupees: " + totalPKR + " PKR<br><br>");


// Q10

var number = 10;

var result = ((number + 5) * 10) / 2;

document.write("<h2>Q10 - Arithmetic Sequence</h2>");
document.write("Result: " + result + "<br><br>");


// Q11 - Age Calculator

var currentYear = 2026;
var birthYear = 1989;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h2>Q11 - Age Calculator</h2>");
document.write("They are either " + age1 + " or " + age2 + " years old<br><br>");


// Q12 - Geometrizer

var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h2>Q12 - Geometrizer</h2>");
document.write("Radius: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");


// Q13 - Lifetime Supply Calculator

var favoriteSnack = "Chips";
var currentAge = 37;
var maximumAge = 80;
var amountPerDay = 2;

var remainingYears = maximumAge - currentAge;
var totalSnacks = remainingYears * 365 * amountPerDay;

document.write("<h2>Q13 - Lifetime Supply Calculator</h2>");
document.write(
    "You will need " + totalSnacks +
    " " + favoriteSnack +
    " to last you until the ripe old age of " +
    maximumAge
);
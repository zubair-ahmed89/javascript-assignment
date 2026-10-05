//Q1 solution

var a = 10;

document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//Q2 solution

var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

document.write("--a = 1<br>");
document.write("--a - --b = 1 - 0 = 1<br>");
document.write("--a - --b + ++b = 1 - 0 + 1 = 2<br>");
document.write("--a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3<br>");

//Q.3
var name = prompt("Enter your name:");

alert("Hello " + name + "!");

//Q.5

var number = prompt("Enter a number:");

if (number === null || number === "") {
    number = 5;
}

document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(
        number + " x " + i + " = " + (number * i) + "<br>"
    );
}

//Q.6

// a) Take three subjects names

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");


// b) Total marks for each subject

var totalMarks = 100;


// c, d) Obtained marks

var marks1 = +prompt("Enter obtained marks in " + subject1 + ":");
var marks2 = +prompt("Enter obtained marks in " + subject2 + ":");
var marks3 = +prompt("Enter obtained marks in " + subject3 + ":");


// e) Calculate total and percentage

var obtainedMarks = marks1 + marks2 + marks3;
var total = totalMarks * 3;
var percentage = (obtainedMarks / total) * 100;


// Display result

document.write("<h2>Marks Sheet</h2>");

document.write("<table border='1' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + marks1 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + marks2 + "%</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + marks3 + "%</td>");
document.write("</tr>");

document.write("</table>");

document.write("<h3>Total Marks: " + total + "</h3>");
document.write("<h3>Obtained Marks: " + obtainedMarks + "</h3>");
document.write("<h3>Percentage: " + percentage + "%</h3>");
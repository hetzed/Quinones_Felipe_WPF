/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment:Expressions | Expressions Personal
 */

// How much money I'll make in a week
alert("How much you are going to make this Week?");

// Variable for days worked


// Variable for hours worked
var hoursWorked = prompt("How many hours per day are you going to work?");
//Console.log out hoursWorked
console.log(hoursWorked);

// Variable for the total of hours worked
var totalHours = daysWorked * hoursWorked; //Total hours worked
//Console.log out Total hours worked
console.log(totalHours);

// Variable for the pay rate
var payRate = prompt("What is your pay rate");
//Console.log out Total hours worked
console.log(payRate);

// Calculate how much salary will get
var weekSalary = totalHours * payRate;
//Console.log out salary
console.log("You\'ll get this week the amount of $" + weekSalary + " dollars before taxes.");

// Calculate how much salary after taxes

// Variable for social security
var socSec = 0.062 * weekSalary;
//Console.log out social security
console.log(socSec);

// Variable for medicare
var mediCare = 0.0145 * weekSalary;
//Console.log out medicare
console.log(mediCare);

// Variable that hold the calculation for after taxes
var afterTaxes = Math.round((weekSalary - socSec - mediCare)*100)/100; //round the result to two decimals
//Console.log out afterTaxes
console.log("After paying your social security and medicare you\'ll get the amount of $" + afterTaxes + " dollars.");

// Tell the user how much he/her will make a week gross and after taxes
alert("You\'ll get this week the amount of $" + weekSalary + " dollars before taxes.\nAfter paying your social security and medicare you\'ll get the amount of $" + afterTaxes + " dollars.\n\nHave a nice day!");



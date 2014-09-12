/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment: Expressions | Expressions Wacky
 */

//This is the crazy lottery, consist of selecting a number and the system will match that number to something and give to the user
alert("Welcome to the crazy lottery, please press OK and start winning!");

//First establish the array that will be the different car models
var cars = ["Mazda", "Toyota", "Audi", "Mercedes Benz", "BMW", "Aston Marti", "Infinity", "Honda", "Lexus", "Range Rover"];

//Let the user select the number between 0 to 9
var number = Number(prompt("Select a number from 0 to 9"));
console.log(number); //Console log out the number selected by the user

//Increment the number selected by the user
number = ++number;
console.log(number); //Console log out the number incremented

// This variable will show what car is selected
var lotprize1 = cars[number]; //The number stored in the variable number becomes the index number that will be the selected car.
console.log(lotprize1); //Console log out the selected car

//Now the user will tell us another number to select the next lottery prize
var number2 = Number(prompt("Select a number from 10 to 20"));
console.log(number2); //Console log out the number selected by the user

//This total will be use to establish the second prize
var newNo = number - number2;
console.log(newNo); //Console log out the total

//The user will tell us the year to select the second prize
var yBirth = Number(prompt("What year where you born?"));
console.log(yBirth); //Console log out the year

//The total for the second prize
var lotprize2 = (yBirth * number2) - newNo;
console.log(lotprize2); //Console log out the second prize data
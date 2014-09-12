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
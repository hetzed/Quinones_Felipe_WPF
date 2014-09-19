/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment:Conditionals | Conditional Personal
 */

//How much time you have to wait in Walgreens for coffee

//How many people are in the line for coffee
var peopleInline = Number(prompt("How many people are in the line for coffee?"));
console.log(peopleInline); //Console log data peopleInLine

//Now validate if the user enter data
if(peopleInline != ""){
    //How many people is in the line
    console.log("There are " + peopleInline + " people waiting for coffee.");
//Check if user entered information
}else{
    //Alert the user if forgot to enter the info
    alert("Hey!, you forgot to enter how many people are in the line.");
    //Ask the user again
    peopleInline = Number(prompt("Please, How many people are in the line for coffee?"));
    //How many people is in the line
    console.log("There are " + peopleInline + " people waiting for coffee.");
}

//How much time you have to wait for the coffee
var timeToWait = Number(prompt("How much minutes are you waiting for the coffee?"));


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

//Now validate if the user enter data
if(timeToWait != ""){
    //How many people is in the line
    console.log("You are waiting " + timeToWait + " minutes for coffee.");
//Check if user entered information
}else{
    //Alert the user if forgot to enter the info
    alert("Hey!, you forgot to enter the minutes.");
    //Ask the user again
    timeToWait = Number(prompt("How much minutes are you waiting for the coffee?"));
    //How much time you are waiting
    console.log("You are waiting " + timeToWait + " minutes for coffee.");
}

//How much will take...
if(peopleInline >= 3 || timeToWait >= 10){
    //If going to take long
    console.log("Get ready to wait!");
//If it not going to take long
}else{
    //If not going to take long
    console.log("You are safe, doesn't have too wait too much.");
}
alert(peopleInline * timeToWait + " minutes for your turn to get coffee.");

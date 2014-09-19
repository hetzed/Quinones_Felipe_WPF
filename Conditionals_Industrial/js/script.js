/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment:Conditionals | Conditional Industry
 */

// Test what day had the best service level

//The user enters the info for the first variables
var callsMon = prompt("How many calls the call center received on Monday?");
var callsAIT_Mon = prompt("How many calls were answered in time?");

console.log(callsMon + " calls on Monday"); //Console log calls received on Monday
console.log(callsAIT_Mon + " calls in time Monday"); //Console log calls answered in time on Monday

////The user enters the info for the next variables
var callsTues = prompt("How many calls the call center received on Tuesday?");
var callsAIT_Tues = prompt("How many calls were answered in time?");

console.log(callsTues + " calls on Tuesday"); //Console log calls received on Tuesday
console.log(callsAIT_Tues + " calls in time Tuesday"); //Console log calls answered in time on Tuesday

//Validate info
if (callsMon, callsAIT_Mon, callsTues, callsAIT_Tues === "") {
    alert("You did not enter an answer for the questions.");
    console.log("You did not enter an answer for the questions.");
//if the two variables were answer continue...
} else {
    //Now we have to set what is the service level for each day
    //Variables for SL(service level)
    var slA = (callsAIT_Mon / callsMon) * 100; // Round up the result, less decimal digits
    console.log(slA + "%");
    var slB = (callsAIT_Tues / callsTues) * 100; // Round up the result, less decimal digits
    console.log(slB + "%");

    // Now we have the SL for the days, now we have to compare each to establish what is the best service level
    (slA < slB) ? console.log("Tuesday have a better SL") : console.log("Monday have a better SL");
}
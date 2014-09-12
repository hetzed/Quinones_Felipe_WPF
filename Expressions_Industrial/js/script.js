/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment: Expressions | Expressions Industrial
 */

// Getting Service Level Percent and Abandoned Level Percent at a Call Center

// Establish variables
// This variables will be use for the console and alert message
var text1 = "Your Service level is ";
var text2 = "Your Abandoned is ";
var text3 = " percent";

// Information that is going to be ask to calculate service level and abandoned
var callsAns = prompt("How many calls were answered?"); // Variable for calls answered and prompt user to give the number of answered calls
var callsAnsInTime = prompt("How many of those calls were answered within threshold?"); // Variable for calls answered within threshold and prompt the user to give the number of the calls
var callsAban = prompt("How many calls were abandoned?"); // Variable for calls abandoned and prompt the user to give the number of those calls

// Console.log out variables
console.log(callsAns);
console.log(callsAnsInTime);
console.log(callsAban);

// Calculation for Service Level Percent
var totalCallsAns = Number(callsAns) + Number(callsAban); // This is the calculation to gain the Calls Offered
console.log(totalCallsAns); // Console.log out calls offered
var servLvl = Math.round(((callsAnsInTime / totalCallsAns) * 100) * 100) / 100; // Round up the result, less decimal digits
console.log(text1 + servLvl + text3); // Console.log out Service Level

// Calculation for Abandoned Calls Percent
var abnCallsPer = Math.round((callsAban / totalCallsAns) * 100) * 100 / 100; // Round up the result, less decimal digits
console.log(text2 + abnCallsPer + text3); // Console.log out Abandoned

// Lets say the results to the user
alert("Call Center results:\n" + text1 + servLvl + text3 + " and " + text2 + abnCallsPer + text3);
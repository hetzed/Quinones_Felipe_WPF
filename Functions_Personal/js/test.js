/**
 * Created by hetzed on 9/29/14.
 */
//Determining the appropriate functions with givens and variables
var calcGal, numberOfPeople, oz, days, ouncesPerGallon;

//validating for null or zero with loop on number of people input
while(! (numberOfPeople > 0) ){

    //Setting parameter input for number of people by user
    numberOfPeople = prompt("Enter the number of people in the house", " ");

    //printing to console number of people entered into the prompt
    console.log(numberOfPeople);
}

//validating for null or zero with loop on days input
while(! (days > 0) ){

    //Setting parameter input for use to input number of days water is needed
    days = prompt("Enter the number of days you need water for", " ");

    //printing to console the number of days entered into the prompt
    console.log(days);
}

//determining the variables for ounces per gallon
var ouncesPerGallon = 128;
//determining the variable for ounces
var oz = 16;

//setting variable total for functions
var total = calcGal(numberOfPeople, oz, days, ouncesPerGallon);




//Setting the function for gallon calculation
function calcGal(numberOfPeople, oz, days, ouncesPerGallon){
    //calculation of gallons per household
    var gallons = (numberOfPeople * oz * days) / (ouncesPerGallon);
    return gallons;

}
//Printing to console the
console.log(total);

//if statement for condiontal operation of total
if (total <= 1){

    //alerting user of conditional statement for total gallons
    alert("You will need to order" + " " + total + " " + "gallon of water.");
    //printing to console the total
    console.log(total);

}//if statement for condiontal operation of total
if (total >=2 && total <= 20) {
    //alerting user of conditional statement for total gallons
    alert("You will need to order" + " " + total + " " + "gallons of water.")
    //printing to console the total
    console.log(total);

    //else statement for condiontal operation of total
}else{

    //alerting user of conditional statement for total gallons
    alert(total + " " + " gallons " + "WOW, thats allot of water!")
    //printing to console the total
    console.log(total);
}




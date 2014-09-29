/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment: Functions | Functions Personal
 */

//Water for the gym

var calcLiters, nOfGymmers, onzas, dd, oPLit;
//validates null
while (! (nOfGymmers > 0)){
    nOfGymmers = prompt("Tell how many partners goes to gym with you?", " ");
    console.log(nOfGymmers); //console that out
}

while (! (dd > 0)){
    dd = prompt("Tell how many days you need water for gym?", " ");
    console.log(dd); //console that out
}

oPlit = 33.8; //var ounces per liter
onzas = 16; //var ounces

//Set Up totals
var totals = calcLiters(nOfGymmers, onzas, dd, oPlit);

//Function
function calcLiters(nOfGymmers, onzas, dd, oPlit) {
    var liters = (nOfGymmers * onzas * dd) / (oPlit);
    return liters;
}
console.log(totals); //console that out

if (totals <= 1){
    alert("You need" + " " + totals + " " + "liters of water.");
    console.log(totals);
}

if (totals >=2 && totals <=20){
    alert("You need" + " " + totals + " " + "liters of water.");
    console.log(totals); //console that out
}
else{
    alert(totals + " " + " liters " + " OOps too much!");
    console.log(totals);
}
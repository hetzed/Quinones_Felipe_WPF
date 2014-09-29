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

var oPlit = 33.8; //ounces per liter


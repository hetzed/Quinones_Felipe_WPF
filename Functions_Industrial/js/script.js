/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment: Functions | Functions Industrial
 */

//Get Discount on purchases
var purchase1 =Number(prompt("How much the item will cost on X Store?", ""));
var purchase2 =Number(prompt("How much the item will cost on Y Store?", ""));
//calc discounts
function calcSavings(purchase1, purchase2){
    var purchase2;
    var Discount1 = .25;
    var Discount2 = .30;
    var xStoreSaving = purchase1 * Discount1;
    var yStoreSaving = purchase2 * Discount2;
    //better savings
    console.log("Discount for X Store is $" + xStoreSaving, ". Discount for Y Store is $" + yStoreSaving + ".");
    return yStoreSaving;
}
var calc = calcSavings(purchase1,purchase2);
console.log(calc); //console.log present the calculation

if (xStoreSaving >= yStoreSaving)
{
    console.log("Choose X Store!."); //console log X Store
}
else if (yStoreSaving <= xStoreSaving)
{
    console.log("Choose Y Store!"); //console log Y Store
}
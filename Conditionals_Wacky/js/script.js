/*
 Felipe Quiñones
 WPF 1409 Section 01
 Assignment:Conditionals | Conditionals Wacky
 */

//Getting stronger than others.
//Your weight.

var mWeight = prompt("What is your weight?");
//Console.log out mWeight
console.log(mWeight);

//Target weight.

var tWeight = prompt("What is your target weight?");
//Console.log out tWeight
console.log(tWeight);

var others = false; //if others are stronger than me.

if(mWeight <= tWeight || others === true){
    console.log("Boooh!!!!");
}else{
    console.log("I'm Stronger");
}


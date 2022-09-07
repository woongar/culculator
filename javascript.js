
let culc;

let num1 = Number(prompt("enter a number"));
let y = prompt("choose your action:   +    -     /    * " );
let num2 = Number(prompt("enter a number"));

if (y == '+') {
    culc=num1+num2;
} else if (y== '/') {
    culc=num1/num2;
} else if (y== '-') {
    culc=num1-num2;
} else if (y== '*') {
    culc=num1*num2;
}
 alert(culc);


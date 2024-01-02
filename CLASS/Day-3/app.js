// the for loop

const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let i = 0; i < cars.length; i++) {
    document.write(i + ": " + cars[i] + "  ");
}
document.write("<br>")
// While Loop

let w = 50;
while (w < 55) {
    document.write(w + " ");
    w++;
}

document.write("<br>")
// Do while Loop

let d = 70;
do {
    document.write(d + " ");
    d++;
}
while (d <= 70);

document.write("<br>")
// If Statement

let age = "Are You A Male";

if (age == "yes") {
    document.write("You are a Male");
} else {
    document.write("You are a female");
}

document.write("<br>")

let email = ("Enter Email")
if (email.length > 12 && email.includes("@") && email.includes(".")) {
    document.write("Valid Email");
} else if (!email.length > 0 || typeof email != "string") {
    document.write("not a email")
} else {
    document.write("Invalid Email");
}

document.write("<br>")
// switch statement
let gender = ("Are you a male");
switch (gender) {
    case "yes":
    case "ya":
    case "y":
    case "i am":
    case "yes i am":
        document.write("You are a male");
        break;

    case "no":
    case "nope":
    case "nah":
    case "i am not":
        document.write("You are a female");
        break;
    default:
        document.write("You are AI");
}

document.write("<br>")
// ternary operator
let voteable = 18;

document.write(voteable >= 18 ? "Eligible" : "Not eligible");

document.write("<br>")
// Nullish Coalescing Operator
let namee = prompt("enter");
let text = "missing";
let result = namee ?? text;
document.write(result);

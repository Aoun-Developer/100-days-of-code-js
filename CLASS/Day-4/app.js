// Types of Functions

// 1. Function Declaration
function func_declar() {
    document.write("function declaration")
}
func_declar()
document.write("<br>")
// 2. Function Expression
const func_exp = function () {
    document.write("function expression")
}
func_exp()
document.write("<br>")
// 3. Arrow 
const func_arrow = () => {
    document.write("function arrow")
}
func_arrow();

document.write("<br>")
// returning values

const return_value = () => {
    return "return value"
}
document.write(return_value());

document.write("<br>")
// SetTimeout

setTimeout(() => {
    // console.log("set timeout")
}, 2000)

let box = document.querySelector("#box");
setTimeout(() => {
    box.style.border = "2px solid black";
    box.style.width = "200px";
}, 2000);

document.write("<br>")
// setInterval
setInterval(() => {
    box.style.width = "100px";
    box.style.height = "10px";
}, 1000);

setInterval(() => {
    box.style.width = "150px";
    box.style.height = "15px";
}, 2000)

// For Each Method
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

days.forEach((data) => {
    document.write(data + " ,");
})

document.write("<br>")
// FOr In loop
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for (key in fruits) {
    document.write(key + ": " + fruits[key] + " ,")
}

document.write("<br>")
// For Of Loop
for (key of fruits) {
    document.write(key + " ")
}

// Call back function

const mesgOne = (namee, time) => {
    console.log(`hello, you are ${namee}`);
    time();
}
const JS_task = data => {
    data = "js task";
    console.log(`your today's ${data}`);
}
const node_task = data => {
    data = "node task";
    console.log(`your today's ${data}`);
}
mesgOne("Aoun", JS_task);
// mesgOne("Ali", node_task);
// Function Types

// 1- Regular Function
function regularfunction() {
    document.write("I am Regular Function" + "<br>")
}
// regularfunction()

// 2- Function Expression
const functionExpression = function () {
    document.write("I am Function Expression" + "<br>")
}
// functionExpression()

// 3- Arrow Function
const arrowfunction = () => {
    document.write("I am Arrow Function" + "<br>")
}
// arrowfunction()

// Returning a value
const addfunc = (a, b) => {
    let ans = a + b;
    return ans;

}
// let result = document.write(addfunc(4, 5 + "<br>"))

const calcpod = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;

};

let productsANS = calcpod([20, 30, 40], 0.2)
// console.log(productsANS);

// Set Timeout function
setTimeout(() => {
    let employees = ["John", "Mike", "Peter"];
    // console.log(employees);
}, 2000);

let box = document.querySelector("#box");

setTimeout(() => {
    // box.style.height = "200px";
}, 3000)

// ForEach Method
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.forEach(function (days) {
    // document.write(days+ "<br>");
})

let list, html;
list = document.querySelector('.people');
html = "";

const students = ["aqib", "john", "doe", "sam"];

students.forEach((person) => {
    html += `<li style="color:red">${person}</li>`
});
list.innerHTML = html;

// Call Back Function

const func_1 = function (callback_func) {
    let value = 20;
    callback_func();
}
func_1(function (value) {
    // console.log(value);
})

const mesgOne = (day, time) => {
    console.log(`Today is ${day}`);
    time();
}
const mesgTwo = (time) => {
    time = "Morning";
    console.log(`Good ${time}!`);
};

mesgOne("Monday", mesgTwo);
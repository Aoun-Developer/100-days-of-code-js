// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// use for loop
const find_sign_1 = (...arg) => {
    let args = [...arg]
    let product = 1

    for (let i = 0; i < args.length; i++) {
        product *= args[i]
    };

    return (product > 0) ? "positive" : "negative";
}

// console.log(find_sign_1(3, -7, 2))
// console.log(find_sign_1(-3, -2, 4))










// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// use for in loop
const find_sign_2 = (...arg) => {
    let args = [...arg]
    let product = 1

    args.forEach(element => product *= element);

    return (product > 0) ? "positive" : "negative";
}

// console.log(find_sign_2(3, -7, 2))
// console.log(find_sign_2(-3, -2, 4))









// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// use for of loop
const find_sign_3 = (...arg) => {
    let args = [...arg]
    let product = 1

    for (const key in args) {
        (product *= args[key]);
    }

    return (product > 0) ? "positive" : "negative";
}

// console.log(find_sign_3(3, -7, 2))
// console.log(find_sign_3(-3, -2, 4))









// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// use forEach loop
const find_sign_4 = (...arg) => {
    let args = [...arg]
    let product = 1

    for (const key of args) {
        product *= key;
    }

    return (product > 0) ? "positive" : "negative";
}

// console.log(find_sign_4(3, -7, 2))
// console.log(find_sign_4(-3, -2, 4))
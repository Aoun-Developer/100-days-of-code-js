// 1. Write a JavaScript function that reverses a number.
// with for loop

const reverse_number_1 = (data) => {
    let Numb = data.toString();
    let store = "";
    for (let i = Numb.length; i > 0; i--) {
        store += i;
    }
    return store;
}
// console.log(reverse_number_1(12345));

// 1. Write a JavaScript function that reverses a number.
// with string methods

const reverse_number_2 = (data) => {
    const reversedString = data.toString().split("").reverse().join("");
    // this will return string
    // return reversedString; 

    // This will return Number
    return parseInt(reversedString);
}

// console.log(typeof (reverse_number_2(12345)) + " " + (reverse_number_2(12345)));

// 1. Write a JavaScript function that reverses a number.
// with string methods and unary plus operator

function reverseNumber2(number) {
    const reversedString = number.toString().split('').reverse().join('');
    return + reversedString;
}
// console.log(typeof(reverseNumber2(12345)) + " " + reverseNumber2(12345));

// 1. Write a JavaScript function that reverses a number.
// use reduce method
function reverseNumber4(number) {
    const reversedString = number.toString().split('').reduce((acc, curr) => curr + acc);
    return parseInt(reversedString);
}
// console.log(typeof (reverseNumber4(12345)) + " " + reverseNumber4(12345));
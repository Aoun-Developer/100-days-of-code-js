// reverse the string without using a built in reverse method

let string = "Hello";

for (let i = string.length - 1; i >= 0; i--) {
    // console.log(string[i]);
}

// count the number of vowels in a given string

let string1 = "hello world";
const countVolv = (str) => {
    let lowerCase = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] == 'a' || lowerCase[i] == "e" || lowerCase[i] == "i" || lowerCase[i] == "o" || lowerCase[i] == "u") {
            count++;
        }
    }
}

// convert a first letter of each word in a sentance to uppercase

function captilize(data) {
    const splittedString = data.split(" ");
    let string = []
    for (let i = 0; i < splittedString.length; i++) {
        string.push(splittedString[i].charAt(0).toUpperCase() + splittedString[1])
    }
    // console.log(splittedString)
    // console.log(splittedString.length)

    let newSTR = splittedString.join(",")
    // console.log(newSTR)
}
captilize("Hello world everyone");


// check if a string is palindrome.
function checkPalindrome(str) {
    const reverseString = str.split("").reverse().join("");
    return reverseString == str ? "Palindrome" : "Non Palindrome"
}
console.log(checkPalindrome("wow"))

// find the index of the first occurrence of a spicific element in an array

let arr = [0, 2, 3, 4, 5, 6, 7, 8, 9];

const findOccu = (arr, target) => {
    return arr.indexOf(target)
}
console.log(findOccu(arr, 3));

// calculate Average of given array of number;

const calculateAverage = (arr) => {
    const sumOfArray = arr.reduce((acc, curr)=> acc + curr, 0);
    return sumOfArray / arr.length;
}

console.log(calculateAverage(1,2,4,5))
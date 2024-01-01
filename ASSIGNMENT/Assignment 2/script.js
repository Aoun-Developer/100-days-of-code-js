// 1. Question: Reverse a string without using the built-in reverse() method.

const reverseSTR = (data) => {
    let element = "";
    for (let i = data.length - 1; i >= 0; i--) {
        element += data[i];
    }
    return element;
}

let result = reverseSTR("hello");
// document.write("1- Reverse String hello into: <br>"+result);

// 2. Question: Count the number of vowels in a given string.

const vowel = (data) => {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i of data.toLowerCase()) {
        if (vowels.includes(i)) {
            count++;
        }
    }
    return count;
}

let result2 = vowel("hello");
// document.write("2- Count the number of vowels in hello: " + result2);

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

const cap = (data) => {
    let arr = data.toLowerCase().split(" ");
    let element = "";
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    return arr.join(" ");
}

let result3 = cap("hello world!")
// document.write("Convert the first letter of each word in hello world into uppercase: <br>" + result3)

// 4. Question: Check if a string is a palindrome.

const palindrome = (data) => {
    let element = "";
    for (let i = data.length - 1; i >= 0; i--) {
        element += data[i];
    }
    if (data == element) {
        return true;
    }
    else {
        return false;
    }
}

// let result4 = palindrome("hello");
// document.write("4- Check if hello is a palindrome: <br>" + result4)

const polindrome = (data) => {
    if (reverseSTR(data) == data.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
// let result5 = polindrome("hello");
// document.write("5- Check if hello is a palindrome: <br>" + result5)


// 5. Question: Find the sum of all positive numbers in an array.

const sum_of_arr = (...item) => {
    let element = 0;
    for (const key of item) {
        element += key
    }
    return element
}

// document.write(sum_of_arr(10,10,5,20,5));


// 6. Question: Find the index of the first occurrence of a specific element in an array.

const find_func = (arr, ele) => {
    return arr.indexOf(ele);
}

const numb = [1, 3, 4, 6, 8, 9, 2, 2, 6, 4, 4, 1, 5, 9]
const element = 9;

// document.write(find_func(numb, element))

// 7. Question: Remove all duplicates from an array without built-in methods.

const remove_duplicates = (arr) => {
    const uniqueArr = [];

    for (const i in arr) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

const fruits = ["apple", "orange", "banana", "grapes", "apple"];
// document.write(remove_duplicates(fruits))

// 8. Question: Sort the array in ascending and descending without built-in methods.

const bubbleSortAscending = (arr) => {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr;
};

const bubbleSortDescending = (arr) => {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(bubbleSortAscending(arr) + "<br>")
// document.write(bubbleSortDescending(arr))

// 9. Question: Print all even numbers between 1 and 20 using a while loop.
let num = 2;

while (num <= 20) {
    // document.write(num + " ");
    num += 2;
}

// 10. Question: Calculate the factorial of a number using a do-while loop.

const factorial = (num) => {
    let result = 1;
    do {
        result *= num;
        num--;
    } while (num > 0);
    return result;
}

// document.write(factorial(5))

// 11. Question: Iterate through the properties of an object using a for-in loop.

const obj = {
    name: "John",
    age: 30
};

for (const key in obj) {
    // document.write(key + ": " + obj[key] + "<br>");
}

// 12. Question: Loop through an array using a for-of loop and double each element.

const arr2 = [1, 2, 3, 4, 5];

for (const element of arr2) {
    // document.write(element * 2 + " ");
}

// 13. Question: Check if a number is even or odd and return a corresponding message.
const checkEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "The number is even";
    } else {
        return "The number is odd";
    }
}

// document.write(checkEvenOrOdd(5)+ "<br>"); 
// document.write(checkEvenOrOdd(10)); 

// 14. Question: Find the maximum of three numbers using nested ternary operators.
const findMax = (num1, num2, num3) => {
    return num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
}

// Example usage:
const max = findMax(5, 10, 3);
// document.write(max); 

// 15. Question: Determine if a year is a leap year or not.
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// document.write(isLeapYear(2020) + " ");
// document.write(isLeapYear(2021) + " ");
// document.write(isLeapYear(2022) + " ");
// document.write(isLeapYear(2023) + " ");
// document.write(isLeapYear(2000) + " ");
// document.write(isLeapYear(1900) + " "); 
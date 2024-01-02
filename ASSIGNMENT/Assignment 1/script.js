// 1. Question: Reverse a string without using the built-in reverse() method.
const reverse_str = (data) => {
    let reverse_string = ""
    for (let i = data.length - 1; i >= 0; i--) {
        reverse_string += data[i]
    }
    return reverse_string;
}
// document.write(reverse_str("Hello"));

// 2. Question: Count the number of vowels in a given string.
const vowel_checker = (data) => {
    let x = "";
    let vowels = ["a", "e", "i", "o", "u"];
    for (const key of data) {
        if (vowels.includes(key)) {
            x += key;
        }
    }
    return x + " are vowels";
}
// document.write(vowel_checker("Hello"));

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

const upperCase = (data) => {
    return data.split(" ").map(key =>
        key.charAt(0).toUpperCase() + key.slice(1)
    ).join(" ");
}

// document.write(upperCase("hello world"));

// 4. Question: Check if a string is a palindrome.

const check_palindrome = (data) => {
    let reverse = reverse_str(data);
    let x = "";
    if (data === reverse) {
        x = `${data} is palindrome`;
    } else {
        x = `${data} is not palindrome`;
    }
    return x;
}
// document.write(check_palindrome("madam"));
// 5. Question: Find the sum of all positive numbers in an array.
const sum_of_array = (data) => {
    let sum = 0;
    for (const key of data) {
        if (key > 0) {
            sum += key;
        }
    }
    return sum;
}
let array = [0, 1, -2, -4, 1, -4, 3, 4, 3, -34, -52];
// document.write(sum_of_array(array));
// 6. Question: Find the index of the first occurrence of a specific element in an array.
const find_index = (arr, target) => {
    return arr.indexOf(target);
}
const names = ["z", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d"];
document.write(find_index(names, "a"));

// 7. Question: Remove all duplicates from an array without built-in methods.

// 8. Question: Sort the array in ascending and descending without built-in methods.

// 9. Question: Print all even numbers between 1 and 20 using a while loop.

// 10. Question: Calculate the factorial of a number using a do-while loop.

// 11. Question: Iterate through the properties of an object using a for-in loop.

// 12. Question: Loop through an array using a for-of loop and double each element.

// 13. Question: Check if a number is even or odd and return a corresponding message.

// 14. Question: Find the maximum of three numbers using nested ternary operators.

// 15. Question: Determine if a year is a leap year or not.
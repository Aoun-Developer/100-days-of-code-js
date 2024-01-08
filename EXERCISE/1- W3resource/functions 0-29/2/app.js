// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not? 
// use string methods and tarnary operators

const ispalindrome1 = (data) => {
    const reverse_str = data.toLowerCase().split("").reverse().join("");
    return (data.toLowerCase() === reverse_str) ? `${data} is palindrome` : `${data} is not palindrome`;
}

// console.log(ispalindrome1("Madam"));

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not? 
// use for loop and conditional statement;

function isPalindrome2(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true;
}
// console.log(isPalindrome2("madam"));

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not? 
// use method .every()
function isPalindrome5(str) {
    return str.toUpperCase().split("").every((value, index) => {
        return value === str.toUpperCase().charAt(str.length - 1 - index);
    })
};

// console.log(isPalindrome5("madam"));
// 1. Write a JavaScript function that reverses a number.

const reverse_number = (data) => {
    let Numb = data.toString();
    let store = "";
    for (let i = Numb.length; i > 0; i--) {
        store += i;
    }
    return store;
}
// console.log(reverse_number(12345));

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = (data) => {
    const reverse_str = data.split("").reverse().join("");
    return (data === reverse_str) ? `${data} is palindrome` : `${data} is not palindrome`;
}

// console.log(palindrome("madam"));

// 3. Write a JavaScript function that generates all combinations of a string.


// 1. Question: Reverse a string without using the built-in reverse() method.

const reverseSTR = (data) => {
    let element = "";
    for (let i = data.length - 1; i >= 0; i--) {
        element += data[i];
    }
    return element;
}

let result = reverseSTR("hello");
// document.write("1- Reverse String hello into: "+result);

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

let result4 = palindrome("hello");
document.write("4- Check if hello is a palindrome: " + result4)
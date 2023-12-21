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
document.write("2- Count the number of vowels in hello: " + result2);
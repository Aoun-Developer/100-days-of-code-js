// 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Number must be Integer');
    }
    console.log('Number is valid:', number);
}
try {
    // validateInteger(12);
    // validateInteger(2.12);
} catch (error) {
    console.log('Error:', error.message);
}

// 2. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.


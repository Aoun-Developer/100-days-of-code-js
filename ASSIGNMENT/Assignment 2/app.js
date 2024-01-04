// 1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }

const score = (data) => {
    return data >= 80 ? "Pass" : "fail";
}

// document.write(score(70));













// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?


const user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York',
        // state: 'NY'
    }
};

const state = user.address?.state;
// console.log(state);












// 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i in arr) {
    // document.write(i);
}
// document.write("<br>");

for (let i of arr) {
    // document.write(i);
}














// 4. Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

const avg_value = (data) => {
    let sum = 0;
    data.forEach(elm => sum += elm);
    return sum / data.length;
};
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(avg_value(values));













// 5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.

function outerFunction() {
    const outerVariable = 'Hello world';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();
// closure();













// 6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

const obj = {
    name: "Aoun",
    age: 24,
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    calculateAverage: () => {
        let sum = 0;
        obj.grades.forEach(elm => sum += elm);
        return sum / obj.grades.length;
    },
    calculateAverage_1: function () {
        let sum = 0;
        this.grades.forEach(elm => sum += elm);
        return sum / this.grades.length;
    }

}
// document.write(obj.calculateAverage());
// document.write("<br>");
// document.write(obj.calculateAverage_1());












// 7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

const obj_3 = {
    name: "Aoun",
    age: 24
}

const deep_copy = JSON.parse(JSON.stringify(obj_3));
const shallow_copy = { ...obj_3 };
const reference_copy = obj_3;

obj_3.name = "new name";

console.log(deep_copy, shallow_copy, reference_copy);












// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

const even_odd = (data) => {
    let x = [];
    data.forEach((elm) => {
        x.push(elm % 2 === 0 ? `${elm} is even` : `${elm} is odd`);
    });
    return x;
}
let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(even_odd(numb));













// 9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// The for loop is suitable when the number of iterations is known in advance.It consists of an initialization, condition, and iteration step 

// The while loop is used when the number of iterations is not known in advance, and the loop continues as long as a condition is true.

// The do...while loop is similar to the while loop, but the condition is checked at the end, ensuring that the loop code executes at least once.













// 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

const user_data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob', address: { city: 'New York' } },
    { id: 3, name: 'Charlie', address: { city: 'Los Angeles' } },
    { id: 4, name: 'Dave' },
];

const getUserMessages = (user_data) => {
    const messages = [];
    for (const key of user_data) {
        const cityName = key.address?.city;
        const message = cityName ? `${key.name} is from ${cityName}` : `${key.name} has no address`;
        messages.push(message + '<br>');
    }
    return messages;
}

// document.write(getUserMessages(user_data));










// 11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.
const obj_1 = {
    name: "Aoun",
    age: 24,
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    fees: 100,
    fees_status: "paid",
    course: "Mern stack",
    course_duration: 3
}
for (const key in obj_1) {
    // document.write(`Property is (${key}) : Value is (${obj_1[key]}) <br>`);
}













// 12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        // break;
        continue;
    }
    // document.write(i);
}














// 13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

const calculateTax = (income, tax) => income * tax / 100;

// document.write(calculateTax(80000, 3));












// 14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

const car_obj = {
    make: "Toyota",
    model: "Camry",
    startEngine: function () {
        return (`Starting the engine of ${this.make} ${this.model}`)
    }
}

// document.write(car_obj.startEngine());













// 15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

// regular functions have their own scope and dynamic this binding,
// while arrow functions inherit the scope and have lexical this binding. Consider the specific requirements of scope, this binding, and usage as methods when choosing between regular functions and arrow functions.
// 1. *Map Transformation:*
//    - Q: Given an array of integers, use the map method to square each element and return a new array with the squared values.

const sqr_arr = (data) => {
    return data.map((elm) => elm * elm)
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(sqr_arr(arr));
















// 2. *Filter and Map Combination:*
//    - Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the map method.

const filt_capita = (data) => {
    let low_5 = [];
    let high_cap = [];
    for (const key of data) {
        (key.length < 5) ? (low_5.push(key)) : (high_cap.push(key.charAt(0).toUpperCase() + key.slice(1)));
    }
    let x = low_5.concat(high_cap);
    return x;
}
let stri = ["hello", "world", "aoun", "abbas"];
// document.write(filt_capita(stri))
















// 3. *Sorting Objects:*
//    - Q: Given an array of objects with a 'price' property, use the sort method to arrange them in descending order based on their prices.

const products = [
    { name: "Product 1", price: 10 },
    { name: "Product 2", price: 5 },
    { name: "Product 3", price: 15 },
    { name: "Product 4", price: 20 },
    { name: "Product 5", price: 8 },
]

products.sort((a, b) => a.price - b.price);
// console.log(products);
















// 4. *Reduce for Aggregation:*
//    - Q: Use the reduce method to find the total sum of all even numbers in an array of integers.

const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even_numb = arr_1.reduce((sum, numb) => {
    if (numb % 2 === 0) {
        return sum + numb;
    } else {
        return sum;
    }
}, 0);

// console.log(even_numb);















// 5. *Find and Modify:*
//    - Q: Given an array of objects with 'id' properties, use the find method to locate an object with a specific 'id' and update its 'status' property to 'completed'.

const arrae = [
    { id: 1, status: "pending" },
    { id: 2, status: "pending" },
    { id: 3, status: "pending" },
    { id: 4, status: "pending" },
    { id: 5, status: "pending" },
]
arrae.find((data) => { (data.id === 3) ? (`${data.id}, ${data.status = "completed"}`) : (`${data.id}, ${data.status}`) })

// console.log(arrae);












// 6. *Chaining Methods:*
//    - Q: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

const average = numbers.filter(num => num > 0).reduce((sum, num, index, array) => {
    sum += num;
    if (index === array.length - 1) {
        return sum / array.length;
    } else {
        return sum;
    }
}, 0)
    .toFixed(2);

// console.log(average);














// 7. *Conditional Filtering:*
//    - Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the filter method.

const arraye = [
    { name: "Aoun", age: 18 },
    { name: "Abbas", age: 19 },
    { name: "Zaidi", age: 20 },
    { name: "Amrohi", age: 17 },
]

const age_filter = arraye.filter((data) => {
    return data.age >= 18
})
// console.log(age_filter);















// 8. *Advanced Sorting:*
//    - Q: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

const fruits = ["apple", "banana", "oranges", "cucumber", "carrot", "pinapple", "avacado"];

const sorted_fruits = fruits.sort((a, b) => {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
})
// console.log(sorted_fruits);
















// 9. *Nested Array Operations:*
//    - Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatten_array = arrays.flat();

const sum = flatten_array.reduce((x, y) => x + y, 0)

// document.write(sum);
















// 10. *Error Handling with Find:*
//     - Q: Modify the find method to handle the scenario where the desired element is not found, returning a custom default object instead.

const arrai = flatten_array;
const desired_element = 6;
const defaultObject = { message: "Element not found" };

const result = arrai.find((elm) => {
    elm === desired_element
}) ?? defaultObject;
// console.log(result);















// 11. *Map Method:*
//    - Q: How does the map method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

// Ans: In JavaScript, the map method is used to create a new array by applying a transformation function to each element of an existing array. It iterates through each element of the array, calls the provided function on each element, and returns a new array with the results.
const users = [
    { id: 1, name: "Aoun" },
    { id: 2, name: "Abbas" },
    { id: 3, name: "Zaidi" },
    { id: 4, name: "Amrohi" }
];

const names = users.map(elm => elm.name);
// console.log(names);















// 12. *Filter Method:*
//    - Q: Explain the purpose of the filter method. Provide an example where you use filter to extract elements from an array based on a specific condition.

// Ans: The filter method in JavaScript is used to create a new array containing elements from the original array that satisfy a specific condition. It iterates through each element of the array and applies a filtering function to determine whether an element should be included in the resulting array.

const arr_filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even_numbs = arr_filter.filter(elm => elm > 8);
// console.log(even_numbs);
















// 13. *Sort Method:*
//    - Q: Discuss the default behavior of the sort method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

// Ans: The sort method in JavaScript is used to sort the elements of an array in place and returns the sorted array. By default, the sort method converts elements to strings and performs a lexicographic (dictionary-style) comparison to determine the order. This default behavior works well for sorting arrays of strings or numbers in ascending order.

const obj_arra = [
    { name: "Aoun", age: 18 },
    { name: "Abbas", age: 19 },
    { name: "Zaidi", age: 20 },
    { name: "Amrohi", age: 17 },
    { name: "Ali", age: 16 },
    { name: "Asad", age: 15 },
    { name: "Abdul", age: 14 },
    { name: "Ahsan", age: 13 }
];

const obj_age = obj_arra.sort((a, b) => a.age - b.age);
// console.log(obj_age);

const obj_name = obj_arra.sort((a, b) => a.name.localeCompare(b.name));
// console.log(obj_name);
















// 14. *Reduce Method:*
//    - Q: Describe the purpose of the reduce method and provide an example where you use it to compute a single value from an array of numbers.

// Ans: The reduce method in JavaScript is used to iterate over the elements of an array and reduce them to a single value. It applies a callback function to each element, accumulating a result that is returned as the final output.

const numbring = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const summ = numbring.reduce((acc, curr) => acc + curr, 0)
// console.log(summ);
















// 15. *Find Method:*
//    - Q: How does the find method differ from filter? Give an example of a scenario where using find is more appropriate than filter.

const arr_find = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumb = arr_find.find(elm => elm % 2 === 0);
// console.log(evenNumb);

const first_even_numb = arr_find.filter(elm => elm % 2 === 0);
// console.log(first_even_numb);


// Ans: The find and filter methods in JavaScript are both used to iterate over an array and return a subset of elements based on a condition. However, they differ in their behavior and the output they produce.
// The filter method returns a new array containing all the elements that satisfy the specified condition.
// On the other hand, the find method returns the first element that satisfies the specified condition or undefined if no element matches the condition.











// 16. *Combining Methods:*
//    - Q: Create a chain of array methods (map, filter, reduce, etc.) to transform an array of strings into a single concatenated string with a specific condition.
const faruits = ["apple", "banana", "cherry", "date", "elderberry"];

const cuncatnatad = faruits.map(elm => elm.toUpperCase()).filter(elm => elm.length > 5).reduce((accu, curr) => accu + ', ' + curr);

// console.log(cuncatnatad);
















// 17. *Callback Functions:*
//    - Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the map method.
const numers = [1, 2, 3, 4, 5];

const doubledNumbers = numers.map(num => num * 2);
// console.log(doubledNumbers);


// Ans: In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked by that function at a later point in time.














// 18. *Error Handling:*
//    - Q: How would you handle potential errors when using array methods like find or reduce? Provide an example of error handling in such a scenario.

const numbars = [1, 2, 3, 4, 5];

try {
    const sum = numbars.reduce((acc, curr) => {
        if (curr === 3) {
            throw new Error('Encountered number 3,skipping calculation')
        }
        return acc + curr;
    });
    console.log(sum);
} catch (error) {
    // console.error(error.message);
}















// 19. *Immutable Operations:*
//    - Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like map or filter.

// Ans: Immutability refers to the concept of not modifying data directly, but instead creating new copies or instances with the desired changes.

const numbers1 = [1, 2, 3, 4, 5];

const doubled_Numbers = numbers1.map(number => number * 2);
// console.log(doubledNumbers);

const evenNumbers = numbers1.filter(number => number % 2 === 0);
// console.log(evenNumbers);













// 20. *Performance Considerations:*
//     - Q: Compare the performance implications of using map versus forEach. In what scenarios would you prefer one over the other, and why?

function generateValues() {
    const values = [];
    for (let i = 0; i <= 10; i++) {
        values.push(i);
    }
    return values;
}

const result1 = generateValues();
// console.log(result1);


const numbers2 = result1;

const doubledNumbers2 = numbers2.map(number => {
    return number * 1 + "<br>"
});

// document.write(doubledNumbers2);

numbers2.forEach(number => {
    return (number);
});

// document.write(numbers2 + "<br>");












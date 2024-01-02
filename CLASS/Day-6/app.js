// Filter Method in Array
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const filterScore = arr.filter((data) => {
    return data > 50
})

document.write(filterScore);
document.write("<br>");

// Filter Method in Object
let user = [
    { name: "Aoun", premium: true },
    { name: "Abbas", premium: false },
    { name: "Zaidi", premium: true },
    { name: "Amrohi", premium: false }
]

const filter_preium = user.filter((data) => {
    return data.premium
})

// console.log(filter_preium);

document.write("<br>");
// Map in array
let price = arr;

const salesPrice = price.map((data) => {
    return data + 1;
})

document.write(salesPrice);

document.write("<br>");
// Map in object
let student = [
    { name: "Aoun", fees: 30 },
    { name: "Abbas", fees: 20 },
    { name: "Zaidi", fees: 40 },
    { name: "Amrohi", fees: 50 }
];
const modified = student.map((data) => {
    if (data.fees > 30) {
        return data.name;
    } else {
        return {
            name: data.name,
            fees: data.fees
        }
    }
});

// console.log(modified);

// Reduce Method
let score = arr;

const result = score.reduce((acc, curr) => {
    return acc + curr;
}, 0);

// console.log(result);

document.write("<br>");
// Find Method

const price_1 = [5, 3, 6, 10, 73, 9, 1, 4, 61, 64, 91, 82, 2, 7, 92];

const findPrice = price_1.find((data) => {
    return data > 40;
})

document.write(findPrice);

document.write("<br>");
// Sort Method

price_1.sort((a, b) => a - b);

document.write(price_1)

document.write("<br>");
// reverse Method

price_1.reverse();

document.write(price_1);

const user_1 = [
    { name: "Basit", fees: 30 },
    { name: "Ali", fees: 40 },
    { name: "Basit", fees: 5 },
    { name: "Aqib", fees: 20 },
    { name: "Basit", fees: 10 }
];
const a = user_1.sort((a, b) => {
    if (a.fees > b.fees) {
        return 1;
    } else if (b.fees > a.fees) {
        return - 1;
    } else {
        return 0;
    }
});
console.log(a);
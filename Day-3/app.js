// For Loop
const cars = ["Mehran","civic","audi","bmw"];

for (let i = 0; i < cars.length; i++) {
    const element = cars[i] + "<br>";
    document.write(element)
}

const cars2 = ["Mehran","civic","audi","bmw"];

for (let i = 0; i < cars2.length;) {
    const element = cars2[i] + "<br>";
    i++;
    document.write(element)
}

// while loop
let i = 0;
while (i < 0) {
    // console.log(i);
    i++;
}

// Do while loop
let index = 0;
do {
    // console.log(index);
    index++;
} while (index < 0)
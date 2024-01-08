// 1. Write a JavaScript program that displays the largest string among two strings.
// use if else statement
const check_largest_string_1 = (a, b) => {
    if (a.length > b.length) {
        return (a + " is larger than " + b)
    }
    else if (b.length > a.length) {
        return (b + " is larger than " + a)
    }
    else {
        return ("they are equal")
    }
}
// console.log(check_largest_string_1("Aoun", "Abbas"));













// 1. Write a JavaScript program that displays the largest string among two strings.
// using tarnary operator
const check_largest_string_2 = (a, b) => {
    return (a.length > b.length) ? (a + " is larger than " + b) : (b + " is larger than " + a)
}
// console.log(check_largest_string_2("Aoun", "Abbas"));











// 1. Write a JavaScript program that displays the largest integer among two integers.
// use Math opbject
const check_largest_string_3 = (a, b) => {
    return (Math.max(a, b) + " is larger than " + Math.min(a, b));
}
// console.log(check_largest_string_3(123, 456));















// 1. Write a JavaScript program that displays the largest integer among two integers.
// use tarnary operator
const check_largest_string_4 = (a, b) => {
    return (a > b) ? (a + " is larger than " + b) : (b + " is larger than " + a)
}
// console.log(check_largest_string_4(123, 456));














// 1. Write a JavaScript program that displays the largest integer among two integers.
// use if else statement

const check_largest_string_5 = (a, b) => {
    if (a > b) {
        return (a + " is larger than " + b)
    }
    else if (b > a) {
        return (b + " is larger than " + a)
    }
    else {
        return ("they are equal")
    }
}
// console.log(check_largest_string_5(123, 456));












// 1. Write a JavaScript program that displays the largest integer or number among two given integers or number.


const check_largest_string_6 = (a, b) => {
    if (typeof a == 'string' || typeof b == 'string') {
        if (a.length > b.length) {
            return (a + " is larger than " + b)
        }
        else if (b.length > a.length) {
            return (b + " is larger than " + a)
        }
        else {
            return ("they are equal")
        }
    } else if (typeof a == 'number' || typeof b == 'number') {
        if (a > b) {
            return (a + " is larger than " + b)
        }
        else if (b > a) {
            return (b + " is larger than " + a)
        }
        else {
            return ("they are equal")
        }

    }
    else {
        return ("invalid input")
    }

}
// console.log(check_largest_string_6(123, 456));
// console.log(check_largest_string_6("Hello", "worlds"));














// 1. Write a JavaScript program that displays the largest integer or number among given integers or number.
// length of arguments are not known

const check_largest_string_7 = (...args) => {
    if (typeof args[0] == 'string') {
        return largestString = args.reduce((prev, curr) => {
            return (curr.length > prev.length ? curr : prev);
        });
    }
    else if (typeof args[0] == 'number') {
        return (Math.max(...args) + " is larger than " + Math.min(...args));
    }
    else {
        return ("invalid input")
    }
}
// console.log(check_largest_string_7(123, 456, 789, 123, 456, 789, 123, 456, 789));
// console.log(check_largest_string_7("Hello", "worlds", "how", "are", "you", "today"));
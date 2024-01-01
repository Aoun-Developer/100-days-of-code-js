let arr_1 = ["aoun", "abbas", "zaidi", "amrohi", 24];
let arr_2 = ["tehreem", "zaidi", 25];

document.write(arr_1.length + "<br>");
document.getElementsByClassName("box")[0].innerHTML = arr_1.toString();

document.write(arr_1.at(0) + "<br>");
document.write(arr_1[0] + "<br>");

document.getElementsByClassName("box")[0].innerHTML = arr_1.join(" | ");

let arr_pop = arr_1.pop();
document.write(arr_pop + "<br>");

arr_1.push("pushing");
document.write(arr_1 + "<br>");

arr_1.shift();
document.write(arr_1 + "<br>");

arr_1.unshift("unshifting");
document.write(arr_1 + "<br>");

arr_1[1] = "indexes"
document.write(arr_1 + "<br>");

arr_1[arr_1.length] = "array.length"
document.write(arr_1 + "<br>");

delete arr_1[2];
document.write(arr_1 + "<br>");

let arr_3 = arr_1.concat(arr_2);
document.write(arr_3 + "<br>");

let for_flating = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = for_flating.flat();

document.write(flat + "<br>");

arr_1.splice(2, 1, "splice");
document.write(arr_1 + "<br>");

arr_1.splice(0,1);
document.write(arr_1 + "<br>");

let arr_4 = arr_1.toSpliced(0,1);
document.write(arr_1 + "<br>");
document.write(arr_4 + "<br>");

document.write(arr_2 + "<br>");
let arr_5 = arr_2.slice(1,3);
document.write(arr_5 + "<br>");
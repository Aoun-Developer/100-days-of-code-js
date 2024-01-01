let vari = "Aoun ABbas ZaIDI Aoun";

// document.write("String Length is: " + vari.length + "<br>");
document.write(vari.slice(0, 4) + "<br>");

document.write(vari.substring(0, 4) + "<br>");

document.write(vari.substr(0, 1) + "<br>");

let new_vari_1 = vari.replace(/Aoun/i, "A.");

document.write(new_vari_1 + "<br>")

let new_vari_2 = vari.replace(/Aoun/g, "A.");

document.write(new_vari_2 + "<br>");

let new_vari_3 = vari.replaceAll("Aoun", "B.");

document.write(new_vari_3 + "<br>");

let new_vari_4 = vari.replaceAll(/Aoun/g, "V.");

document.write(new_vari_4 + "<br>");

document.write(vari.toUpperCase() + "<br>");
document.write(vari.toLowerCase() + "<br>");

let txt_1 = "hello";
let txt_2 = "world";

document.write(txt_1.concat(" ", txt_2) + "<br>");

let txt_3 = "    hello world       ";
document.write(txt_3.trim() + " " + txt_3.trim().length + "<br>");
document.write(txt_3.trimStart() + " " + txt_3.trimStart().length + "<br>");
document.write(txt_3.trimEnd() + " " + txt_3.trimEnd().length + "<br>");

let txt_4 = "54";
let padded_start = txt_4.padStart(4, "0");
let padded_end = txt_4.padEnd(4, "0");

document.write(padded_start + "<br>");
document.write(padded_end + "<br>");

document.write(vari.charAt(0) + "<br>");
document.write(vari.charCodeAt(0) + "<br>");
document.write(vari[0] + "<br>");

document.write(vari.split(" ") + "<br>");

document.write(vari.indexOf("A") + "<br>")

document.write(vari.lastIndexOf("A") + "<br>")
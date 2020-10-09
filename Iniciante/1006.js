var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const A = parseFloat(lines.shift()) * 2;
const B = parseFloat(lines.shift()) * 3;
const C = parseFloat(lines.shift()) * 5;
console.log("MEDIA = " + ((A + B + C) / 10).toFixed(1));

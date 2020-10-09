var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const A = parseFloat(lines.shift()) * 3.5;
const B = parseFloat(lines.shift()) * 7.5;
console.log("MEDIA = " + ((A + B) / 11).toFixed(5));

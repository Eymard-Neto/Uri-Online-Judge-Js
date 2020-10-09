var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
console.log("PROD = " + A * B);

const fibonacci = function(f) {
    let coef = 1.6180339887;
    let result = 0;

    if (f == 0) return f = 0
    if (f == 1) return f = 1;
    if (f < 0) return "OOPS";

    if (f > 1) return result = Math.round(coef ** f / Math.sqrt(5));
}
// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(6));

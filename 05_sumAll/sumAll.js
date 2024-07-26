const sumAll = function(a, b) {
    let result = 0;
if (a < 0 || b < 0 || 
    a % 1 !== 0 || typeof b !== 'number') {
    return "ERROR";
}

else if (a >= b) {

while (a >= b) {
    result = result + a;
    a--;
}
} else {  

while (a <= b) {
   result = result + a;
    a++;
}
}
    return result;
}

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;

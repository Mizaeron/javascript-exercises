const add = function(...array) {
	 return array.reduce((total, item) => total + item, 0);
   
};


const subtract = function(...arg) {
	return arg.reduce((total, item) => total - item);
};




const sum = function(array) {
	return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item);
};

const power = function(a, b) {
	return Math.pow(a, b);
};



const factorial = function(n) {
  let result = 1;

    while (n > 1) {
      result = result * n;
      n--;
    }

    return result;
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};


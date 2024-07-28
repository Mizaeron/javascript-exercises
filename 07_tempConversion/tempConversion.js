const convertToCelsius = function(farenheit) {
  let F;
  F = (farenheit - 32) * 5/9;
  let rounded = Math.round(F * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(celcius) {
  let C;
  C = (celcius * 9/5 + 32);
  let rounded = Math.round(C * 10) / 10;

  return rounded;
};


console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


const repeatString = function(string, times) {   
    let result = "";
  for (let i = 0; i < times; i++) {
   result = result + string;
  }

  return result;
    };







console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;

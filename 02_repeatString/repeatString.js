const repeatString = function(string, times) {   
    let result = "";
if (times >= 0) {
    for (let i = 0; i < times; i++) {
        result = result + string;
    }
  return result;
  } else {
    return "ERROR";
  }

  
};







console.log(repeatString("goodbye", -1));
// Do not edit below this line
module.exports = repeatString;

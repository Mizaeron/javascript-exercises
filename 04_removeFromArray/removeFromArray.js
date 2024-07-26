const removeFromArray = function(array, ...removeValues) {
 
    return array.filter(item => !removeValues.includes(item));
}




console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;

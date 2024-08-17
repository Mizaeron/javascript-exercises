const palindromes = function (words) {
    let wordsComp = words.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reversed = wordsComp.split("").reverse().join("");

    if (wordsComp == reversed) {
        return true;
} else {
    return false;
}
}

console.log(palindromes("A car a man a maraca"));
// Do not edit below this line
module.exports = palindromes;



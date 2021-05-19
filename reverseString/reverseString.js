const reverseString = function(words) {
    let splitString  = words.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;

}

module.exports = reverseString

const repeatString = function(inputString, numberOfRepetitions) {
    let returnString = "";

    if (numberOfRepetitions < 0) {
        return "ERROR";
    }

    for (let i = 1; i <= numberOfRepetitions; i++) {
        returnString += inputString;
    }
    return returnString;
}

module.exports = repeatString

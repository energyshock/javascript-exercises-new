const sumAll = function(a, b) {
    let sum = 0;
    for (let index = a; index <= b; index++) {
          sum += index;
    }
    return sum;
}

module.exports = sumAll

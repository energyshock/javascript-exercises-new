const sumAll = function(a, b) {
    let sum = 0;

    if (isNaN(a) || isNaN(b) || typeof a == 'string' || typeof b == 'string') {
        return 'ERROR';
    }
    
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
      }
      return sum;
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            sum += i;
      }
      return sum;
    }

    
}

module.exports = sumAll

var utility = {
    isEven: function(n) {
        return n % 2 == 0;
     },
    isOdd: function(n) {
        return Math.abs(n % 2) == 1;
     }
}

module.exports = utility
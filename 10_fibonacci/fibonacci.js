const fibonacci = function(num) {
    num = parseInt(num)
    let sequence = [0, 1];
    if (num < 0) {
        return 'OOPS'
    } else if (num === 0) {
        return 0
    } else {
        for (let i = 2; i <= num; i++) {
            sequence[i] = sequence[i - 2] + sequence[i - 1]
        }
    return sequence[num]
    }
};

console.log(fibonacci(8))

// Do not edit below this line
module.exports = fibonacci;

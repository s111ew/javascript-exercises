const add = function(a, b) {
	 return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length < 1) {
    return 0
  } else{
	return arr.reduce((total, current) => total + current);
  }
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let factorialArray = []
	if (num === 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    factorialArray[i] = i;
  }
  return factorialArray.reduce((total, current) => total * current)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(a, b) {
	const addResult = a + b;
  return addResult;
};

const subtract = function(a, b) {
	const subtractResult = a - b;
  return subtractResult;
};

const sum = function(arr) {
	const sumResult = arr.reduce((total, num) => total + num, 0);
  return sumResult;
};

const multiply = function(...nums) {
  const multiplyResult = nums.reduce((total, num) => total * num, 1);
  return multiplyResult;
};

const power = function(a, b) {
	const powerResult = a ** b;
  return powerResult;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }else {
    return factorial(n-1) * n;
  }
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

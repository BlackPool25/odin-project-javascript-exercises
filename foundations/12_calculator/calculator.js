const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;

  for(let i=0;i <nums.length; i++){
    sum = sum + nums[i];
  }

  return sum;
};

const multiply = function(nums) {
  let prod = 1;

  for(let i=0; i<nums.length; i++){
    prod = prod * nums[i];
  }

  return prod;
};

const power = function(base, exp) {
  return Math.pow(base, exp);
};

const factorial = function(num) {
	let fact = 1;

  for(let i=2; i<=num;i++){
    fact *= i;
  }

  return fact;
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

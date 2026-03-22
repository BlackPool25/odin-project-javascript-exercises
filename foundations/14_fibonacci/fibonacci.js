const fibonacci = function(num, memo = new Map()) {
    if(!Number.isInteger(num) || num < 0) return "OOPS";

    if(memo.has(num)){
        console.log(`Saved time on ${num}`);
        return memo.get(num);
    }

    if(num <= 1) return num;
    
    memo.set(num, fibonacci(num-1, memo) + fibonacci(num-2, memo));

    return memo.get(num);
};

console.log(fibonacci(55));

// Do not edit below this line
module.exports = fibonacci;

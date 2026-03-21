const sumAll = function(num1, num2) {
    if( !Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0 ){
        return 'ERROR';
    }  

    if(num1 > num2) return sumAll(num2, num1);

    const sum2 = (num2 * (num2+1) / 2);
    const sum1 = ((num1-1) * (num1) / 2);

    return sum2-sum1;
};

// Do not edit below this line
module.exports = sumAll;

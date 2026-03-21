const removeFromArray = function(sourceArray, ...elementsToRemove) {
    if(arguments.length == 0) return 'ERROR: There needs to be at least one argument';

    return sourceArray.filter(item => !elementsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

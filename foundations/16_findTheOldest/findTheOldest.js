const { getVersion } = require("jest");

const findTheOldest = function(arrObj) {
    if(arrObj.length === 0) return undefined;

    let oldest = [arrObj[0], getAge(arrObj[0])];

    for(let i=1; i<arrObj.length; i++){

        let curAge = getAge(arrObj[i]);

        if(curAge > oldest[1]){
            oldest[0] = arrObj[i];
            oldest[1] =  curAge;
        }
    }

    return oldest[0];
};

const getAge = (personObj) => {
    return (Object.hasOwn(personObj, 'yearOfDeath') ? personObj.yearOfDeath : new Date().getFullYear()) - personObj.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;

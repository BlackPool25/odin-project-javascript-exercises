const convertToCelsius = function(degreeF) {

  return +((degreeF - 32) / 1.8).toFixed(1);
};

const convertToFahrenheit = function(degreeC) {

  return +((degreeC * 1.8) + 32).toFixed(1);

};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

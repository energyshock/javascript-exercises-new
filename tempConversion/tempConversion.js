const ftoc = function(value) {
  const fahrenheitToCelsius = parseFloat(((value - 32) * (5/9)).toFixed(1));
  return fahrenheitToCelsius;
}

const ctof = function(value) {
  const celsiusToFahrenheit = parseFloat(((value * (9/5) + 32)).toFixed(1));
  return celsiusToFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}

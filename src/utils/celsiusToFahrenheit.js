function celsiusToFahrenheit(celsius) {
  // Formula: Fahrenheit = (Celsius * 9/5) + 32
  let value = (celsius * 9) / 5 + 32;
  return Math.round(value);
}

export default celsiusToFahrenheit;

//! Start by creating the variables for the data recorded
const temperature_in_celsius = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29];
const temperature_in_fahrenheit = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const celsiusToFahrenheit = temperature_in_celsius.map(temp => ((temp * 9 / 5) + 32));

const fahrenheitToCelsius = temperature_in_fahrenheit.map(temp => (temp - 32) * 5 / 9);

//! Start the calculation of the total temperatures


//* Then apply the conversion to calculate the total in the other unit of measurement

//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_fahrenheit = temperature_in_celsius.concat(celsiusToFahrenheit).reduce((sum, temp) => sum + temp, 0);

const tot_temperature_in_celsius = temperature_in_fahrenheit.concat(fahrenheitToCelsius).reduce((sum, temp) => sum + temp, 0);

//! Start the calculation of the average temperatures


//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//! Console.log the results for your own inspection if you'd like
console.log('Total temperature in Fahrenheit:', tot_temperature_in_fahrenheit);
console.log('Total temperature in Celsius:', tot_temperature_in_celsius);
console.log('Average temperature in Fahrenheit:', avg_temperature_in_fahrenheit);
console.log('Average temperature in Celsius:', avg_temperature_in_celsius);

//* This way you can export them to the test file, this is essential for the tests to work
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
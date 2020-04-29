/* 
function calcCelsius() {
  let celsius = prompt("What's your Celsius tempreture ?");
  console.log((celsius * 9) / 5 + 32);
}

calcCelsius();
*/

/*

function calcFahrenheit() {
  let fahrenheit = prompt("What's Fahrenheit tempreture ?");
  console.log(((fahrenheit - 32) * 5) / 9);
}

calcFahrenheit();

*/

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("Common Year");
  }
}

isLeapYear(1945);

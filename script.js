// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variables to store in global memory for use in functions
var enterLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

//declaring variable arrays of available characters that will produce within password
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var special = ["!", "&", "#", "+", "/", "-", "$", "@", "*", "%"];

//activates the various prompts after 'generate password' button is pressed
function generatePassword() {
  var enterLength = prompt("Please choose from 8 to 128 characters.");
  var confirmLower = confirm("Would you like lower-case characters?");
  var confirmUpper = confirm("would you like upper-case characters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include special characters?");
}

if (enterLength >= 8 || enterLength <= 128) {
}

//variables to store password and specified characters
var password = [];
var generateRandomFunctions = [];

//For loop here

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

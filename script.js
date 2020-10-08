// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variables to store in global memory for use in functions
var enterLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

//declaring variable arrays of available characters that will produce within password

var chosenCharacters = [];
var password = "";

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

var alphabetUpper = ["A", "B"];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var special = ["!", "&", "#", "+", "/", "-", "$", "@", "*", "%"];

//activates the various prompts after 'generate password' button is pressed
function generatePassword() {
  var enterLength = prompt("Please choose from 8 to 128 characters.");
  var confirmLower = confirm("Would you like lower-case characters?");
  var confirmUpper = confirm("would you like upper-case characters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include special characters?");
  console.log(chosenCharacters);

  //Because using a prompt, we generate a string, so parseInt will change this to numeric
  if (parseInt(enterLength) >= 8 && parseInt(enterLength) <= 128) {
    //This will take alphabet and chosenCharacters together and will return one array
    if (confirmLower) {
      chosenCharacters = chosenCharacters.concat(alphabet);
    }

    if (confirmUpper) {
      chosenCharacters = chosenCharacters.concat(alphabetUpper);
    }

    if (confirmNumber) {
      chosenCharacters = chosenCharacters.concat(number);
    }

    if (confirmSpecial) {
      chosenCharacters = chosenCharacters.concat(special);
    }

    console.log(chosenCharacters);

    //For Loop here
    for (var i = 0; i < parseInt(enterLength); i++) {
      //creates the length of the desired password that the user entered
      console.log(i);
      var randomIndex = Math.floor(Math.random() * chosenCharacters.length);
      console.log(randomIndex);
      var randomChar = chosenCharacters[randomIndex];
      console.log(randomChar);
      //concatenation of two variables together and saving back to password
      password = password + randomChar;
    }
    return password;
  } else {
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

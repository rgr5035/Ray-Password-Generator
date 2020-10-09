// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variables to store in global memory for use in functions
var enterLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

//NEED NOTES HERE!!!!
var chosenCharacters = [];
var password = "";

//declares variable array of lowercase characters to store in global memory to be used in password generation
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

//delcares variable array of uppercase characters to store in global memory to be used in password generation
var alphabetUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//delcares variable array of numeric characters to store in global memory to be used in password generation
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//delcares variable array of special characters to store in global memory to be used in password generation
var special = ["!", "&", "#", "+", "/", "-", "$", "@", "*", "%"];

//activates code blocks for the various prompts and confirms after 'generate password' button is pressed
function generatePassword() {
  var enterLength = prompt("Please choose from 8 to 128 characters.");
  var confirmLower = confirm(
    "Would you like to include lower-case characters?"
  );
  var confirmUpper = confirm(
    "would you like to include upper-case characters?"
  );
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include special characters?");
  console.log(chosenCharacters);

  //Because using a prompt, we generate a string, so parseInt will change this to numeric
  if (parseInt(enterLength) >= 8 && parseInt(enterLength) <= 128) {
    //The concat method will take desired variables (if truthy) and chosenCharacters together and will return one array
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

      //declares the random characters that the user chose to add to the random desired length of the password
      console.log(randomIndex);
      var randomChar = chosenCharacters[randomIndex];
      console.log(randomChar);
      //concatenation of two variables together and saving back to password
      password = password + randomChar;
    }
    return password;
    //if the entered numeric value of the password is falsy, then the following alert will show, taking the user back to the start to choose the correct value
  } else {
    alert("Please choose a correct number value!");
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

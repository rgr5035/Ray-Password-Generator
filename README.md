# Ray-Password-Generator

Assignment Overview

    For this homework, we were to generate a randomized password based on the criteria that the user chose, by means of various prompts and confirm messages. These prompts and confirms are to activate once the 'generate password' button is pressed on the main HTML page. Once each prompt and confirm message is answered, a randomized password based on those questions will automatically generate within the text box on the page.

Prompts/Confirms

    The user is prompted to input the desired length of the password, between 8 - 128 characters. The user is then asked if they would like to include lowercase, uppercase, numbers and special characters. Once these are all answered, the desired combination will generate within the text box. These are determined by various if/else statements within the JS file, along with a for loop to mathematically generate the desired length, and then concatenates the various characters that were determined as either truthy or falsy statements in the confirm messages. At the end of the function, if the original desired length is entered incorrectly, then an alert will tell the user to choose the correct numeric value (8 -128 characters), and will take the user back to the beginning of the prompts and confirms.

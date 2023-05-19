// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":"];
  
  var input = prompt("Choose a length of at least 8 characters and no more than 128 characters:")
  var inputnumbers = prompt("Do you want to use numbers? (y/n):");
  var inputlowerCase = prompt("Do you want to use lowercase letters? (y/n):");
  var inputupperCase = prompt("Do you want to use uppercase letters? (y/n):");
  var inputspecialCharacters = prompt("Do you want to use special characters? (y/n):");

  var characters = [];

  if (input >= 8 && input <= 128) {
    if (inputnumbers === "y") {
    characters.push(...numbers);
    }
    if (inputlowerCase === "y") {
    characters.push(...lowerCase);
    }
    if (inputupperCase === "y") {
    characters.push(...upperCase);
    }
    if (inputspecialCharacters === "y") {
    characters.push(...specialCharacters);
    }
  } else {
  alert("The length of the password must be between 8 and 128 characters.");
  return;
  }
  var password = "";
  for (var i = 0; i < input; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
  }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
var password = generatePassword();

var passwordText = document.querySelector("#password");
passwordText.value = password;
});
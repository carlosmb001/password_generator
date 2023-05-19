// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  
  var input = prompt("Choose a length of at least 8 characters and no more than 128 characters:")
  var numbers = prompt("Do you want to use numbers? (y/n):");
  var lowerCase = prompt("Do you want to use lowercase letters? (y/n):");
  var upperCase = prompt("Do you want to use uppercase letters? (y/n):");
  var specialCharacters = prompt("Do you want to use special characters? (y/n):");

  const characters = [];

  if (input >= 8 && input <= 128) {
    if (numbers === "y") {
    characters.push("1234567890");
    }
    if (lowerCase === "y") {
    characters.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (upperCase === "y") {
    characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (specialCharacters === "y") {
    characters.push("!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    }
  } else {
  alert("The length of the password must be between 8 and 128 characters.");
  return;
}

}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);
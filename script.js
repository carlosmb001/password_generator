// Assignment Code
var generateBtn = document.querySelector("#generate");
window.input;

// Write password to the #password input
//total of 88 characters
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"] 
const upperCase = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J","K", "L", "M", "N","O", "P", "Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"]
const specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")","-", "_", "+", "=", "|", "{", "}", "~",":", ";","<", ">", ",", ".", "/", "?"];


function askUser(){
input = prompt("Choose a length of at least 8 characters and no more than 128 characters:")
return input;
}

console.log(characters.length);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
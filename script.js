// Assignment Code
var generateBtn = document.querySelector("#generate");
window.input;

// Write password to the #password input

const number = ("1234567890");    
const lowerCase = ("abcdefghijklmnopqrstuvwxyz");
const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const specialCharacter = ["!@#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];


function askUser(){
input = prompt("Choose a length of at least 8 characters and no more than 128 characters:")
number = prompt("Do you want to use numbers? (y/n):");
lowerCase = prompt("Do you want to use lowercase letters? (y/n):");
upperCase = prompt("Do you want to use uppercase letters? (y/n):");
}

console.log(characters.length);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
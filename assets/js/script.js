// Assignment code here
var generateBtn = document.querySelector("#generate");
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt Variables
var passwordLgth;
var passwordLgthNum = 0;
var numberChar = true;
var specialChar = true;
var uppercaseChar = true;
var lowercaseChar = true;

// Character Pool
var uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercasePool = "abcdefghijklmnopqrstuvwxyz".split("");
var specialPool = "!@#$%^&*()_+".split("");
var numberPool = "1234567890".split("");
var finalPool;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

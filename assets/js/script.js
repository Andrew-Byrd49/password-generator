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

// User Character preference questionair
function generatePassword() {
  finalPool = [];
  password = "";
  passwordLgth = prompt("Set a length for your password. Your password can be anywhere between 8 and 128 characters long");
  passwordLgthNum = parseInt(passwordLgth);
  checkPasswordLgth();
  pullCharacters();
  randomizeChar();
}

// Checking if password meets length conditions
function checkPasswordLgth() {
  if (passwordLgthNum >= 8 && passwordLgthNum <= 128) {
    return passwordLgth();

  } else if (passwordLgthNum < 8 && passwordLgthNum > 128) {
    alert("Please input a value between 8 and 128!");
    return passwordLgth();
  }

  else {
    alert("Please input a NUMERIC value between 8 and 128!");
    return passwordLgth();
  }
}

// Set to grab from the pool of characters and return to user
function pullCharacters() {

  specialChar = confirm("Would you like to include special characters?");
  if (specialChar) {
    finalPool = finalPool.concat(specialPool);
  }

  numberChar = confirm("Would you like to include numeric characters?");
  if (numberChar) {
    finalPool = finalPool.concat(numberPool);
  }

  uppercaseChar = confirm("Would you like to include uppercase letters?");
  if (uppercaseChar) {
    finalPool = finalPool.concat(uppercasePool);
  }

  lowercaseChar = confirm("Would you like to include lowercase letters?");
  if (lowercaseChar) {
    finalPool = finalPool.concat(lowercasePool);
  }

  if (!specialChar && !numberChar && !uppercaseChar && !lowercaseChar) {
    alert("You must choose at least one criteria for your password!");
    pullCharacters();
  }
}

function randomizeChar() {

  for (i = 0; i < passwordLgthNum; i++) {
    var random = finalPool[Math.floor(math.random() * finalPool.length)];
    password = password.concat(random);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

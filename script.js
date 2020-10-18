// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

  var passwordLengthInput = prompt("How many characters would you like your password to have?");
  if ((passwordLengthInput < 8) || (passwordLengthInput > 128)) {
    alert("Whoa there! Please enter a number between 8 and 128.");
    return;
  }

  var lowercaseCharactersInput = confirm("Would you like lower case characters in your password?");
  if (lowercaseCharactersInput) {
    password += lowercaseCharacters;
  }

  var uppercaseCharactersInput = confirm("Would you like upper case characters in your password?");
  if (uppercaseCharactersInput) {
    password += uppercaseCharacters;
  }

  var numInput = confirm("Would you like numbers in your password?");
  if (numInput) {
    password += num;
  }

  var specialInput = confirm("Would you like special characters in your password?");
  if (specialInput) {
    password += special;
  }

  if (passwordCharset === "") {
    alert("Please select at least one type of character you would like to include!");
  }

  if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    for (var i = 0; i < passwordLengthInput; i++) {
      password += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    localStorage.setItem("password", password);
    let passwordStr = localStorage.getItem("password");
    passwordTextarea.textContent = passwordStr;
  };
};

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



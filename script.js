// Assignment Code
var generateBtn = document.querySelector("#generate");


var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
console.log(password);

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







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  // let passwordTextarea = document.querySelector("#password");
  // let generateButton = document.querySelector("#generate");
  // let copyButton = document.querySelector("#copy");

  // const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  // const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
  // const numericalCharacters = "0123456789";
  // const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // generateButton.addEventListener("click", generatePassword);
  // copyButton.addEventListener("click", copyPassword);

  // function generatePassword() {

  //     let newPassword = "";
  //     let passwordCharset = "";

  //     let passwordLengthInput = prompt("How many characters would you like your password to be?");

  //     if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
  //         alert("Please enter a number between 8 and 128!");
  //         return;
  //     } 

  //     let lowercaseCharactersInput = confirm("Would you like lowercase letters to be included in your password?");

  //     if (lowercaseCharactersInput) {
  //         passwordCharset += lowercaseCharacters;
  //     }

  //     let uppercaseCharactersInput = confirm("Would you like uppercase letters to be included in your password?");

  //     if (uppercaseCharactersInput) {
  //         passwordCharset += uppercaseCharacters;
  //     }

  //     let numericalCharactersInput = confirm("Would you like numbers to be included in your password?");

  //     if (numericalCharactersInput) {
  //         passwordCharset += numericalCharacters;
  //     }

  //     let specialCharactersInput = confirm("Would you like special characters to be included in your password?");

  //     if (specialCharactersInput) {
  //         passwordCharset += specialCharacters;
  //     }

  //     if (passwordCharset === "") {
  //         alert("Please select at least one type of character you would like to include!");
  //     }

  //     if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
  //         for (var i = 0; i < passwordLengthInput; i++) {
  //             newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
  //         };
  //         localStorage.setItem("password", newPassword);
  //         let newPasswordStr = localStorage.getItem("password");
  //         passwordTextarea.textContent = newPasswordStr;
  //     };
  // };

  // function copyPassword() {
  //     passwordTextarea.select();
  //     document.execCommand("copy");
  //     passwordTextarea.innerHTML = "";
  // };
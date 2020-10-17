// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!@#$%^&*()_+=|}{[]:',.?/<>"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














/* <div class="card-body">
<textarea
  readonly
  id="password"
  placeholder="Your Secure Password"
  aria-label="Generated Password"
></textarea>
</div> */
// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase ="abcdefghijklmnopqrstuvwxyz"
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numerical ="0123456789"
const specialCharacters ="!@#$%^&*()[]{}-_"

// Create Variable for latter to print to password to webpage
var passwordDisplay = document.getElementById("password")

// Function to determine password length
function writePassword(){
    var length = prompt("Choose your desired number of characters between 8 and 128.")
    if (length < 8 || length > 128 || isNaN(length)){
      alert("Invalid. Please choose a number between 8-128");
      writePassword()
      return
    }

    // section of function that accepts password criteria
    var result = ""

    var lowerCaseCheck = confirm("Do you want lowercase characters in your generated password?")
    if (lowerCaseCheck === true){
      result += lowerCase
    }
    var upperCaseCheck = confirm("Do you want uppercase characters in your generated password?")
    if (upperCaseCheck === true){
      result += upperCase
    }
    var numericalCheck = confirm("Do you want numerical values in your generated password?")
    if (numericalCheck === true) {
      result += numerical
    }
    var specialCharactersCheck = confirm("Do you want speical characters in your generated password?")
    if (specialCharactersCheck === true){
      result += specialCharacters
    }
    
    // takes all math from above and randomizes a password based on user inputs
    let outcome = ""
    for(var i=0; i<length; i++){
    let placement = Math.floor(Math.random() * result.length)
    outcome += result.charAt(placement)

    // Print password to webpage
    passwordDisplay.innerText = outcome
}
console.log(outcome)
}




//   while (lowerCase === false && upperCase === false && numerical === false && specialCharacters === false){
//     alert("You must choose one character type to include in your generated password. ")
//     var lowerCase = confirm("Do you want lowercase characters in your generated password?");
//     var upperCase = confirm("Do you want uppercase characters in your generated password?");
//     var numerical = confirm("Do you want numerical values in your generated password?");
//     var specialCharacters = confirm("Do you want speical characters in your generated password?");
       
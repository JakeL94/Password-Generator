// variables for password generation
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()=+";
const numbers = "1234567890";



// variables for user to choose which elements to include in password
const checkLength = document.querySelector('#length');
const checkUpper = document.querySelector('#upper');
const checkLower = document.querySelector('#lower');
const checkNumber = document.querySelector('#number');
const checkSymbol = document.querySelector('#symbol');



// get random upper letters, lower letters, symbols and numbers
function lowerCaseGenerate() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function upperCaseGenerate() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function symbolGenerate() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function numberGenerate() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

//grab elements if boxes are checked
function generateElement() {
  const element = [];

  if(checkLower.checked) {
    element.push(lowerCaseGenerate())
  }

  if(checkUpper.checked) {
    element.push(upperCaseGenerate())
  }

  if(checkNumber.checked) {
    element.push(numberGenerate())
  }

  if(checkSymbol.checked) {
    element.push(symbolGenerate())
  }

  return element[Math.floor(Math.random() * element.length)];
}

//Password generation
function generatePassword() {
  const length = checkLength.value;
  console.log(length);
  let password = "";

  for (let i = 0; i < length; i++) {
    const element = generateElement();
    console.log(element);
    password += element;
  }
};

// console.log(generatePassword());

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const length = checkLength.value;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(length < 8 || length > 128) {
    return window.alert('Password must be between 8 and 128 characters!');
  }
  else {
    passwordText.value = password;
  }  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



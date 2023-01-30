// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  const questions = ["Include uppercase letters?",
   "Include lowercase letters?",
   "Include numbers?",
   "Include special characters?"
    ];
  const options = getPasswordOptions(questions);
 
  
// Function to prompt user for password options
  function getPasswordOptions(questions) {
    let responses = [];
    for (let i = 0; i < questions.length; i++) {
      let response = confirm(questions[i]);
      responses.push(response);
    }
    return responses;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
 
  // Function to generate password with user input
  function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const characterSet = i % 3 === 0 ? specialCharacters :
                           i % 2 === 0 ? numericCharacters :
                           i % 1 === 0 ? lowerCasedCharacters : upperCasedCharacters;
        password += getRandom(characterSet);
    }
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword(15);
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }

  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
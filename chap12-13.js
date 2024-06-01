//1


// Function to check if the input is a number
function isNumber(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
}

// Function to check if the input is an uppercase letter
function isUpperCase(char) {
    var charCode = char.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
}

// Function to check if the input is a lowercase letter
function isLowerCase(char) {
    var charCode = char.charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
}

// Main function to take input and determine its type
function checkCharacterType(character) {
    if (isNumber(character)) {
        return character + " is a number.";
    } else if (isUpperCase(character)) {
        return character + " is an uppercase letter.";
    } else if (isLowerCase(character)) {
        return character + " is a lowercase letter.";
    } else {
        return character + " is not a number or letter.";
    }
}

// Prompt user for input
var userInput = prompt("Enter a character:");

// Check and display the type of the input character
alert(checkCharacterType(userInput));



//2


// Function to compare two integers and display the larger one
function displayLargerInteger(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger.");
    } else if (num2 > num1) {
        console.log(num2 + " is larger.");
    } else {
        console.log("Both numbers are equal.");
    }
}

// Prompt user for input
var firstNumber = parseInt(prompt("Enter the first integer:"));
var secondNumber = parseInt(prompt("Enter the second integer:"));

// Call the function to display the larger integer
displayLargerInteger(firstNumber, secondNumber);



//3


// Function to determine whether a number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        return "The number is positive.";
    } else if (number < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

// Main function to take input and determine the state of the number
function checkNumberState() {
    var userInput = parseFloat(prompt("Enter a number:"));

    var result = checkNumber(userInput);

    alert(result);
}

// Call the main function
checkNumberState();


//4

// Function to check if a character is a vowel
function isVowel(character) {
    // Convert the character to lowercase to handle both cases (upper and lower)
    character = character.toLowerCase();

    // Check if the character is a vowel
    return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
}

// Main function to take input and check if it's a vowel
function checkVowel() {
    var userInput = prompt("Enter a character (string of length 1):");

    if (userInput.length === 1) {
        if (isVowel(userInput)) {
            alert("The character '" + userInput + "' is a vowel.");
        } else {
            alert("The character '" + userInput + "' is not a vowel.");
        }
    } else {
        alert("Please enter a single character.");
    }
}

// Call the main function
checkVowel();






//5

// Store correct password
var correctPassword = "password123";

// Function to validate user password
function validatePassword(userInput) {
    // Check if user has entered a password
    if (!userInput) {
        return "Please enter your password.";
    }

    // Check if entered password matches the correct password
    if (userInput === correctPassword) {
        return "Correct! The password you entered matches the original password.";
    } else {
        return "Incorrect password.";
    }
}

// Main function to prompt user for password and validate it
function checkPassword() {
    var userPassword = prompt("Enter your password:");

    // Validate the password and display the result
    alert(validatePassword(userPassword));
}

// Call the main function
checkPassword();


//6


// Store correct password
var correctPassword = "password123";

// Function to validate user password
function validatePassword(userInput) {
    // Check if user has entered a password
    if (!userInput) {
        return "Please enter your password.";
    }

    // Check if entered password matches the correct password
    if (userInput === correctPassword) {
        return "Correct! The password you entered matches the original password.";
    } else {
        return "Incorrect password.";
    }
}

// Main function to prompt user for password and validate it
function checkPassword() {
    var userPassword = prompt("Enter your password:");

    // Validate the password and display the result
    alert(validatePassword(userPassword));
}

// Call the main function
checkPassword();


//7

// Function to determine the appropriate greeting based on the time
function greetUser(time) {
    if (time >= 0 && time <= 1159) {
        console.log("Good Morning!");
    } else if (time >= 1200 && time <= 1659) {
        console.log("Good Afternoon!");
    } else if (time >= 1700 && time <= 2059) {
        console.log("Good Evening!");
    } else if (time >= 2100 && time <= 2359) {
        console.log("Good Night!");
    } else {
        console.log("Invalid time entered.");
    }
}

// Prompt user for time input
var userInput = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Call the function to determine the appropriate greeting
greetUser(userInput);









// Take user inputs for first and last name
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

// Merge the names into a new variable titled fullName
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome!");

//2

// Take user input for favorite mobile phone model
var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");

// Find and display the length of user input
document.write("Length of your favorite mobile phone model: " + favoritePhoneModel.length);


//3

// Define the word
var word = "Pakistani";

// Find the index of the letter "n"
var indexOfN = word.indexOf("n");

// Display the result in the browser
document.write("Index of 'n' in the word 'Pakistani' is: " + indexOfN);


//4

// Define the word
var word = "Hello World";

// Find the last index of the letter "l"
var lastIndexofL = word.lastIndexOf("l");

// Display the result in the browser
document.write("Last index of 'l' in the word 'Hello World' is: " + lastIndexofL);


//5

// Define the word
var word = "Pakistani";

// Find the character at the 3rd index
var charAtIndex3 = word.charAt(3);

// Display the result in the browser
document.write("Character at 3rd index in the word 'Pakistani' is: " + charAtIndex3);


//6


// Take user inputs for first and last name
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

// Merge the names into a new variable titled fullName using concat() method
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome!");



//7

// Define the original word
var originalWord = "Hyderabad";

// Replace "Hyder" with "Islam"
var replacedWord = originalWord.replace("Hyder", "Islam");

// Display the result
console.log("Replaced word:", replacedWord);


//8

var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&"
var replacedMessage = message.split("and").join("&");

// Display the result
document.write("Replaced message: " + replacedMessage);


//9


var stringNumber = "472";
var convertedNumber = parseInt(stringNumber);

// Display values and types
document.write("Original value: " + stringNumber + ", Type: " + typeof stringNumber + "<br>");
document.write("Converted value: " + convertedNumber + ", Type: " + typeof convertedNumber);



//10


// Prompt user for input
var userInput = prompt("Enter some text:");

// Convert input to uppercase
var uppercaseInput = userInput.toUpperCase();

// Display the converted input
document.write("Input in capital letters: " + uppercaseInput);



//11


// Prompt user for input
var userInput = prompt("Enter some text:");

// Function to convert input to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Convert input to title case
var titleCaseInput = toTitleCase(userInput);

// Display the converted input
document.write("Input in title case: " + titleCaseInput);


//12

var num = 35.36;

// Convert num to string and remove the dot
var numAsString = num.toString().replace(".", "");

// Display the result
document.write("Number without dot: " + numAsString);



//13


// Function to check if a character is a special symbol
function isSpecialSymbol(char) {
    var charCode = char.charCodeAt(0);
    return (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64);
}

// Prompt user for username
var username = prompt("Enter your username:");

// Check if username contains special symbols
var containsSpecialSymbol = false;
for (var i = 0; i < username.length; i++) {
    if (isSpecialSymbol(username[i])) {
        containsSpecialSymbol = true;
        break;
    }
}

// If username contains special symbols, prompt user again
if (containsSpecialSymbol) {
    alert("Username contains invalid characters. Please enter a valid username without special symbols.");
} else {
    alert("Username is valid: " + username);
}



//14


// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to perform case-insensitive search
function searchItem(item) {
    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === item.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Prompt user for input
var userInput = prompt("Enter an item to search:");

// Perform search
var found = searchItem(userInput);

// Inform user about availability
if (found) {
    alert("Yes, the item '" + userInput + "' is found in the list.");
} else {
    alert("No, the item '" + userInput + "' is not found in the list.");
}



//15



// Function to check if a character is an alphabet
function isAlphabet(char) {
    var charCode = char.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

// Function to check if a character is a digit
function isDigit(char) {
    var charCode = char.charCodeAt(0);
    return (charCode >= 48 && charCode <= 57);
}

// Function to check if a password meets the requirements
function checkPassword(password) {
    if (password.length < 6 || isDigit(password[0]) || !(/[a-zA-Z]/.test(password)) || !(/[0-9]/.test(password))) {
        return false;
    }
    return true;
}

// Prompt user for password
var password = prompt("Enter your password:");

// Check if password meets requirements
if (checkPassword(password)) {
    alert("Password is valid.");
} else {
    alert("Password does not meet the requirements. Please enter a valid password.");
}


//16


var university = "University of Karachi";

// Split the string into an array based on the space character
var universityArray = university.split(" ");

// Display the elements of the array
document.write("Array elements: " + universityArray.join(", "));


//17


// Prompt user for input
var userInput = prompt("Enter a string:");

// Get the last character of the input
var lastCharacter = userInput.charAt(userInput.length - 1);

// Display the last character
alert("Last character of the input: " + lastCharacter);



//18


var sentence = "The quick brown fox jumps over the lazy dog";

// Convert the sentence to lowercase for case-insensitive comparison
var lowerCaseSentence = sentence.toLowerCase();

// Split the sentence into words
var words = lowerCaseSentence.split(" ");

// Count the occurrences of the word "the"
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

// Display the count of occurrences
alert("Number of occurrences of the word 'the': " + count);



//..............end...............//
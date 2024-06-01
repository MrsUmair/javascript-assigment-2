function welcomeMessage(city) {
    if (city.toLowerCase() === "karachi") {
        console.log("Welcome to the city of lights!");
    } else {
        console.log("Welcome!");
    }
}

function main() {
    const cityName = prompt("Enter the name of your city:");
    welcomeMessage(cityName);
}

main();




//2


function greetUser(gender) {
    if (gender.toLowerCase() === "male") {
        console.log("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
        console.log("Good Morning Ma'am.");
    } else {
        console.log("Good Morning!");
    }
}

function main() {
    const userGender = prompt("Enter your gender (male/female):");
    greetUser(userGender);
}

main();




//3

function trafficSignalMessage(color) {
    switch (color.toLowerCase()) {
        case "red":
            console.log("Must Stop");
            break;
        case "yellow":
            console.log("Ready to move");
            break;
        case "green":
            console.log("Move now");
            break;
        default:
            console.log("Invalid color");
    }
}

function main() {
    const signalColor = prompt("Enter the color of the traffic signal:");
    trafficSignalMessage(signalColor);
}

main();



//4


function checkFuelLevel(fuel) {
    if (fuel < 0.25) {
        console.log("Please refill the fuel in your car.");
    } else {
        console.log("You have enough fuel.");
    }
}

function main() {
    const remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
    checkFuelLevel(remainingFuel);
}

main();



//5





// a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// e
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// f
if("car" < "cat"){
    alert("car is smaller than cat");
}



//6


// Function to calculate grade based on percentage
function calculateGrade(percentage) {
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else if (percentage >= 50) {
        return 'E';
    } else {
        return 'F';
    }
}

// Function to calculate percentage
function calculatePercentage(marksObtained, totalMarks) {
    return (marksObtained / totalMarks) * 100;
}

// Main function to take input and display result
function calculateResult() {
    var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    var totalObtainedMarks = subject1 + subject2 + subject3;
    var percentage = calculatePercentage(totalObtainedMarks, totalMarks);
    var grade = calculateGrade(percentage);

    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
}

// Call the main function
calculateResult();


//7

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber);
}


//8

// Function to check if a number is divisible by 3
function isDivisibleBy3(number) {
    return number % 3 === 0;
}

// Main function to prompt user for a number and check if it's divisible by 3
function checkDivisibilityBy3() {
    var userInput = parseInt(prompt("Enter a number:"));

    if (isDivisibleBy3(userInput)) {
        alert("The number is divisible by 3.");
    } else {
        alert("The number is not divisible by 3.");
    }
}

// Call the main function
checkDivisibilityBy3();


//9


// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Main function to prompt user for a number and check if it's even or odd
function checkEvenOrOdd() {
    var userInput = parseInt(prompt("Enter a number:"));

    if (isEven(userInput)) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
}

// Call the main function
checkEvenOrOdd();


//10

// Function to display message based on temperature
function checkTemperature(temperature) {
    if (temperature > 40) {
        return "It is too hot outside.";
    } else if (temperature > 30) {
        return "The Weather today is Normal.";
    } else if (temperature > 20) {
        return "Today’s Weather is cool.";
    } else if (temperature > 10) {
        return "OMG! Today’s weather is so Cool.";
    } else {
        return "It's freezing outside!";
    }
}

// Main function to take input and display message
function displayWeatherMessage() {
    var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

    var message = checkTemperature(temperature);

    alert(message);
}

// Call the main function
displayWeatherMessage();





//11


// Function to perform calculation based on operation
function calculate(firstNumber, secondNumber, operation) {
    var result;

    if (operation === "+") {
        result = firstNumber + secondNumber;
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber === 0) {
            return "Error: Division by zero!";
        }
        result = firstNumber / secondNumber;
    } else if (operation === "%") {
        result = firstNumber % secondNumber;
    } else {
        return "Error: Invalid operation!";
    }

    return result;
}

// Main function to take input and perform calculation
function performCalculation() {
    var firstNumber = parseFloat(prompt("Enter the first number:"));
    var secon




    //........end..............//



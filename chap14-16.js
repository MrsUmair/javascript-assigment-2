//1
// Declare an empty array to store student names
var studentNames = [];


//2

// Declare an empty array using object notation to store student names
var studentNames = new Array();

// You can add student names to this array later


//3

// Declare and initialize a strings array
var stringsArray = ["apple", "banana", "orange", "grape"];

// Access elements of the array
console.log(stringsArray[0]); // Output: apple
console.log(stringsArray[1]); // Output: banana
console.log(stringsArray[2]); // Output: orange
console.log(stringsArray[3]); // Output: grape

//4

// Declare and initialize a numbers array
var numbersArray = [10, 20, 30, 40, 50];

// Access elements of the array
console.log(numbersArray[0]); // Output: 10
console.log(numbersArray[1]); // Output: 20
console.log(numbersArray[2]); // Output: 30
console.log(numbersArray[3]); // Output: 40
console.log(numbersArray[4]); // Output: 50



//5

// Declare and initialize a boolean array
var booleanArray = [true, false, true, true, false];

// Access elements of the array
console.log(booleanArray[0]); // Output: true
console.log(booleanArray[1]); // Output: false
console.log(booleanArray[2]); // Output: true
console.log(booleanArray[3]); // Output: true
console.log(booleanArray[4]); // Output: false



//6

// Declare and initialize a mixed array
var mixedArray = ["apple", 10, true, "banana", false, 20];

// Access elements of the array
console.log(mixedArray[0]); // Output: apple
console.log(mixedArray[1]); // Output: 10
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: banana
console.log(mixedArray[4]); // Output: false
console.log(mixedArray[5]); // Output: 20


//7

// Declare and initialize an array with education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Function to display qualifications in the browser
function displayQualifications() {
    var qualificationsList = "<ul>";

    // Loop through the qualifications array and construct the list items
    for (var i = 0; i < qualifications.length; i++) {
        qualificationsList += "<li>" + qualifications[i] + "</li>";
    }

    qualificationsList += "</ul>";

    // Display the list in the browser
    document.getElementById("qualifications").innerHTML = qualificationsList;
}

// Call the function to display qualifications
displayQualifications();



//8

// Array to store student names
var studentNames = ["Alice", "Bob", "Charlie"];

// Array to store scores of students
var studentScores = [420, 380, 450]; // Scores out of 500

// Function to calculate percentage
function calculatePercentage(score, totalMarks) {
    return (score / totalMarks) * 100;
}

// Function to display scores and percentages
function displayScores() {
    var totalMarks = 500; // Total marks for each student

    // Loop through the studentNames array and display scores and percentages
    for (var i = 0; i < studentNames.length; i++) {
        var percentage = calculatePercentage(studentScores[i], totalMarks);
        console.log(studentNames[i] + ": Scored " + studentScores[i] + " out of " + totalMarks + ", Percentage: " + percentage.toFixed(2) + "%");
    }
}

// Call the function to display scores and percentages
displayScores();


//9


// Initialize an array with color names
var colorsArray = ["Red", "Green", "Blue"];

// Display the array elements in the browser
console.log("Initial array:", colorsArray.join(", "));

// Ask the user what color to add to the beginning and add it
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorsArray.unshift(colorToAddAtBeginning);

// Display the updated array in the browser
console.log("After adding color to the beginning:", colorsArray.join(", "));

// Ask the user what color to add to the end and add it
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorsArray.push(colorToAddAtEnd);

// Display the updated array in the browser
console.log("After adding color to the end:", colorsArray.join(", "));

// Add two more colors to the beginning of the array
colorsArray.unshift("Yellow", "Orange");

// Display the updated array in the browser
console.log("After adding two colors to the beginning:", colorsArray.join(", "));

// Delete the first color in the array
colorsArray.shift();

// Display the updated array in the browser
console.log("After deleting the first color:", colorsArray.join(", "));

// Delete the last color in the array
colorsArray.pop();

// Display the updated array in the browser
console.log("After deleting the last color:", colorsArray.join(", "));

// Ask the user at which index to add a color and add it
var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
colorsArray.splice(indexToAddColor, 0, colorToAdd);

// Display the updated array in the browser
console.log("After adding color at index:", colorsArray.join(", "));

// Ask the user at which index to delete color(s) and how many colors to delete
var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorsArray.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array in the browser
console.log("After deleting colors at index:", colorsArray.join(", "));




//10

// Array to store student scores
var studentScores = [320, 230, 480, 120];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Display the sorted array
console.log("Sorted student scores (ascending order):", studentScores);


//11

// Initialize an array with city names
var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Initialize an empty array for selected cities
var selectedCities = [];

// Copy 3 array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Display the selected cities array
console.log("Selected cities:", selectedCities);



//12

// Array with string elements
var arr = ["This", "is", "my", "cat"];

// Create a single string using the join method
var singleString = arr.join(" ");

// Display the single string
console.log(singleString);



//13

// Create an empty array to store values in FIFO order
var fifoArray = [];

// Function to add values to the array in FIFO order
function addToFifo(value) {
    fifoArray.push(value); // Add value to the end of the array
}

// Function to remove and return the first value added to the array
function removeFromFifo() {
    return fifoArray.shift(); // Remove and return the first value from the beginning of the array
}

// Example usage:
addToFifo("First");
addToFifo("Second");
addToFifo("Third");

console.log("Values in FIFO order:", fifoArray.join(", "));

var removedValue = removeFromFifo();
console.log("Removed value:", removedValue);
console.log("Remaining values in FIFO order:", fifoArray.join(", "));




//14

// Create an empty array to store values in LIFO order
var lifoArray = [];

// Function to add values to the array in LIFO order
function addToLifo(value) {
    lifoArray.push(value); // Add value to the end of the array
}

// Function to remove and return the last value added to the array
function removeFromLifo() {
    return lifoArray.pop(); // Remove and return the last value from the end of the array
}

// Example usage:
addToLifo("First");
addToLifo("Second");
addToLifo("Third");

console.log("Values in LIFO order:", lifoArray.join(", "));

var removedValue = removeFromLifo();
console.log("Removed value:", removedValue);
console.log("Remaining values in LIFO order:", lifoArray.join(", "));




//15

// Array of phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the HTML code for the dropdown/select menu
var dropdownHTML = "<select>";

// Loop through the manufacturers array to create option elements
for (var i = 0; i < manufacturers.length; i++) {
    dropdownHTML += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
}

// Close the select element
dropdownHTML += "</select>";

// Display the dropdown/select menu in the browser using document.write()
document.write(dropdownHTML);



//end.................//
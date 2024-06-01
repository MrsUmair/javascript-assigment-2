// Declare and initialize an empty multidimensional array
var multiArray = [[]];


// Adding arrays as elements to create a multidimensional structure
multiArray[0].push(1, 2, 3);
multiArray.push([4, 5, 6]);
multiArray.push([7, 8, 9]);



//2

// Declare and initialize a multidimensional array representing the matrix
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


//3

// Loop to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log(i);
}


//4

// Function to print multiplication table
function printMultiplicationTable(tableNumber, length) {
    console.log("Multiplication table of", tableNumber, "with length", length + ":");

    // Loop to generate and print the multiplication table
    for (var i = 1; i <= length; i++) {
        console.log(tableNumber, "x", i, "=", tableNumber * i);
    }
}

// Get the table number and length from the user
var tableNumber = parseInt(prompt("Enter the table number:"));
var length = parseInt(prompt("Enter the length of the table:"));

// Check if the inputs are valid numbers
if (!isNaN(tableNumber) && !isNaN(length)) {
    // Call the function to print the multiplication table
    printMultiplicationTable(tableNumber, length);
} else {
    console.log("Please enter valid numbers.");
}


//5

// Array of fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Loop to print items of the array using for loop
console.log("Printing items of the array 'fruits':");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//6

// Counting: 1 to 15
document.write("<b>Counting:</b> ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// Reverse counting: 10 to 1
document.write("<b>Reverse counting:</b> ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// Even numbers: 0 to 20
document.write("<b>Even:</b> ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// Odd numbers: 1 to 19
document.write("<b>Odd:</b> ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// Series: 2k to 20k
document.write("<b>Series:</b> ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}



//7


// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
    // Convert the item to lowercase for case-insensitive search
    item = item.toLowerCase();
    
    // Check if the item exists in the array
    for (var i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === item) {
            return true;
        }
    }
    
    // If the item is not found
    return false;
}

// Prompt the user for input
var userInput = prompt("Enter an item to search:");

// Search for the item in the array
var found = searchItem(userInput);

// Display the result based on whether the item is found or not
if (found) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}



//8


// Array of numbers
var A = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number
var largestNumber = A[0]; // Assume the first number is the largest initially

// Loop through the array to find the largest number
for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i];
    }
}

// Display the largest number
console.log("The largest number in the array is:", largestNumber);



//9



// Array of numbers
var A = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number
var smallestNumber = A[0]; // Assume the first number is the smallest initially

// Loop through the array to find the smallest number
for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}

// Display the smallest number
console.log("The smallest number in the array is:", smallestNumber);



//10


// Loop to print multiples of 5 ranging from 1 to 100
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


//...........end......//
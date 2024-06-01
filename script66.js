var a = 2, b = 1;
var result = --a - --b + ++b + b--;


document.write("a"+ is)
document.write("b"+ is)

//3


let userName = prompt("Please enter your name:");

alert("Assalamualikum, " + userName + "! Welcome to our website.");




//4

// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number and check if it's valid
number = parseInt(number);

// If the input is not a valid number or the user didn't input anything, default to 5
if (isNaN(number) || number === 0) {
    number = 5;
}

// Display the multiplication table in the browser
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


//5

// Prompt the user to enter the names of three subjects
let subject1 = prompt("Enter the name of subject 1:");
let subject2 = prompt("Enter the name of subject 2:");
let subject3 = prompt("Enter the name of subject 3:");

// Total marks for each subject
let totalMarks = 100;

// Take obtained marks for the first subject from the user
let obtainedMarksSubject1 = prompt("Enter the obtained marks for " + subject1 + ":");

// Convert obtained marks to a number
obtainedMarksSubject1 = parseInt(obtainedMarksSubject1);

// Display the entered data
console.log("Subject 1: " + subject1);
console.log("Subject 2: " + subject2);
console.log("Subject 3: " + subject3);
console.log("Total marks for each subject: " + totalMarks);
console.log("Obtained marks for " + subject1 + ": " + obtainedMarksSubject1);



//end.......
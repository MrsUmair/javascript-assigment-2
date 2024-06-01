let n=(age)

alert("i m is "+n+ " years old")


// visited times


        // Check if the visitor count exists in local storage
        let visits = localStorage.getItem("visits");

        // If the visitor count doesn't exist, set it to 0
        if (!visits) {
            visits = 0;
        } else {
            // If it exists, convert it to a number
            visits = parseInt(visits);
        }

        // Increment the visitor count
        visits++;

        // Store the updated visitor count in local storage
        localStorage.setItem("visits", visits);

        // Display the number of visits on the web page
        document.write("You have visited this site " + visits + " times.");
    



var birthyear=1993
Document.write("My birth year is "+n1)
Document.write("data type of my declared variable is number")


var n1 = "John Doe";
var n2 = "T-shirt";
var n3= 5; 

Document.write(+ n1 + "ordered " + n3 + " " + n2 + "(s) on XYZ Clothing store.")

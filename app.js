// Chapter No 6-9
// Question No 3

 // Prompt the user to enter their name
// let userName = prompt("Please enter your name:");

// // Check if the user provided a name
// if (userName) {
//     // Greet the user
//     alert(`Hello, ${userName}! Welcome!`);
// } else {
//     // Handle the case where no name was entered
//     alert("Hello! Welcome!");
// }


// Question No 4
// function displayMultiplicationTable() {
//     // Prompt the user to enter a number
//     let userInput = prompt("Enter a number for its multiplication table (default is 5):");
    
//     // Convert the input to a number or default to 5
//     let number = parseInt(userInput) || 5;

//     // Get a reference to the result div
//     let resultDiv = document.getElementById('result');

//     // Clear any previous content
//     resultDiv.innerHTML = '';

//     // Generate the multiplication table
//     let table = `<h3>Multiplication Table of ${number}</h3>`;
//     table += '<ul>';
//     for (let i = 1; i <= 10; i++) {
//         table += `<li>${number} x ${i} = ${number * i}</li>`;
//     }
//     table += '</ul>';

//     // Display the table on the browser
//     resultDiv.innerHTML = table;
// }

// function calculateResults() {
//     // Step a: Take three subjects' names from the user
//     let subject1 = prompt("Enter the name of the first subject:");
//     let subject2 = prompt("Enter the name of the second subject:");
//     let subject3 = prompt("Enter the name of the third subject:");

//     // Step b: Total marks for each subject
//     const totalMarksPerSubject = 100;

//     // Step c: Take obtained marks for the first subject
//     let marks1 = parseInt(prompt(`Enter obtained marks for ${subject1} (out of ${totalMarksPerSubject}):`)) || 0;

//     // Step d: Take obtained marks for the remaining subjects
//     let marks2 = parseInt(prompt(`Enter obtained marks for ${subject2} (out of ${totalMarksPerSubject}):`)) || 0;
//     let marks3 = parseInt(prompt(`Enter obtained marks for ${subject3} (out of ${totalMarksPerSubject}):`)) || 0;

//     // Calculate total marks and percentage
//     let totalObtainedMarks = marks1 + marks2 + marks3;
//     let totalMarks = totalMarksPerSubject * 3; // 3 subjects
//     let percentage = (totalObtainedMarks / totalMarks) * 100;

//     // Display results in a table
//     let resultTable = `
//         <table border="1" cellpadding="10" cellspacing="0">
//             <thead>
//                 <tr>
//                     <th>Subject</th>
//                     <th>Total Marks</th>
//                     <th>Obtained Marks</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>${subject1}</td>
//                     <td>${totalMarksPerSubject}</td>
//                     <td>${marks1}</td>
//                 </tr>
//                 <tr>
//                     <td>${subject2}</td>
//                     <td>${totalMarksPerSubject}</td>
//                     <td>${marks2}</td>
//                 </tr>
//                 <tr>
//                     <td>${subject3}</td>
//                     <td>${totalMarksPerSubject}</td>
//                     <td>${marks3}</td>
//                 </tr>
//                 <tr>
//                     <td><strong>Total</strong></td>
//                     <td><strong>${totalMarks}</strong></td>
//                     <td><strong>${totalObtainedMarks}</strong></td>
//                 </tr>
//                 <tr>
//                     <td colspan="2"><strong>Percentage</strong></td>
//                     <td><strong>${percentage.toFixed(2)}%</strong></td>
//                 </tr>
//             </tbody>
//         </table>
//     `;

//     // Display the result in the browser
//     document.getElementById('result').innerHTML = resultTable;
// }
// Prompt the user to input subject names
// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// // Total marks for each subject
// const totalMarksEach = 100;

// // Prompt the user to input obtained marks for each subject
// let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`), 10);
// let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`), 10);
// let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`), 10);

// // Calculate total obtained marks and percentage
// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// let totalMarks = totalMarksEach * 3;
// let percentage = (totalObtainedMarks / totalMarks) * 100;

// // Display results in the browser using a table
// document.body.innerHTML = `
//     <table border="1" style="width:50%; margin:auto; text-align:center;">
//         <thead>
//             <tr>
//                 <th>Subject</th>
//                 <th>Total Marks</th>
//                 <th>Obtained Marks</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${subject1}</td>
//                 <td>${totalMarksEach}</td>
//                 <td>${obtainedMarks1}</td>
//             </tr>
//             <tr>
//                 <td>${subject2}</td>
//                 <td>${totalMarksEach}</td>
//                 <td>${obtainedMarks2}</td>
//             </tr>
//             <tr>
//                 <td>${subject3}</td>
//                 <td>${totalMarksEach}</td>
//                 <td>${obtainedMarks3}</td>
//             </tr>
//         </tbody>
//         <tfoot>
//             <tr>
//                 <td colspan="2"><strong>Total</strong></td>
//                 <td>${totalObtainedMarks}</td>
//             </tr>
//             <tr>
//                 <td colspan="2"><strong>Percentage</strong></td>
//                 <td>${percentage.toFixed(2)}%</td>
//             </tr>
//         </tfoot>
//     </table>
// `;

// Chapter No 9-11(USER INPUT & CONDITIONAL STATEMENT)
// // Question No 1

// // Prompt the user to input the city name
// let city = prompt("Enter the name of your city:");

// // Check if the input city is "Karachi" (case insensitive)
// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + city);
// }

// // Question No 2
// Prompt the user to input their gender
// let gender = prompt("Enter your gender (male/female):");

// // Check the gender and display the appropriate message
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am");
// } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
// }

// // Question No 3
// Prompt the user to input the color of the traffic signal
// let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

// // Check the input color and display the corresponding message
// if (signalColor.toLowerCase() === "red") {
//     alert("Must Stop");
// } else if (signalColor.toLowerCase() === "yellow") {
//     alert("Ready to move");
// } else if (signalColor.toLowerCase() === "green") {
//     alert("Move now");
// } else {
//     alert("Invalid input. Please enter Red, Yellow, or Green.");
// }

// Question No 4
// // Prompt the user to input the remaining fuel in the car
// let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// // Check if the fuel is less than 0.25 litres
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("Your fuel level is sufficient");
// }

// Chapter No 12-13(IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS)
//Question no 1
// Prompt the user to input a character
// let input = prompt("Enter a single character:");

// // Check if the input is a single character
// if (input.length !== 1) {
//     alert("Please enter only one character.");
// } else {
//     // Get the ASCII code of the input
//     let asciiCode = input.charCodeAt(0);

//     // Determine the type of character based on ASCII code
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         alert("The input is a number.");
//     } else if (asciiCode >= 65 && asciiCode <= 90) {
//         alert("The input is an uppercase letter.");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         alert("The input is a lowercase letter.");
//     } else {
//         alert("The input is neither a number nor a letter.");
//     }
// }
//Question no 2
// Prompt the user to input two integers
// let num1 = parseInt(prompt("Enter the first integer:"), 10);
// let num2 = parseInt(prompt("Enter the second integer:"), 10);

// // Check and display the larger number or if they are equal
// if (num1 > num2) {
//     alert(`The larger number is: ${num1}`);
// } else if (num2 > num1) {
//     alert(`The larger number is: ${num2}`);
// } else {
//     alert("Both integers are equal.");
// }
//Question no 3
// a. Store the correct password in a variable
// const correctPassword = "mySecret123";

// // b. Ask the user to enter their password
// let userPassword = prompt("Enter your password:");

// // c. Validate the two passwords
// if (!userPassword) {
//     // i. Check if the user has entered a password
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     // ii. Check if both passwords are the same
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }
//Question no 4
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

//Question no 5
// Take time input from the user in 24-hour format (HHMM)
// let time = prompt("Enter time in 24-hour format (HHMM):");

// // Convert the input to an integer
// let timeInHours = parseInt(time);

// // Check if the input is valid
// if (isNaN(timeInHours) || time.length !== 4) {
//     alert("Please enter a valid time in 24-hour format (HHMM).");
// } else {
//     // Implementing if, else if, and else statements for different times of the day
//     if (timeInHours >= 0 && timeInHours < 1200) {
//         alert("Good Morning!");
//     } else if (timeInHours >= 1200 && timeInHours < 1700) {
//         alert("Good Afternoon!");
//     } else if (timeInHours >= 1700 && timeInHours < 2100) {
//         alert("Good Evening!");
//     } else if (timeInHours >= 2100 && timeInHours < 2400) {
//         alert("Good Night!");
//     } else {
//         alert("Please enter a valid time.");
//     }
// }

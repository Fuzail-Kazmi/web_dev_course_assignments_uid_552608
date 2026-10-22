// Q1: Check if a number is positive, negative, or zero

let input = prompt("Enter a number:");
input = Number(input);

if (input > 0) {
    console.log(`The entered value is ${input} and it's a positive number.`);
} else if (input < 0) {
    console.log(`The entered value is ${input} and it's a negative number.`);
} else {
    console.log(`The entered value is ${input} and it's zero.`);
}


// Q2: Check whether a number is even or odd

let evenOddInput = Number(prompt("Enter a number:"));

if (evenOddInput % 2 === 0) {
    console.log(`${evenOddInput} is an even number.`);
} else {
    console.log(`${evenOddInput} is an odd number.`);
}


// Q3: Find the largest of two numbers

let num1 = Number(prompt("Enter your first number:"));
let num2 = Number(prompt("Enter your second number:"));

if (num1 > num2) {
    console.log(`${num1} is the greater number.`);
} else if (num2 > num1) {
    console.log(`${num2} is the greater number.`);
} else {
    console.log("Both numbers are equal.");
}


// Q4: Calculate percentage and assign a grade

let marks = Number(prompt("Enter your marks:"));
let total_marks = 1100;

function student_percentage(marks, total_marks) {
    let percentage = (marks / total_marks) * 100;
    return percentage;
}

let finalPercentage = student_percentage(marks, total_marks);

if (marks < 0 || marks > total_marks) {
    console.log("Invalid marks. Enter marks between 0 and 1100.");
} else if (finalPercentage >= 85) {
    console.log(`${finalPercentage.toFixed(2)}% - You got an A grade.`);
} else if (finalPercentage >= 75) {
    console.log(`${finalPercentage.toFixed(2)}% - You got a B grade.`);
} else if (finalPercentage >= 55) {
    console.log(`${finalPercentage.toFixed(2)}% - You got a C grade.`);
} else if (finalPercentage >= 45) {
    console.log(`${finalPercentage.toFixed(2)}% - You got a D grade.`);
} else {
    console.log(`${finalPercentage.toFixed(2)}% - You got an F grade.`);
}


// Q5: Check whether a year is a leap year

let year = Number(prompt("Enter a year to check whether it is a leap year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}


// Q6: Print the day name using switch-case

const dayNumber = Number(prompt("Enter a day number (1-7):"));
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Unknown Day";
}

console.log(dayName);


// Q7: Create a simple calculator using switch-case

const calcNum1 = Number(prompt("Enter the first number:"));
const calcNum2 = Number(prompt("Enter the second number:"));

const operator = prompt("Enter an operator (+, -, *, /):");
let result;

switch (operator) {
    case "+":
        result = calcNum1 + calcNum2;
        break;
    case "-":
        result = calcNum1 - calcNum2;
        break;
    case "*":
        result = calcNum1 * calcNum2;
        break;
    case "/":
        if (calcNum2 === 0) {
            result = "Error: Division by zero is not allowed.";
        } else {
            result = calcNum1 / calcNum2;
        }
        break;
    default:
        result = "Invalid Operator";
}

console.log(`Result: ${result}`);


// Q8: Check whether a character is a vowel or consonant

let letterInput = prompt("Enter your letter:");

if (letterInput && letterInput.length === 1) {
    let letter = letterInput.toLowerCase();

    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log(`${letterInput} is a vowel.`);
            break;
        default:
            if (letter >= "a" && letter <= "z") {
                console.log(`${letterInput} is a consonant.`);
            } else {
                console.log("Invalid input. Please enter an English letter.");
            }
    }
} else {
    console.log("Please enter exactly one character.");
}


// Q9: Print instructions based on traffic light color

const light = prompt("Enter a traffic light color (Red, Yellow, Green):")
    .toLowerCase();

let signal;

switch (light) {
    case "red":
        signal = "Stop";
        break;
    case "yellow":
        signal = "Wait";
        break;
    case "green":
        signal = "Go";
        break;
    default:
        signal = "Unknown Color";
}

console.log(signal);


// Q10: Create a menu-driven program using switch-case

const option = Number(
    prompt(
        "Select an option:\n1 = Check Balance\n2 = Deposit\n3 = Withdraw\n4 = Exit"
    )
);

let selectOutput;

switch (option) {
    case 1:
        selectOutput = "Check Balance";
        break;
    case 2:
        selectOutput = "Deposit";
        break;
    case 3:
        selectOutput = "Withdraw";
        break;
    case 4:
        selectOutput = "Exit";
        break;
    default:
        selectOutput = "Unknown Number";
}

console.log(selectOutput);

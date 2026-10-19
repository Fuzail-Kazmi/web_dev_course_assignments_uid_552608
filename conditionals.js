// 📝 Questions

// Simple if condition 

// Q1. Write a program that checks if a number is positive, negative, or zero.

input = prompt("Enter a number:");

if (input > 0) {
    console.log(`The Enter Value Is ${input} And it's Positive Number`);
} else if (input < 0) {
    console.log(`The Enter Value Is ${input} And it's Negative Number`);
} else {
    console.log(`The Enter Value Is ${input} And it's Zero Number`);
}


// Q2. Even or odd check
// Using an if-else statement, determine whether a given integer is even or odd.

input = prompt("Enter a number: ");

if (input % 2 == 0) {
  console.log(`${input} is Even Number`)
}else {
  console.log(`${input} is Odd Number`)
}


// Q3. Largest of two numbers
// Write a program that takes two numbers and prints the larger one using conditional statements.

num1 = prompt("Enter Your First Number: ")
num2 = prompt("Enter Your Second Number: ")

if (num1 < num2){
    console.log(`${num2} is greater number`)
}else{
    console.log(`${num1} is greater number`)
}


// Q4. Grade evaluation
// Using if-else-if, assign grades (A, B, C, D, F) based on a student’s percentage score.

let marks = prompt("Enter Your Marks: ");
let total_marks = 1100;

function student_percentage(marks, total_marks) {
  let percentage = (marks / total_marks) * 100; 
  return percentage;
}

let finalPercentage = student_percentage(marks, total_marks);

if (finalPercentage > 85 && finalPercentage < 100){
  console.log(`${finalPercentage}% You Got An "A Grade"`)
}else if (finalPercentage > 75){
  console.log(`${finalPercentage}% You Got An "B Grade"`)
}else if (finalPercentage > 55){
  console.log(`${finalPercentage}% You Got An "C Grade"`)
}else if (finalPercentage > 45) {
  console.log(`${finalPercentage}% You Got An "D Grade"`)
}else {
  console.log(`${finalPercentage}% You Got An "F Grade"`)
}


// Q5. Leap year check
// Write a program that checks if a given year is a leap year using conditional statements.

let year = prompt("Enter a year to check its leap year: ") 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}


// Q6. Day of week switch
// Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, … 7 = Sunday).

const dayNumber = Number(prompt("Enter a Number of Day: "));
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


// Q7. Calculator switch
// Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.

const num1 = Number(prompt("Enter a first number: "));
const num2 = Number(prompt("Enter a second number: "));

const operator = prompt("Enter an operator ( +, -, *, / ): ");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      result = "Error: Division by zero is not allowed.";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid Operator";
}

console.log(`Result: ${result}`);


// Q8. Vowel or consonant
// Write a program that checks whether a given character is a vowel or consonant using switch-case.

let input = prompt("Enter your letter: ");

if (input && input.length === 1) {
    let letter = input.toLowerCase();

    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(`${input} is a vowel.`);
            break;
        default:
            if (letter >= 'a' && letter <= 'z') {
                console.log(`${input} is a consonant.`);
            } else {
                console.log("Invalid input. Please enter a valid letter.");
            }
    }
} else {
    alert("Please enter exactly one character.");
}


// Q9. Traffic light system 
// Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).

const light = prompt("Enter a traffic light color (Red, Yellow, Green):").toLowerCase();
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


// Q10. Menu-driven program
// Write a program using switch-case where the user selects from a menu (e.g., 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).


const option = Number(prompt("Enter a Number for Select your Option: "))
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




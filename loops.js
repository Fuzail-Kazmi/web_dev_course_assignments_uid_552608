
// Q1: Print numbers from 1 to 10
console.log("Q1: Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Q2: Sum of first N natural numbers using a while loop
console.log("\nQ2: Sum of first N natural numbers");

let n = 5;
let sum = 0;
let i = 1;

while (i <= n) {
    sum += i;
    i++;
}

console.log(`Sum of first ${n} natural numbers: ${sum}`);


// Q3: Multiplication table using a for loop
console.log("\nQ3: Multiplication table");

let number = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// Q4: Factorial calculation using a while loop
console.log("\nQ4: Factorial calculation");

let factorialNumber = 5;
let factorial = 1;
let j = 1;

while (j <= factorialNumber) {
    factorial *= j;
    j++;
}

console.log(`Factorial of ${factorialNumber}: ${factorial}`);


// Q5: Print numbers from 10 down to 1
console.log("\nQ5: Reverse counting");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Q6: Print even numbers up to N using do-while
console.log("\nQ6: Even numbers up to N");

let limit = 20;
let even = 2;

if (limit >= 2) {
    do {
        console.log(even);
        even += 2;
    } while (even <= limit);
}


// Q7: Sum of digits using a while loop
console.log("\nQ7: Sum of digits");

let digitNumber = 1234;
let digitSum = 0;

while (digitNumber > 0) {
    digitSum += digitNumber % 10;
    digitNumber = Math.floor(digitNumber / 10);
}

console.log(`Sum of digits: ${digitSum}`);


// Q8: Generate the first 10 Fibonacci terms using a for loop
console.log("\nQ8: Fibonacci series");

let first = 0;
let second = 1;

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}


// Q9: Guessing game using do-while
console.log("\nQ9: Guessing game");

const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctNumber = 7;

function guessingGame() {
    rl.question("Guess a number between 1 and 10: ", (answer) => {
        const guess = Number(answer);

        if (guess === correctNumber) {
            console.log("Correct! You guessed the number.");
            rl.close();
        } else {
            console.log("Wrong guess. Try again.");
            guessingGame();
        }
    });
}

guessingGame();


// Q10: Check whether a number is prime using a for loop
console.log("\nQ10: Prime number check");

let primeNumber = 17;
let isPrime = primeNumber >= 2;

for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
    if (primeNumber % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${primeNumber} is a prime number.`);
} else {
    console.log(`${primeNumber} is not a prime number.`);
}

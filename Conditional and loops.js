/*
               ====> Level 1 – Pure Beginner Practice <===

*/
const prompt = require('prompt-sync')();  // 'prompt-sync' package ko require kia hai .

//Q:1:-  Ask user’s age and check if eligible to vote

let age = Number(prompt("Enter your Age : "));
if (age >= 18)
    console.log("You're eligible for vote\n");
else console.log("You're not eligible for vote\n");


//Q:2:- Print multiplication table of 5

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


//Q:3:-  Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

for (let i = 1; i < 15; i++) {
    if (i > 8) {
        console.log(`${i} is greater than 8`);
    } else console.log(`${i} is not greater than 8.`);
}
console.log(`\n`);

//Q:4 :-  Ask user for password and print access status Hardcoded correct password. Compare with user input.

let inputpassword = prompt("Enter your Password : ", { echo: '*' })  // yha pr echo ka use password ko hidden krne ke lie kia gya hai.
const password = "8ue9348jf"
if (inputpassword === password) {
    console.log(`Access Granted`);
} else {
    console.log(`Access Denied`);
}

/*
            ====> Level 2 – Slightly Tougher but Logical <====
*/

//Q:5:- 11. Allow only 3 attempts to enter correct password , If user gets it right early, stop. If not → “Account locked”.
let attempt = 1;

while (attempt <= 3) {
    let inputpassword = prompt(`Attempt [${attempt}/3] - Enter your Password: `, { echo: '*' });

    if (inputpassword === password) {
        console.log("✅ Access Granted: Welcome!");
        break;
    }
    else {
        if (attempt < 3) {
            console.log("❌ Wrong password, try again!");
        } else {
            console.log(`\n🚫 Limit Reached (${attempt}/3). Your Account is LOCKED!`);
        }
    }
    attempt++;
}


//Q:6:- Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".

let words = prompt("type your words in Yes/Stop : ");
let count = 0;
while (words.toLowerCase() !== "stop") {
    words = prompt(`You Typed ${words} , If you don't want to type please type Stop : `)
    if (words.toLowerCase() === "yes") {
        count += 1;
    }
}
console.log(`You types ${count} times of repeat ${words} word`);

//Q:7:- Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(`${i} is Divide by 7`);

    }
}

//Q:8:- Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum

let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} is the ODD Number`);
        sum += i;
    }
}
console.log(`The Sum of all Odd Numbers from 1 to 30 = ${sum}\n`);

//Q:9 :- Keep asking number until user enters an even number Use while loop. Stop only if input is even.

number = Number(prompt('enter Number : '))
while (number % 2 !== 0) {
    console.log(`You typed ${number} which is not Even Number `);
    number = Number(prompt('please Enter the Even Number : '));

}
console.log(`Congrats! You typed ${number} which is Even.`);


//Q:10:-  Print numbers between two user inputs Input start and end using prompt() → print all between.

let StartRange = Number(prompt("Enter the Starting Range Number : "))
let EndRange = Number(prompt("Enter the End Range Number : "))

for (StartRange = (StartRange + 1); StartRange < EndRange; StartRange++) {
    console.log(`${StartRange}`);
}

//Q:11:- Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

count = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        count += 1;

        if (count === 3) {
            break;
        }
    }
}

//Q:12:-Ask user 5 numbers. Count how many are positive Use loop + condition + counter.
count = 0;
for (let i = 1; i <= 5; i++) {
    number = Number(prompt(`Enter ${i} number : `))
    if (number > 0) {
        console.log(`${number} is Positive.`);
        count += 1;
    } else {
        console.log(`${number} is Negative.`);
    }
}
console.log(`${count} time has arived the Positive Numbers`);

/*

 Q:13:- ATM Simulator – Allow 3 withdrawals
        Start with ₹1000 balance. Ask withdrawal amount 3 times.
        If enough balance → deduct
        Else → print “Insufficient balance”

*/
 
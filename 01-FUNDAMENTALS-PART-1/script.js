/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Umut");
console.log(23);

let firstName = "Umut";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variabla name conventions
let umut_cayli = "UC";
let $function = 27;

let person = "Umut";
let PI = 3.1415;

let myFirstJob = "Developer";
let myCurrentJob = "Programmer";

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Umut");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';
console.log(job); */

/*
const now = 2022;
const ageUmut = now - 1998;
const ageFriend = now - 1997;
console.log(ageUmut, ageFriend);
console.log(ageUmut * 2, ageFriend / 10, 2 ** 3);

// 2 ** 3 means 2 to power of 3 = 2 * 2 *2;

const firstName = "Umut";
const lastName = "Cayli";
console.log(firstName + ' ' + lastName);


// Asssignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10, 15 + 10 = 25;
x *= 4; // x = x * 4, 25 * 4 = 100;
x++; // 100+1;
x--; // 101-1 = 100; 
console.log(x);

// Comparison operators
console.log(ageUmut > ageFriend); // >, <, >=, <=
console.log(ageFriend >= 18);

const isFullAge = ageFriend >= 18;
console.log(isFullAge);

console.log(now - 1997 > now - 2018); */

/* const now = 2022;
const ageUmut = now - 1998;
const ageFriend = now - 1997;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x=y=10
console.log(x, y);

const averageAge = ageUmut + ageFriend / 2;
console.log(ageUmut, ageFriend, averageAge);

 */

/* The Complete JavaScript Course 5
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;


console.log(BMIMark, BMIJohn, markHigherBMI);

*/

// template literals
/* 
const firstName = "Umut";
const job = "engineer";
const birthYear = 1998;
const year = 2022;

const umut =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(umut);

const umutNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(umutNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);

 */

/* const age = 17;
const isOldEnough = age > 18;

if (isOldEnough) {
  console.log("Umut can start driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Umut is too young. Wait another
  ${yearsLeft} years :)`);
}

let century;
const birthYear = 1998;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
 */

/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀 

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if(BMIMark > BMIJohn){
    console.log(`Marks's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}

*/

// Type Conversion

/* const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("I am " + String(23) + " years old");
console.log("23" * "2");

let n = "1" + 1; // 11
n = n - 1; // 11-1 = 10;
console.log(n);

*/
/* 
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean(""));

const money = 1;
if (money) {
  console.log("Don't speed it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/* const age = 18;
if (age === 18) console.log("You just be became an adult :d");

if (age == 18) console.log("Lose");

const favourite = Number(prompt("Whats your favourite number"));

console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23");

*/
/* 
const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..");
}

const isTired = true;
console.log(hasDriversLicence && !hasGoodVision && isTired);
 */

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀 */

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (scoreKoalas === scoreDolphins) {
//   console.log("Both win the trophy");
// }

// BONUS 1

/* 
const scoreDolphins = (97 + 112 + 1019) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy");
}

*/
/* 
const day = "saturday";

switch (day) {
  case "monday":
    console.log("This is a monday");
    break;
  case "tuesday":
    console.log("This is tuesday");
    break;
  case "wednesday":
    console.log("this is a wednesday");
  case "thursday":
    console.log("thursday");
  case "friday":
    console.log("friday");
  case "saturday":
  case "sunday":
    console.log("weekends");
    break;
  default:
    console.log("week days");
}

if (day === "monday") {
} else if (day === "tuesday") {
} else if (day === "wednesday" || day === "thursday") {
} else if (day === "friday") {
} else if (day === "saturday" || day === "sunday") {
    console.log("weekends")
} else {
  console.log("week days");
}
 */
/* 
const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);
 */

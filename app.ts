#! /usr/bin/env  node
//SHABANG
import inquirer from "inquirer";

//firstly we have to make a five digit unique student id
let studentid: number = Math.floor(10000 + Math.random() * 70000);

//create a variable for balance
let balance: number = 20000;

// create questions using inquirer

let question = await inquirer.prompt([
  {
    name: "stuName",
    type: "input",
    message: "Enter student name: ",
  },
  {
    name: "courses",
    type: "list",
    message: "Select the course to enroll: ",
    choices: ["HTML", "CSS", "TYPESCRIPT", "PYTHON", "GENERATED AI"],
  },
]);

const courseFees: { [key: string]: number } = {
  HTML: 4000,
  CSS: 5000,
  TYPESCRIPT: 6500,
  PYTHON: 7500,
  "GENERATED AI": 10000,
};
console.log(` TUITION FEES: ${courseFees[question.courses]}`);
console.log(`balance : ${balance}`);

let payAmount = await inquirer.prompt([
  {
    name: "payment",
    type: "input",
    message: "Enter amount: ",
  },
]);

//create variable name tuitionfees
const tuitionFee = courseFees[question.courses];
//creat variable named payment amount
const paymentAmount = parseFloat(payAmount.payment);

//checking condition using if_else statement
if (tuitionFee === paymentAmount) {
  console.log(
    `\n******CONGRATULATIONS! you have successfully enroll in ${question.courses}*******\n:`
  );

  let options = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: "what would you like to do next? ",
      choices: ["view status", "exit"],
    },
  ]);

  if (options.select === "view status") {
    console.log(
      `\t~~~~~~~~~~~~~Student Name :${question.stuName}~~~~~~~~~~~~~~~~`
    );
    console.log(
      `\t~~~~~~~~~~~~~~Student ID: ${studentid}~~~~~~~~~~~~~~~~~~~~~~`
    );
    console.log(`\t~~~~~~~~~~~~Course Enrolled : ${question.courses}~~~~~~~~`);
    console.log(`\t~~~~~~~~Tuition Fees paid: ${payAmount.payment}~~~~~~~`);
    console.log(`\t~~~~~~Balance : ${(balance -= payAmount.payment)}~~~~~`);
  } else {
    ("Exit student management system");
  }
} else {
  console.log("Invalid Amount");
}



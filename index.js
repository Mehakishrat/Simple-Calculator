#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Welcome Message
console.log("\n\tWellcome to \'Mehak ishrat\' - CLI simple calculator\n");
// Asking Question from User through inquirer
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "Firstnumber" },
    { message: "Enter Second number", type: "number", name: "Secondnumber" },
    {
        message: "Select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement if else
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else {
    console.log("Invalid input");
}
;

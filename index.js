#!/ usr/ bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("you have insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "cash",
                message: "select a fast cash option",
                type: "list",
                choices: ["500", "1000", "2000", "3000", "5000"],
            },
        ]);
        myBalance -= fastAns.cash;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect Pin code");
}

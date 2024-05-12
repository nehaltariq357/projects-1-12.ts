import inquirer from "inquirer";
const Atm_Machine = async () => {
    let balance = 10000;
    const myPin = 111;
    let attempts = 3;
    const delay = (seconds) => {
        return new Promise((resolve) => setTimeout(resolve, seconds));
    };
    while (attempts > 0) {
        const { enterPin } = await inquirer.prompt([
            {
                name: "enterPin",
                type: "input",
                message: "enter your pin",
            },
        ]);
        if (parseInt(enterPin) === myPin) {
            console.log(`please wait few seconds`);
            await delay(3000);
            console.log("Pin is verified! Access Granted");
            break;
        }
        else {
            attempts--;
            if (attempts > 0) {
                console.log(`Incorrect Pin. You have ${attempts} remaining `);
            }
            else {
                console.log(`You entered an incorrect PIN 3 times. Your card is blocked.`);
                return false;
            }
        }
    }
    // deposite function
    const Deposite = async () => {
        const { adding } = await inquirer.prompt([
            {
                name: "adding",
                type: "input",
                message: "Enter the amount you want to deposite",
            },
        ]);
        const DepositeAmount = parseInt(adding);
        balance += DepositeAmount;
        console.log("your amount is deposited sucessfully");
        console.log(`your current balance is ${balance}`);
    };
    // -----------------
    // withdraw function
    const Withdraw = async () => {
        const { receiving } = await inquirer.prompt([
            {
                name: "receiving",
                type: "input",
                message: "Enter the amount you want to withdraw",
            },
        ]);
        const WithdrawAmount = parseInt(receiving);
        balance -= WithdrawAmount;
        console.log(`your transition is on the way please wait`);
        await delay(3000);
        console.log(`${WithdrawAmount} is withdrawed please collect`);
        console.log(`your updated balance is ${balance}`);
    };
    // -----------------
    const { options } = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            choices: [
                "Check Balance",
                "Deposite Balance",
                "Withdraw Balance",
                "Exit",
            ],
            message: "Select An Option",
        },
    ]);
    if (options === "Check Balance") {
        console.log(`balance is ${balance}`);
    }
    else if (options === "Deposite Balance") {
        Deposite();
    }
    else if (options === "Withdraw Balance") {
        Withdraw();
    }
    else if (options === "Exit") {
        console.log(`thank you bye`);
    }
};
Atm_Machine();

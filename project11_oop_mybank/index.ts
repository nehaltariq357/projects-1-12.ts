import inquirer from "inquirer";
import { fa, faker, th } from "@faker-js/faker";
// customer class
class Customer {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public gender: string,
    public mobilenumber: number,
    public accountnumber: number
  ) {}
}

// bank account interface

interface BankAccount {
  accountNumber: number;
  balance: number;
}

// bank class

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];
  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }
  addAccountNumber(obj: BankAccount) {
    this.account.push(obj);
  }
}

let myBank = new Bank();
//customer create

for (let i = 1; i <= 3; i++) {
  let fname = faker.person.firstName();
  let lname = faker.person.lastName();
  let num = parseInt(faker.phone.number("92#######"));
  const cus = new Customer(fname, lname, 20 * i, "male", num, 1000 + i);
  myBank.addCustomer(cus);
  myBank.addAccountNumber({
    accountNumber: cus.accountnumber,
    balance: 100 * i,
  });
}

const BankSystem = async (bank: Bank) => {
  const { app } = await inquirer.prompt([
    {
      name: "app",
      type: "list",
      choices: ["view balance", "deposit", "withdraw"],
      message: "Please select the service",
    },
  ]);

  if (app === "view balance") {
    const { input } = await inquirer.prompt([
      {
        name: "input",
        type: "input",
        message: "Please enter your account number",
      },
    ]);
    const account = myBank.account.find((acc) => acc.accountNumber == input);
    if (!account) {
      console.log("Invalid account number");
    } else {
      console.log(`Your balance is: ${account.balance}`);
    }
  } else if (app === "deposit") {
    const { input } = await inquirer.prompt([
      {
        name: "input",
        type: "input",
        message: "Please enter your account number",
      },
    ]);
    const account = myBank.account.find((acc) => acc.accountNumber == input);
    if (!account) {
      console.log("Invalid account number");
    } else {
      const { amount } = await inquirer.prompt([
        {
          name: "amount",
          type: "input",
          message: "Enter the amount to deposit:",
          validate: (input) => !isNaN(input) && parseFloat(input) > 0,
        },
      ]);
      account.balance += parseFloat(amount);
      console.log("Deposit successful! Your new balance is: ", account.balance);
    }
  } else if (app === "withdraw") {
    const { input } = await inquirer.prompt([
      {
        name: "input",
        type: "input",
        message: "Please enter your account number",
      },
    ]);
    const account = myBank.account.find((acc) => acc.accountNumber == input);
    if (!account) {
      console.log("Invalid account number");
    } else {
      const { amount } = await inquirer.prompt([
        {
          name: "amount",
          type: "input",
          message: "Enter the amount to withdraw:",
          validate: (input) => !isNaN(input) && parseFloat(input) > 0,
        },
      ]);
      if (parseFloat(amount) > account.balance) {
        console.log("Insufficient funds");
      } else {
        account.balance -= parseFloat(amount);
        console.log(
          "Withdrawal successful! Your new balance is: ",
          account.balance
        );
      }
    }
  }
};

BankSystem(myBank);

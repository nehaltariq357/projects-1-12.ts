import inquirer from "inquirer";

const currecy_converter = async () => {
  const currecny: any = {
    USD: 1,
    PKR: 280,
    INR: 74.57,
    EUR: 0.91,
    GBP: 0.76,
  };

  const { amount, from, to } = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Enter the amount you want to convert",
      
    },
    {
      name: "from",
      type: "list",
      message: "select the currecy you change from",
      choices: Object.keys(currecny),
    },
    {
      name: "to",
      type: "list",
      message: "select the currecy you want to",
      choices: Object.keys(currecny),

    },
  ]);

  const resultAmount = (amount * currecny[to]) / currecny[from];
  console.log(`${amount } ${from}:${resultAmount.toFixed(2)} ${to}`);

};
currecy_converter();

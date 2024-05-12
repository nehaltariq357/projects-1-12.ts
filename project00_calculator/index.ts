import inquirer from "inquirer";

const calculator_cli = async () => {
  const choice = [
    "Add",
    "Subtract",
    "Multiply",
    "Divide",
    "Exponent",
    "Modulus",
  ];
  const { num1, num2, operators } = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "enter the first number ",
    },
    {
      name: "num2",
      type: "number",
      message: "enter the second number",
    },
    {
      name: "operators",
      type: "list",
      choices: choice,
    },
  ]);

  let result;

  if (operators === "Add") {
    result = num1 + num2;
  } else if (operators === "Subtract") {
    result = num1 - num2;
  } else if (operators === "Multiply") {
    result = num1 * num2;
  } else if (operators === "Divide") {
    result = (num1 / num2).toFixed(2);
  } else if (operators === "Exponent") {
    result = num1 ** num2;
  } else if (operators === "Modulus") {
    result = num1 % num2;
  } else {
    console.log("please select valid operator");
    return;
  }

  console.log(`Result of ${operators}: ${result}`);
};

calculator_cli();

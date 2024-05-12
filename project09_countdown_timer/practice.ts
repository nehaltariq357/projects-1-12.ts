import inquirer from "inquirer";

const delay = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds));
};

const countdownTimer = async (seconds: number) => {
  while (seconds > 0) {
    const remainingSeconds = seconds;
    console.log(`Time ${remainingSeconds} seconds`);
    await delay(1000);
    seconds--;
  }

  console.log("Time's up!");
};

const { timer } = await inquirer.prompt([
  {
    name: "timer",
    type: "input",
    message: "enter count down timer in seconds",
  },
]);

const seconds = parseInt(timer);
if (!isNaN(seconds) && seconds > 0) {
  countdownTimer(seconds);
} else {
  console.log("Please enter a valid number of seconds.");
}


// this file is not using date module , rough work 
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const { timer } = await inquirer.prompt([
  {
    name: "timer",
    type: "input",
    message: "Enter countdown timer in seconds",
  },
]);

const startTimer = (value: number) => {
  const initialTime = new Date().setSeconds(new Date().getSeconds() + value);

  const interval = setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(initialTime, currentTime);
    if (timeDiff <= 0) {
      console.log(`Timer has expired`);
      process.exit();
    }
    const min = Math.floor((timeDiff % (3600 * 24)) / 60);
    const sec = Math.floor(timeDiff % 60);
    console.log(`${min}:${sec < 10 ? "0" : ""}${sec}`);
  }, 1000);
};

const seconds = parseInt(timer);
if (!isNaN(seconds) && seconds > 0) {
  startTimer(seconds);
} else {
  console.log("Please enter a valid number of seconds.");
}

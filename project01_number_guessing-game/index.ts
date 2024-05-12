import inquirer from "inquirer";

const guess_game = async () => {
  let chances = 3;
  const randomNumber = Math.floor(Math.random()*10) + 1;
  while (chances > 0) {
    const { game } = await inquirer.prompt([
      {
        name: "game",
        type: "input",
        message: `please enter a number between 1 to 10 : (${chances} remeaning)`,
      },
    ]);
    const userGuess = parseInt(game);
    if (userGuess === randomNumber) {
      console.log("conguratulations! you guessed the correct number");
      return;
    } else {
      console.log("incorrect guessed! try again");
      chances--;
    }
  }
  console.log(
    `game over! try next time \n\t\t\n the correct number is ${randomNumber}\n\t\t\n`
  );
};
guess_game();

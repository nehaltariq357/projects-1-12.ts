import inquirer from "inquirer";
const word_counter = async () => {
    const { app } = await inquirer.prompt([
        {
            name: "app",
            type: "input",
            message: "enter your sentence to count the word",
        },
    ]);
    const count = app.trim().split(" "); // if i add space it counts "word" or if i don't add space it counts single "alphabets"
    console.log(count);
    console.log(`your sentence word count is: ${count.length}`);
};
word_counter();

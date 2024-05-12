import chalk from "chalk";
import inquirer from "inquirer";
const apilink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
const fetchData = async (data) => {
    const fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res;
};
const QuizSystem = async () => {
    const data = await fetchData(apilink);
    let score = 0;
    for (let i = 0; i < data.results.length; i++) {
        let question = data.results[i];
        let choice = [...question.incorrect_answers, question.correct_answer];
        const { quiz } = await inquirer.prompt([
            {
                name: "quiz",
                type: "list",
                choices: choice,
                message: question.question
            },
        ]);
        if (quiz === question.correct_answer) {
            console.log(chalk.green(`correct`));
            score++;
        }
        else {
            console.log(chalk.red(`incorrect`));
        }
    }
    console.log(`your score:${score}/${data.results.length}`);
};
QuizSystem();

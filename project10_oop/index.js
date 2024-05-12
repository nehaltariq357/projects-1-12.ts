import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const main = async () => {
    console.log(`Welcome!`);
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Whom would you like to interact with?",
                choices: ["Staff", "Student", "Exit"],
            },
        ]);
        switch (choice.toLowerCase()) {
            case "staff":
                console.log(`You approach the staff room. Please feel free to ask any questions.`);
                break;
            case "student":
                const { studentName } = await inquirer.prompt({
                    name: "studentName",
                    type: "input",
                    message: "Enter the student's name you wish to engage with:",
                });
                const existingStudent = person.students.find((student) => student.name === studentName);
                if (!existingStudent) {
                    const newStudent = new Student(studentName);
                    person.addStudent(newStudent);
                    console.log(`Hello, I'm ${newStudent.name}. Nice to meet you!`);
                    console.log(`New student added.`);
                }
                else {
                    console.log(`Hello, I'm ${existingStudent.name}. Nice to see you again!`);
                }
                console.log(`Current student list:`);
                console.log(person.students.map((student) => student.name));
                break;
            case "exit":
                console.log("Exiting the program.");
                process.exit();
        }
    }
};
main();

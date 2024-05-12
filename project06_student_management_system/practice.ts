import inquirer from "inquirer";

class Student {
  name: string;
  age: number;
  grade: number;

  constructor(name: string, age: number, grade: number) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  display() {
    console.log(`Name:${this.name}`);
    console.log(`Age:${this.age}`);
    console.log(`Grade:${this.grade}`);
    console.log(`********************`)
  }
}

class StudentManager {
  student: Student[];
  constructor() {
    this.student = [];
  }

  add(para: Student) {
    this.student.push(para);
  }

  displayAll() {
    this.student.forEach((para) => para.display());
  }
}

const main = async () => {
  const manager = new StudentManager();

  while (true) {
    const { choice } = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        choices: ["Add Student", "Display All Student",'Exit'],
        message: "select an option",
      },
    ]);

    if (choice === "Add Student") {
      const { name,age,grade } = await inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "enter student name",
        },
        {
          name: "age",
          type: "input",
          message: "enter student age",
        },
        {
          name: "grade",
          type: "input",
          message: "enter student grade",
        },
      ]);

      // const { name, age, grade } = student;

      const insatance = new Student(name, parseInt(age),parseInt(grade));
      manager.add(insatance);
      console.log("student added sucessfully");
    }else if (choice === "Display All Student"){
      manager.displayAll()
    }else if (choice === 'Exit'){
      break
    }
  }
};
main()
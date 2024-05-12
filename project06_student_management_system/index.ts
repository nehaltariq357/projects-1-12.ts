import inquirer from "inquirer";

class Student {
  static counter: number = 0;
  id: string;
  name: string;
  age: number;
  grade: number;
  enrollCourses: string[];

  constructor(name: string, age: number, grade: number, enrollCourses: string[]) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.id = this.generateID();
    this.enrollCourses = enrollCourses;
  }

  generateID() {
    Student.counter++;
    const padCounter = Student.counter.toString().padStart(5, "0");
    return padCounter;
  }

  display() {
    console.log(`Student ID:${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
    console.log(`Enrolled Courses: ${this.enrollCourses.join(", ") || "None"}`);
    console.log(`//-------------------//`);
  }
}

class StudentManager {
  students: Student[];

  constructor() {
    this.students = [];
  }

  add(student: Student) {
    this.students.push(student);
  }

  displayAll() {
    this.students.forEach((student) => student.display());
  }
}

class Course {
  name: string;
  courses: string[];

  constructor(name: string) {
    this.name = name;
    this.courses = ["python", "typescript", "html", "css"];
  }

  displayCourses() {
    console.log(`Courses offered in ${this.name}`);

    this.courses.forEach((course, index) => {
      console.log(`${index + 1}: ${course}`);
    });
  }
}

const main = async () => {
  const manager = new StudentManager();
  const course = new Course("Programming");

  while (true) {
    const { choice } = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option",
        choices: [
          "Add Student",
          "Display All Students",
          "View Courses",
          "Enroll in a course",
          "Exit",
        ],
      },
    ]);

    if (choice === "Add Student") {
      const studentInfo = await inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "Enter student name",
        },
        {
          name: "age",
          type: "input",
          message: "Enter student age",
        },
        {
          name: "grade",
          type: "input",
          message: "Enter student grade",
        },
      ]);

      const { name, age, grade } = studentInfo;
      const student = new Student(name, parseInt(age), parseInt(grade), []);
      manager.add(student);
      console.log(`Student added successfully`);
    } else if (choice === "Display All Students") {
      manager.displayAll();
    } else if (choice === "View Courses") {
      course.displayCourses();
    } else if (choice === "Enroll in a course") {
      manager.displayAll();

      const { studentIndex } = await inquirer.prompt([
        {
          name: "studentIndex",
          type: "number",
          message: "Enter the index of the student you want to enroll in a course",
        },
      ]);

      const selectedStudent = manager.students[studentIndex - 1];

      if (selectedStudent) {
        course.displayCourses();

        const { courseIndex } = await inquirer.prompt([
          {
            name: "courseIndex",
            type: "number",
            message: "Enter the index of the course you want to enroll the student in",
          },
        ]);

        const selectedCourseIndex = courseIndex - 1;

        if (selectedCourseIndex >= 0 && selectedCourseIndex < course.courses.length) {
          const selectedCourse = course.courses[selectedCourseIndex];
          selectedStudent.enrollCourses.push(selectedCourse);
          console.log(`Enrolled ${selectedStudent.name} in ${selectedCourse} course successfully`);
        } else {
          console.log(`Invalid course index`);
        }
      } else {
        console.log(`Invalid student index`);
      }
    } else if (choice === "Exit") {
      break;
    }
  }
};

main();

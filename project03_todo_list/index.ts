import inquirer from "inquirer";

const my_todo = async () => {
  let storeTodo: any = [];

  const delay = (seconds: any) => {
    return new Promise((resolve) => setTimeout(resolve, seconds));
  };

  // add todo
  const add_function = async () => {
    const { add } = await inquirer.prompt([
      {
        name: "add",
        type: "input",
        message: "Enter The Task",
      },
    ]);

    storeTodo.push({ add });
    console.log("Adding ....");
    await delay(2000);
    console.log("Task Added Successfully");
  };
  // ----------------------//

  // show todo

  const read_function = () => {
    console.log("Available Task");

    storeTodo.forEach((task: any, index: any) => {
      console.log(`${index + 1}.${task.add}`);
    });
  };
  // --------------------//
  // edit task
  const edit_function = async () => {
    const task = storeTodo.map((element: any, index: any) => {
      return { name: `${index + 1}.${element.add}`, value: index };
    });

    const { edit } = await inquirer.prompt([
      {
        name: "edit",
        type: "list",
        message: "Select task you want to edit",
        choices: task,
      },
    ]);

    const { new_Task } = await inquirer.prompt([
      {
        name: "new_Task",
        type: "input",
        message: "Enter your new task",
      },
    ]);

    if (storeTodo.length === 0) {
      console.log("no task available");
    } else {
      storeTodo[edit] = { add: new_Task };
      console.log("updating task");
      await delay(2000);
      console.log(`task edit sucessfully`);
    }
  };
  ///-------------------//
  // delete task

  const delete_function = async () => {
    if (storeTodo.length === 0) {
      console.log("no task available");
    } else {
      storeTodo = [];
      console.log("deleting ....");
      await delay(2000);
      console.log("task deleted sucessfully");
    }
  };

  // ----------------//
  while (true) {
    const { options } = await inquirer.prompt([
      {
        name: "options",
        type: "list",
        choices: [
          "Add New Task",
          "Shows Task",
          "Edit Task",
          "Delete Task",
          "Exit",
        ],
        message: "Select An Option",
      },
    ]);

    if (options === "Add New Task") {
      await add_function();
    } else if (options === "Shows Task") {
      read_function();
    } else if (options === "Edit Task") {
      await edit_function();
    } else if (options === "Delete Task") {
      delete_function();
    } else if (options === "Exit") {
      console.log("bye");

      return false;
    }
  }
};

my_todo();

import inquirer from "inquirer";
import colors from "colors";

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: "Create task",
      },
      {
        value: "2",
        name: "List All Tasks",
      },
      {
        value: "3",
        name: "List Completed Tasks",
      },
      {
        value: "4",
        name: "List Pending Task(s)",
      },
      {
        value: "5",
        name: "Complete Task(s)",
      },
      {
        value: "6",
        name: "Delete a Task",
      },
      {
        value: "0",
        name: "Exit",
      },
    ],
  },
];

export const inquireMenu = async () => {
  //   console.clear();
  console.log("===============================================".green);
  console.log("                Choose an option               ".green);
  console.log("===============================================\n".green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

export const pause = async () => {
  const pauseQuestion = [
    {
      type: "input",
      name: "pauseOpt",
      message: `Press ${"Enter".cyan} to continue`,
    },
  ];

  console.log('\n')
  const { pauseOpt } = await inquirer.prompt(pauseQuestion);

  return pauseOpt;
};

import inquirer from "inquirer";
import colors from "colors";

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?\n",
    choices: [
      {
        value: "1",
        name: `${'1.'.green} Create task`,
      },
      {
        value: "2",
        name: `${'2.'.green} List All Tasks`,
      },
      {
        value: "3",
        name: `${'3.'.green} List Completed Tasks`,
      },
      {
        value: "4",
        name: `${'4.'.green} List Pending Task(s)`,
      },
      {
        value: "5",
        name: `${'5.'.green} Complete Task(s)`,
      },
      {
        value: "6",
        name: `${'6.'.green} Delete a Task`,
      },
      {
        value: "0",
        name: `${'0.'.green} Exit`,
      },
    ],
  },
];

export const inquireMenu = async () => {
  //   console.clear();
  console.log("===============================================".cyan);
  console.log("                Choose an option               ".magenta);
  console.log("===============================================\n".cyan);

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

  console.log("\n");
  const { pauseOpt } = await inquirer.prompt(pauseQuestion);

  return pauseOpt;
};

export const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,

      validate(value) {
        if(!value.length) return "Please enter a value";

        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
};

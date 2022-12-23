import colors from "colors";
import { inquireMenu, pause, readInput } from "./utils/inquirer.js";
import { saveDB, readDb } from "./utils/saveFile.js";
import Tasks from "./models/tasks.js";
console.clear();

const main = async () => {
  let opt = "";
  const taskList = new Tasks();
  const tasksFromDb = readDb()

  if (tasksFromDb) {

    taskList.getTaskFromDb( tasksFromDb )
  }

  
  do {
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Description: ");
        taskList.createTask( desc )
   
        break;
      case "2":
        console.log(taskList.listArr);
        break;
    }
   
    saveDB(taskList.listArr)
   
    opt !== "0" && (await pause());
  } while (opt !== "0");
};

main();

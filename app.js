import colors from "colors";
import {
  inquireMenu,
  pause,
  readInput,
  listTasks,
  confirmDeletion,
} from "./utils/inquirer.js";
import { saveDB, readDb } from "./utils/saveFile.js";
import Tasks from "./models/tasks.js";
console.clear();

const main = async () => {
  let opt = "";
  const taskList = new Tasks();
  const tasksFromDb = readDb();

  if (tasksFromDb) {
    taskList.getTaskFromDb(tasksFromDb);
  }

  do {
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Description: ");
        taskList.createTask(desc);

        break;
      case "2":
        taskList.formatList();
        break;

      case "3":
        taskList.listByStatus(true);
        break;

      case "4":
        taskList.listByStatus(false);
        break;
        case "5":
        const ids = await listTasks(taskList.listArr, 'checkbox', 'Selecciones')
        taskList.changeStatus( ids )
        break;
      case "6":
        const id = await listTasks(taskList.listArr);
        if (id !== "0") {
          const confirmation = await confirmDeletion(
            "Are u sure u want to delete this task?"
          );
          if (confirmation) {
            taskList.deleteTask(id);
            console.log("task deleted succesfully");
          }
        }
        break;
    }

    saveDB(taskList.listArr);

    opt !== "0" && (await pause());
  } while (opt !== "0");
};

main();

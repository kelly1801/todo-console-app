import Task from "./task.js";
import colors from "colors";
export default class Tasks {
  _list = {};

  get listArr() {
    const list = [];

    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];

      list.push(task);
    });

    return list;
  }
  constructor() {
    this._list = {};
  }

  getTaskFromDb(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  formatList(listToFormat = this.listArr) {
    const list = listToFormat.map((task, index) => {
      return `\n ${colors.green(index + 1 + ".")} ${task.desc} :: ${
        task.doneAt ? "Done".green : "Pending".red
      }`;
    });
    console.log(...list);
  }

  listByStatus(status = true) {
    const listFiltered = this.listArr.filter(
      (task) => Boolean(task.doneAt) === status
    );
    return this.formatList(listFiltered);
  }

  deleteTask(id) {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  changeStatus(ids = []) {
     ids.map((id) => {
      const task = this._list[id];
      if (!task.doneAt) {
        task.doneAt = new Date().toISOString();
      }
    });

    this.listArr.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].doneAt = null;
      }
    });
  }
}

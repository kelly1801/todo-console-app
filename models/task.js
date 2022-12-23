import { v4 as uuid } from "uuid";

export default class Task {
  id = "";
  desc = "";
  doneAt = null;

  constructor(desc) {
    this.id = uuid();
    this.desc = desc;
    this.doneAt = null;
  }
}

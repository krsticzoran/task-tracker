class CompletedTaskModel {
  static completedTask = [];

  static getCompletedTask() {
    return this.completedTask;
  }

  static addCompletedTask(element) {
    this.completedTask.unshift({ input: element[0], date: element[1] });
    localStorage.setItem("todo1", JSON.stringify(this.completedTask));
  }

  static setCompletedTask() {
    // store  completed tasks  from localeStorege
    JSON.parse(localStorage.getItem("todo1")) &&
      this.completedTask.unshift(...JSON.parse(localStorage.getItem("todo1")));
  }
}

export default CompletedTaskModel;

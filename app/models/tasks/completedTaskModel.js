class CompletedTaskModel {
  static completedTask = [];

  static getCompletedTask() {
    return this.completedTask;
  }

  // delete task
  static deleteTask(e) {
    const element = this.getElement(e);
    this.completedTask.forEach((task, index) => {
      if (task.input == element[0] && task.date == element[1]) {
        this.completedTask.splice(index, 1);
        localStorage.setItem("todo1", JSON.stringify(this.completedTask));
      }
    });
  }

  //delete all tasks
  static deleteAllCompletedTask() {
    this.completedTask = [];
    localStorage.setItem("todo1", JSON.stringify(this.completedTask));
  }

  // get clicked task
  static getElement(e) {
    return [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.parentElement.querySelector(".date-for-delete").textContent,
    ];
  }

  // add completed task
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

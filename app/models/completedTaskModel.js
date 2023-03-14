class CompletedTaskModel {
  static completedTask = [{ input: "jeee", date: 22 }];

  static getCompletedTask() {
    return this.completedTask;
  }

  static setCompletedTask(task) {
    this.completedTask.unshift(task);
    // store  completed tasks  from localeStorege
    //JSON.parse(localStorage.getItem("todo1")) &&
    //completedTask.unshift(...JSON.parse(localStorage.getItem("todo1")));
  }
}

export default CompletedTaskModel;

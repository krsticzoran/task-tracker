class CompletedTaskView {
  constructor() {
    this.completedList = document.querySelector(".completed--list");
    this.btnCompleted = document.querySelector(".btn--completed");
    this.btndeleteAll = document.querySelector(".delete-all-completed");
  }

  // listen on delete all button
  bindDeleteAll(handler) {
    this.btndeleteAll.addEventListener("click", handler);
  }

  // listen clicks on completed tasks
  bindCompletedClick(handler) {
    this.completedList.addEventListener("click", handler);
  }

  //listen clicks on completed btn in menu
  bindCompletedList(handler) {
    this.btnCompleted.addEventListener("click", handler);
  }

  // display completed tasks
  renderCompletedTask(task) {
    this.completedList.innerHTML = "";
    task.map((item) => {
      this.completedList.innerHTML += `<li class='completed--li'><span class="span--completed">${item.input}</span><span class='date-for-delete span--to-do-date'>${item.date}</span><button class='delete'>Delete</button></li>`;
    });
  }
}
export default CompletedTaskView;

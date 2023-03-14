class CompletedTaskView {
  constructor() {
    this.completedList = document.querySelector(".completed--list");
    this.btnCompleted = document.querySelector(".btn--completed");
  }

  bindCompletedList(handler) {
    this.btnCompleted.addEventListener("click", handler);
  }

  renderCompletedTask(task) {
    this.completedList.innerHTML = "";
    task.map((item) => {
      this.completedList.innerHTML += `<li class='completed--li'><span class="span--completed">${item.input}</span><span class='date-for-delete span--to-do-date'>${item.date}</span><button class='delete'>Delete</button></li>`;
    });
  }
}
export default CompletedTaskView;

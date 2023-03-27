class TodayTaskView {
  constructor() {
    this.listToday = document.querySelector(".today--list");
    this.btnToday = document.querySelector(".btn--today");
  }

  // listen clicks on tasks
  bindTaskClick(handler) {
    this.listToday.addEventListener("click", handler);
  }

  // listen clicks on today btn in menu
  bindTodayList(handler) {
    this.btnToday.addEventListener("click", handler);
  }

  // render today tasks
  renderTodayTask(task) {
    this.listToday.innerHTML = "";
    task.map((item) => {
      this.listToday.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${item.input}</span
      ><span class='span--to-do-date'>${item.date}</span><button class="btn--confirm">Confirm</button></li>`;
    });
  }
}
export default TodayTaskView;

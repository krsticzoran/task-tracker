class TodayTaskView {
  constructor() {
    this.listToday = document.querySelector(".today--list");
    this.btnToday = document.querySelector(".btn--today");
  }

  bindTaskClick(handler) {
    this.listToday.addEventListener("click", handler);
  }

  bindTodayList(handler) {
    this.btnToday.addEventListener("click", handler);
  }

  renderTodayTask(task) {
    this.listToday.innerHTML = "";
    task.map((item) => {
      this.listToday.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${item.input}</span
      ><span class='span--to-do-date'>${item.date}</span><button class="btn--confirm">Confirm</button></li>`;
    });
  }
}
export default TodayTaskView;

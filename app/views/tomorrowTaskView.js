class TomorrowTaskView {
  constructor() {
    this.btnTomorrow = document.querySelector(".btn--tomorrow");
    this.listTomorrow = document.querySelector(".tomorrow--list");
  }

  bindTomorrowList(handler) {
    this.btnTomorrow.addEventListener("click", handler);
  }

  bindTomorrowClick(handler) {
    this.listTomorrow.addEventListener("click", handler);
  }

  renderTomorrowTask(task) {
    this.listTomorrow.innerHTML = "";
    task.map((item) => {
      this.listTomorrow.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${item.input}</span
      ><span class='span--to-do-date'>${item.date}</span><button class="btn--confirm">Confirm</button></li>`;
    });
  }
}
export default TomorrowTaskView;

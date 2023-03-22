class InputView {
  constructor() {
    this.list = document.querySelector(".list");
    this.btnHome = document.querySelector(".btn--all");
    this.task = document.querySelector(".list--li");
    this.sort = document.querySelector(".sort");
  }

  bindSort(handler) {
    this.sort.addEventListener("click", handler);
  }

  bindTask(handler) {
    this.list.addEventListener("click", handler);
  }

  bindList(handler) {
    this.btnHome.addEventListener("click", handler);
  }

  clearToDoList() {
    this.list.innerHTML = "";
  }
  // render tasks
  renderToDoList(input) {
    input.map((item) => {
      this.list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${item.input}</span
      //><span class='span--to-do-date'>${item.date}</span><button class="btn--confirm">Confirm</button></li>`;
    });
  }
}

export default InputView;

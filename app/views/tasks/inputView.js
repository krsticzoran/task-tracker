class InputView {
  constructor() {
    this.list = document.querySelector(".list");
    this.btnHome = document.querySelector(".btn--all");
    this.task = document.querySelector(".list--li");
    this.sort = document.querySelector(".sort");
  }

  // listen clicks on sort btn
  bindSort(handler) {
    this.sort.addEventListener("click", handler);
  }

  //listen clicks on tasks
  bindTask(handler) {
    this.list.addEventListener("click", handler);
  }

  // listen clicks on home btn in menu
  bindList(handler) {
    this.btnHome.addEventListener("click", handler);
  }

  // clear main task view
  clearToDoList() {
    this.list.innerHTML = "";
  }
  // render tasks
  renderToDoList(input, pageNumber) {
    const inputPage = input.slice((pageNumber - 1) * 10, pageNumber * 10);
    inputPage.map((item) => {
      this.list.innerHTML += `<li class="list--li"><input type="checkbox" class="check" /><span class="span--to-do">${item.input}</span
      //><span class='span--to-do-date'>${item.date}</span><button class="btn--confirm">Confirm</button></li>`;
    });
  }
}

export default InputView;

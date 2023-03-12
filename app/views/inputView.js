class InputView {
  constructor() {
    this.list = document.querySelector(".list");
    this.btnFailed = document.querySelector(".btn--failed");
    //this.listFailed = document.querySelector(".failed--list");
  }

  bindFailedList(handler) {
    this.btnFailed.addEventListener("click", handler);
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

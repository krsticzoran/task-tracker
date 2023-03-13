class FailedView {
  constructor() {
    this.btnFailed = document.querySelector(".btn--failed");
    this.listFailed = document.querySelector(".failed--list");
  }

  bindFailedList(handler) {
    this.btnFailed.addEventListener("click", handler);
  }

  renderFailedList(failed) {
    this.listFailed.innerHTML = "";
    failed.map((item) => {
      this.listFailed.innerHTML += `<li class='completed--li'><span class="span--completed">${item.input}</span><span class='date-for-delete span--to-do-date'>${item.date}</span><button class='delete'>Delete</button></li>`;
    });
  }
}

export default FailedView;

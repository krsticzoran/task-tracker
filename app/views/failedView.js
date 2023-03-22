class FailedView {
  constructor() {
    this.btnFailed = document.querySelector(".btn--failed");
    this.listFailed = document.querySelector(".failed--list");
    this.deleteAll = document.querySelector(".delete-all-failed");
  }

  bindFailedList(handler) {
    this.btnFailed.addEventListener("click", handler);
  }

  bindClickDelete(handler) {
    this.listFailed.addEventListener("click", handler);
  }

  bindDeleteAll(handler) {
    this.deleteAll.addEventListener("click", handler);
  }

  renderFailedList(failed) {
    // Clear the existing list
    this.listFailed.innerHTML = "";
    // Map over the failed inputs array and create a list item for each input
    failed.map((item) => {
      this.listFailed.innerHTML += `<li class='completed--li'><span class="span--completed">${item.input}</span><span class='date-for-delete span--to-do-date'>${item.date}</span><button class='delete'>Delete</button></li>`;
    });
  }
}

export default FailedView;
